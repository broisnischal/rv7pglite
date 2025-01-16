import type { Config } from "drizzle-kit";

const base = "./app/database/.client";
export const migrationsFolder = `${base}/migrations`;

export default {
    dialect: "postgresql",
    schema: "./database/schema.ts",
    out: migrationsFolder,
    verbose: false,
    migrations: {
        prefix: "timestamp",
    }
} satisfies Config;
