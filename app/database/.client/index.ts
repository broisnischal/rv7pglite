import { drizzle } from "drizzle-orm/pglite";
import { PGlite } from "@electric-sql/pglite";
import { PgDialect } from "drizzle-orm/pg-core/dialect";
// import { vector } from "@electric-sql/pglite/vector";
import * as schema from "./schema";
import migrations from './migrations/export.json'

const isDev = process.env.NODE_ENV === "development";

const dbName = isDev ? "remix-dev" : "remix";

const client = await PGlite.create({
    dataDir: "idb://" + dbName,
    // extensions: { vector },
})

const _db = drizzle(client, {
    schema,
    logger: isDev
})

let isLocalDBSchemaSynced = false;

if (!isLocalDBSchemaSynced) {
    const start = performance.now();
    try {
        // @ts-expect-error
        await new PgDialect().migrate(migrations, _db._.session, dbName);
        isLocalDBSchemaSynced = true;
        console.info(`✅ Local database ready in ${performance.now() - start}ms`);
    } catch (cause) {
        console.error("❌ Local database schema migration failed", cause);
        throw cause;
    }
}


const db = Object.assign(_db, {
    schema,
});


export { db };