import jwt from 'jsonwebtoken';
import config from '../../config/config.js';
import { app_config } from '../../constant/app.constant.js';


// sing
export const generateAccessToken = (user) => {
    return jwt.sign(
        {
            userId: user.userId,   // ✅ _id নহয়
            role: user.role,
        },
        config.JWT_ACCESS_TOKEN_SECRET,
        app_config().jwt.accessToken
    );
};

export const generateRefreshToken = (userId) => {
    return jwt.sign(
        { userId },
        config.JWT_REFRESH_TOKEN_SECRET,
        app_config().jwt.refreshToken
    );
};


// verify
export const verifyAccessToken = (token) => {
    try {
        const decoded = jwt.verify(token, config.JWT_ACCESS_TOKEN_SECRET);
        return decoded;
    } catch (error) {
        throw new Error('Invalid or expired access token');
    }
}
export const verifyRefreshToken = (token) => {
    try {
        const decoded = jwt.verify(token, config.JWT_REFRESH_TOKEN_SECRET);
        return decoded;
    } catch (error) {
        throw new Error('Invalid or expired refresh token');
    }
}