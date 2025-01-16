import { drizzle } from "drizzle-orm/pglite";
import { PGlite } from "@electric-sql/pglite";
import * as schema from "./schema";
import { IdbFs, MemoryFS } from "@electric-sql/pglite";

const client = new PGlite("idb://my-db");

// const client = new PGlite({
//   fs: new MemoryFS(),
// });

// const client = new PGlite({
//   fs: new IdbFs("my-database"),
// });

export const db = drizzle({
  client,
  schema,
});
