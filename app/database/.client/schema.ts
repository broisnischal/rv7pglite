
import { text, pgTable } from "drizzle-orm/pg-core"

export const users = pgTable('users', {
    id: text('id').primaryKey(),
    firstName: text('first_name').notNull(),
    lastName: text('last_name').notNull(),
    email: text('email'),
    phone: text('phone').notNull(),
})