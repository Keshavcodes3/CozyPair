import {
    pgTable,
    text,
    timestamp,
    boolean,
    uuid
} from "drizzle-orm/pg-core";
import { user } from "./users.js";
import { rooms } from "./rooms.js";

type TaskStatus ="PENDING"|"DONE"|"ONGOING"

export const tasks = pgTable("tasks", {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id').notNull().references(() => user.id),
    roomId: uuid('room_id').notNull().references(() => rooms.id),
    title: text("task_title").notNull(),
    description: text("task_description"),
    status:text("task_status").$type<TaskStatus >().default("PENDING").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow()
})
