import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { db } from "~/database/.client";
import { Form, Link, useFetcher } from "react-router";
import { users } from "~/database/.client/schema";
import { useRef } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader({}: Route.ClientLoaderArgs) {
  const contacts = await db.query.users.findMany();

  return { contacts };
}

export default function Home({ loaderData, actionData }: Route.ComponentProps) {
  let fetcher = useFetcher();
  let busy = fetcher.state !== "idle";

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-2xl">Pglite & Electric Sql with drizzle</h1>

      <p className="mt-10 text-gray-500">
        A contact application demonstrating local first database, Pglite and
        Electric Sql with drizzle and integrating in react router v7. checkout
        the github{" "}
        <Link
          className="underline text-black"
          to={"https://github.com/broisnischal/rv7pglite"}
        >
          repo
        </Link>{" "}
        🚀, and soon will be content related to this.
      </p>

      <div className="flex my-5 align-top gap-5">
        <div className="w-1/3">
          <fetcher.Form
            ref={formRef}
            method="post"
            className="flex flex-col  gap-2 [&>input]:p-2 [&>input]:border w-full"
          >
            <input type="text" name="firstname" placeholder="First Name" />
            <input type="text" name="lastname" placeholder="Last Name" />
            <input type="text" name="email" placeholder="Email address" />
            <input type="text" name="phone" placeholder="Phone number" />
            <button
              type="submit"
              disabled={busy}
              onClick={() => {
                fetcher.submit(formRef.current);
                formRef.current?.reset();
              }}
              className="bg-black p-2 text-white"
            >
              {busy ? "Adding..." : "Add Contact"}
            </button>
          </fetcher.Form>
          {actionData ? (
            <p className="">{actionData.title} updated successfully!</p>
          ) : null}
        </div>

        <div className="flex gap-4 flex-wrap">
          {loaderData.contacts.length <= 0 ? (
            <div className="self-start">
              <h1 className="">No Contacts in your phonebook!</h1>
            </div>
          ) : (
            loaderData.contacts.map((item) => (
              <div className="py-4 px-6 w-fit h-min border rounded-md">
                <h2>
                  {item.firstName} {item.lastName}
                </h2>
                <h1 className="text-gray-500">{item.email}</h1>
                <Link to={`tel:${item.phone}`}>{item.phone}</Link>
                {/* <Link to={`/contact/${item.id}`}>View User</Link> */}
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const phone = formData.get("phone");

  if (!firstname || !lastname || !email || !phone) {
    return { title: "All fields are required" };
  }

  await db.insert(users).values({
    firstName: firstname as string,
    lastName: lastname as string,
    email: email as string,
    phone: phone as string,
    id: crypto.randomUUID(),
  });

  return { title: "Contact added" };
}
