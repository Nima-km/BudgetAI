import { CategoryNames } from "@/components/UIcomponents/IconProvider/CategoryIcon";
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export type RecurrenceType =
    | "one-time"
    | "weekly"
    | "bi-weekly"
    | "monthly"
    | "yearly";

export const expense = sqliteTable("expense", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    amount: integer("amount").default(0).notNull(),
    timestamp: integer("timestamp", { mode: "timestamp" })
        .notNull()
        .default(sql`(unixepoch())`),
    name: text("name", { length: 50 }),
    merchant: text("merchant", { length: 50 }),
    recurrence: text("recurrence")
        .$type<RecurrenceType>()
        .default("one-time")
        .notNull(),
    category: text("category", { length: 250 }).$type<CategoryNames>(),
    note: text("note").notNull(),
});
export const income = sqliteTable("income", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    amount: integer("amount").default(0).notNull(),
    timestamp: integer("timestamp", { mode: "timestamp" })
        .notNull()
        .default(sql`(unixepoch())`),
    name: text("name", { length: 50 }),
    recurrence: text("recurrence")
        .$type<RecurrenceType>()
        .default("one-time")
        .notNull(),
    category: text("category", { length: 250 }).$type<CategoryNames>(),
    note: text("note").notNull(),
});
