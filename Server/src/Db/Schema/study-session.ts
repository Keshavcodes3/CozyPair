import {
    pgTable,
    text,
    timestamp,
    boolean,
    uuid,
    integer
} from "drizzle-orm/pg-core";
import { user } from "./users.js";
import { rooms } from "./rooms.js";



type SessionStatus =
    | "ACTIVE"
    | "COMPLETED"
    | "INTERRUPTED";


export const studySessions = pgTable("study-session", {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").notNull().references(() => user.id),
    roomId: uuid("room_id").notNull().references(() => rooms.id),
    startedAt: timestamp("started_at", { withTimezone: true }).defaultNow().notNull(),
    endedAt: timestamp("ended_at", { withTimezone: true }),
    durationMinutes: integer("duration_minutes"),
    status: text("status")
        .$type<SessionStatus>()
        .default("ACTIVE")
        .notNull(),
})