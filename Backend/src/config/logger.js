 
import pino from "pino";
import env from "./env.js";

export const logger = pino({
    level: env.LOGGER_LEVEL,
    transport: {
        target: "pino-pretty",
    },
});