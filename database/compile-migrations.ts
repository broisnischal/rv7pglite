import { readMigrationFiles } from "drizzle-orm/migrator";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const migrations = await readMigrationFiles({
  migrationsFolder: join(__dirname, "../drizzle"),
});

await fs.promises.writeFile(
  join(__dirname, "./migrations.json"),
  JSON.stringify(migrations)
);

console.log("Wrote migrations.json");
