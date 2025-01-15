import { db } from "database";
import { migrate } from "drizzle-orm/pglite/migrator"

await migrate(db    , {
  migrationsFolder: "./drizzle/",
});

console.log("Migration complete")