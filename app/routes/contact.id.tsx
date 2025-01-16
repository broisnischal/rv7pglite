import { Form, Outlet } from "react-router";
import type { Route } from "./+types/contact.id";

export async function loader({ params }: Route.LoaderArgs) {
  const id = params.id;

  return {
    id,
  };
}

export default function SingleContact({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  console.log(actionData);

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>Contact {loaderData.id}</h1>

      <Form method="post" navigate={false}>
        <input type="text" name="name" />
        <button type="submit">Edit User</button>
      </Form>
    </main>
  );
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const title = formData.get("name");

  console.log(title);

  return {
    title,
  };
}

export async function clientAction({
  request,
  serverAction,
}: Route.ClientActionArgs) {
  const data = await serverAction();

  console.log("client data");
  console.log(data);
  return data;
}
