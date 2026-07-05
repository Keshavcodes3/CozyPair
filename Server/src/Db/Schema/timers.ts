import {
    pgTable,
    uuid,
    integer,
    boolean,
    timestamp,
} from "drizzle-orm/pg-core";
import { rooms } from "./rooms.js";

export const roomSettings = pgTable("room_settings", {
    roomId: uuid("room_id")
        .primaryKey()
        .references(() => rooms.id, {
            onDelete: "cascade",
        }),

    maxMembers: integer("max_members")
        .default(20)
        .notNull(),

    isChatEnabled: boolean("is_chat_enabled")
        .default(true)
        .notNull(),

    isMusicEnabled: boolean("is_music_enabled")
        .default(false)
        .notNull(),

    pomodoroMinutes: integer("pomodoro_minutes")
        .default(50)
        .notNull(),

    shortBreakMinutes: integer("short_break_minutes")
        .default(10)
        .notNull(),

    longBreakMinutes: integer("long_break_minutes")
        .default(20)
        .notNull(),

    updatedAt: timestamp("updated_at", {
        withTimezone: true,
    })
        .defaultNow()
        .notNull(),
});