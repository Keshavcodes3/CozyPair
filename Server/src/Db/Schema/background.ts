import {
    pgTable,
    text,
    timestamp,
    boolean,
    uuid,
    varchar,
    integer
} from "drizzle-orm/pg-core";

//?one to many relationship , it can exist without parent as it comes pre built,

type backgroundType="static"|"animated"


export const backgrounds=pgTable("backgrounds",{
    id:uuid("background_id").defaultRandom().notNull().primaryKey().unique(),
    backgroundName:text("background_name").notNull().unique(),
    imageUrl:text("image_url").notNull(),
    type:text('background_type').$type<backgroundType>().default("static")
})