import {
    pgTable,
    text,
    timestamp,
    boolean,
    uuid
} from "drizzle-orm/pg-core";

type Status="Online"|"Offline"|"Away"|"Break"|"Study"

export const user = pgTable("user", {
    id: uuid("id").defaultRandom().notNull().primaryKey(),
    username: text("username").notNull().unique(),
    displayName:text("display_name").notNull(),
    avatarUrl:text("avatar_url"),
    clerkId: text("clerk_id").notNull().unique(),
    bio: text("bio"),
    isOnline:boolean("is_online").$type<Status>().default("Offline").notNull(),
    timeZone:text("time_zone").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt:timestamp("updated_at",{withTimezone:true}).defaultNow()

})

