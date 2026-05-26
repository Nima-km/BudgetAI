import { drizzle } from "drizzle-orm/expo-sqlite"; // community wrapper
import { openDatabaseSync } from "expo-sqlite";
import { expense } from "./schema";
export const DATABASE_NAME = "database";
const expoDb = openDatabaseSync(DATABASE_NAME);
export const db = drizzle(expoDb, {
    schema: {
        expense,
    },
});
