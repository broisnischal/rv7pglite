// import { readMigrationFiles } from "drizzle-orm/migrator";
// import { join, dirname } from "node:path";
// import { fileURLToPath } from "node:url";
// import fs from "node:fs";

// const __dirname = dirname(fileURLToPath(import.meta.url));

// const migrations = await readMigrationFiles({
//   migrationsFolder: join(__dirname, "../drizzle"),
// });

// await fs.promises.writeFile(
//   join(__dirname, "./migrations.json"),
//   JSON.stringify(migrations)
// );

// console.log("Wrote migrations.json");



import fs from "node:fs/promises";
import { readMigrationFiles } from "drizzle-orm/migrator";

export const base = "./app/database/.client";
export const migrationsFolder = `${base}/migrations`;

const file = "app/database/.client/migrations/export.json";

await fs.writeFile(
  `${file}`,
  JSON.stringify(
    readMigrationFiles({
      migrationsFolder,
    }),
    null,
    0
  ),
  {
    flag: "w",
  }
);
