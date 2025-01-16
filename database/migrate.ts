// import { db } from "database";
// import { migrate } from "drizzle-orm/pglite/migrator"

// await migrate(db    , {
//   migrationsFolder: "./drizzle/",
// });

// console.log("Migration complete")

import type { MigrationConfig } from "drizzle-orm/migrator";
import { db } from ".";
import migrations from "./migrations.json";
// import { migrate } from "drizzle-orm/pglite/migrator";

export async function migrate() {
  // dialect and session will appear to not exist...but they do

  db.dialect.migrate(migrations, db._.session, {
    migrationsTable: "drizzle",
  } satisfies Omit<MigrationConfig, "migrationsFolder">);

  // db.dialect.migrate(migrations, db._.session, {
  //   migrationsTable: "drizzle_migrations",
  // } satisfies Omit<MigrationConfig, "migrationsFolder">);
}
