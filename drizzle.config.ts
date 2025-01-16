import type { Config } from "drizzle-kit";

export default {
  out: "./drizzle",
  schema: "./database/schema.ts",
  driver: "pglite",
  dialect: "postgresql",
} satisfies Config;
