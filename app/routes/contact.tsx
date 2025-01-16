import { Link, Outlet } from "react-router";
import type { Route } from "./+types/contact";

export const contactData = [
  {
    id: 1,
    name: "sandes thapa",
    desciption: "Description 1",
  },
  {
    id: 2,
    name: "sundar gautam",
    desciption: "Description 2",
  },
];

export async function loader() {
  return {
    data: contactData,
  };
}

export default function Page({ loaderData }: Route.ComponentProps) {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-3xl font-bold font-sans">Contacts</h1>

      <div className="flex gap-6 flex-col mt-5">
        {loaderData.data.map((contact) => (
          <div>
            <Link to={`/contact/${contact.id}`}>
              <h2 className="capitalize">{contact.name}</h2>
              <p className="text-gray-400">{contact.desciption}</p>
            </Link>
          </div>
        ))}
      </div>

      <Outlet />
    </main>
  );
}
