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


type RoomType="Solo"|"Couple"|"Team"

export const rooms=pgTable("room",{
    id:uuid("room_id").defaultRandom().unique().primaryKey(),
    ownerId:uuid("owner_id").references(()=>user.id).notNull(),
    inviteCode:varchar("invite_code", { length: 12 }).unique(),
    isPrivate:boolean("is_private").default(true),
    maxMembers:integer("max_member").default(20),
    description:text('description').notNull(),
    backgroundId:text("Background_id").notNull(),
    roomName:text("room_name").notNull(),
    roomType:text("room_type").$type<RoomType>().default("Solo").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt:timestamp("updated_at",{withTimezone:true}).defaultNow()

})