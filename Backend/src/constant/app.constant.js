import env from '../config/env.js'
export default {
    PORT: 8000,
    MONGO_URL: 'mongodb://localhost:27017',
    NODE_ENV: "development",
    LOGGER_LEVEL: "info",
    RATELIMIT_WINDOW_MS: 24 * 60 * 60 * 1000,
    RATELIMIT: 1000000000,
}

export const app_config = () => {
    return {
        jwt: {
            accessToken: {
                expiresIn: env.NODE_ENV === "production" ? "1H"
                    : "7D"
            },
            refreshToken: { expiresIn: env.NODE_ENV === "production" ? "30D" : "1H" }
        },
        cookie: {
            accessToken: {
                httpOnly: false,
                secure: env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: env.NODE_ENV === "production" ? 60 * 60 * 1000
                    : 7 * 24 * 60 * 60 * 1000,
            },
            refreshToken: {
                httpOnly: true,
                secure: env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: env.NODE_ENV === "production" ? 30 * 24 * 60 * 60 * 1000 : 60 * 60 * 1000
            }
        }
    }
}