import type { Route } from "./+types/server-only-route";

export async function loader({}: Route.LoaderArgs) {
  const product = [
    {
      id: 1,
      name: "Product 1",
      description: "Description 1",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description 2",
    },
  ];

  return product;
}

export default function Product({ loaderData }: Route.ComponentProps) {
  const data = loaderData;

  return (
    <div>
      <h1>Products</h1>

      {data.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
