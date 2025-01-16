import type { Route } from "./+types/client-only-route";

async function fakeLoadLocalGameData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { name: "Game Name", description: "Game Description" };
}

export async function clientLoader() {
  const data = await fakeLoadLocalGameData();
  return data;
}

export function HydrateFallback() {
  return <p>Loading Game...</p>;
}

export default function Component({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1>{loaderData.name}</h1>
      <p>{loaderData.description}</p>
    </div>
  );
}
