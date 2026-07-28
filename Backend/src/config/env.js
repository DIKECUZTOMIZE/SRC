import "dotenv/config";
import { z } from "zod";
import appConstant from "../constant/app.constant.js";


const schema = z.object({
    NODE_ENV: z.string().default(appConstant.NODE_ENV),
    MONGO_URI: z.string().default(appConstant.MONGO_URL),
    PORT: z.coerce.number().default(appConstant.PORT),
    LOGGER_LEVEL: z.string().default(appConstant.LOGGER_LEVEL),
    RATELIMIT_WINDOW_MS: z.coerce.number().default(appConstant.RATELIMIT_WINDOW_MS),
    RATELIMIT: z.coerce.number().default(appConstant.RATELIMIT),
    CORS_ORIGIN: z.string(),
    REFRESH_TOKEN_SECRET: z.string(),
    ACCESS_TOKEN_SECRET: z.string(),

});

const envSchema = schema.safeParse(process.env);

if (!envSchema.success) {
    console.error(envSchema.error.format());
    process.exit(1);
}

export default envSchema.data;