import {
    pgTable,
    text,
    timestamp,
    boolean,
    uuid,
    varchar,
    integer
} from "drizzle-orm/pg-core";
import { user } from "./users.js";
import { rooms } from "./rooms.js";


type Role = "owner" | "admin" | "member" | "custom"

type Status = "Online" | "Offline" | "Away" | "Break" | "Study"

type userStatus = "ACTIVE" | "LEFT" | "REMOVED" | "KICKED"


export const members = pgTable("members", {
    roomId: uuid("room_id").references(() => rooms.id),
    nickname: text("nickname"),
    userId: uuid("user_id").references(() => user.id).notNull(),
    role: text("role").$type<Role>().default("member").notNull(),
    focusMinutes: integer("focus_minutes").default(0),
    membershipStatus: text('membership_status').notNull().$type<userStatus>().default("ACTIVE"),
    notificationEnabled: text("notification_Enabled"),
    joinedAt: timestamp("joined_at", { withTimezone: true }).defaultNow()
})