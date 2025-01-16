import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { db } from "~/database/.client";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader({ }: Route.ClientLoaderArgs) {
  const contacts = await db.query.users.findMany();

  return { contacts }
}

export default function Home({ loaderData }: Route.ComponentProps) {




  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-2xl">Pglite & Electric Sql with drizzle</h1>

      <p className="mt-10 text-gray-400">
                A contact application demonstrating local first database, Pglite and Electric Sql with drizzle and integrating in react router v7.
              </p>

      <div>
        {loaderData.contacts.map((item) => (
          <div>
            <h1>{item.email}</h1>
          </div>
        )).length <= 0 && (
            <div className="py-10">
              <h1>No Contacts in your phonebook!</h1>
            </div>
          )}
      </div>
    </main>
  );
}
