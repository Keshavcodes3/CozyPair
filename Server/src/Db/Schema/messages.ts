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



//?lets keep senderid and emit the content into the whole room without storing the reciever id

export const messages = pgTable("messages", {
    id: uuid("message_id").defaultRandom().primaryKey(),
    roomId: uuid("room_id").notNull().references(() => rooms.id),
    senderId: uuid("sender_id").notNull().references(() => user.id),
    content: text("content").notNull(),
    isPinned: boolean("is_pinned").default(false),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow()
})