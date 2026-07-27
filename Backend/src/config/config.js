import env from './env.js';



if (!env.MONGO_URI) {
    throw new Error('MONGO_URI is not defined in the environment variables');
}

if (!env.ACCESS_TOKEN_SECRET) {
    throw new Error('JWT_ACCESS_TOKEN_SECRET is not defined in the environment variables');
}

if (!env.REFRESH_TOKEN_SECRET) {
    throw new Error('JWT_REFRESH_TOKEN_SECRET is not defined in the environment variables');
}


const _config = {
    MONGO_URI: env.MONGO_URI,
    JWT_ACCESS_TOKEN_SECRET: env.ACCESS_TOKEN_SECRET,
    JWT_REFRESH_TOKEN_SECRET: env.REFRESH_TOKEN_SECRET,
    // REDIS_URI: process.env.REDIS_URI
}

 
export default Object.freeze(_config);