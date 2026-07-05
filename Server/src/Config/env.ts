import 'dotenv/config'

type config = {
    DATABASE_URL: string,
    CLERK_PUBLISHABLE_KEY: string,
    CLERK_SECRET_KEY: string,
    CLERK_PUBLIC_KEY: string,
    STREAM_API_KEY: string,
    STREAM_API_SECRET: string,
    PORT: string,
}


export const APIconfig: config = {
    PORT: process.env.PORT!,
    DATABASE_URL: process.env.DATABASE_URL!,
    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY!,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY!,
    CLERK_PUBLIC_KEY: process.env.CLERK_PUBLIC_KEY!,
    STREAM_API_KEY: process.env.STREAM_API_KEY!,
    STREAM_API_SECRET: process.env.STREAM_API_SECRET!,

}