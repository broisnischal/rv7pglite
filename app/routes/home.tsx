import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
// import { db } from "database";
import { users } from "database/schema";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  let data;
  // const data = await db.select().from(users).limit(10);

  return { data };
}

export default function Home() {
  return <Welcome />;
}
