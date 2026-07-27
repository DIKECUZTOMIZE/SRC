
import * as userDao from "../../../dao/user.dao.js";
import * as sessionDao from "../../../dao/session.dao.js";
import * as  token from '../../../shared/utils/token.js'
import { NoteFound } from "../../../shared/error/notFound.error.js";
import data from "../../../config/env.js";
import { ROLES } from "../../../constant/model.constant.js";


export const registerUserService = async ({ username, email, password }) => {

    const isUserExists =
        await userDao.getUserByEmailOrUsername({ email, username });

    if (isUserExists) {
        throw new Error("User already exists");
    }

    const user = await userDao.createUser({
        username,
        email,
        password,
    });

    // Access Token
    const accessToken = token.generateAccessToken({
        userId: user._id,
        role: user.role,
    });

    // Refresh Token
    const refreshToken = token.generateRefreshToken(user._id);

    // Create Session
    await sessionDao.createSession({
        userId: user._id,
        refreshToken,
    });

    return {
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        },
        accessToken,
        refreshToken,
    };
};
export const loginUserService = async ({ email, password }) => {

    let user = await userDao.getUserByEmailOrUsername({ email });

    if (!user) {
        throw new NoteFound("User not found");
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
        throw new Error("Invalid email or password");
    }

    const accessToken = token.generateAccessToken({
        userId: user._id,
        role: user.role,
    });

    // ✅ Only user._id
    const refreshToken = token.generateRefreshToken(user._id);
    const session = await sessionDao.getSessionByUserId(user._id);

    if (!session) {
        await sessionDao.createSession({
            userId: user._id,
            refreshToken,
        });
    } else {
        await sessionDao.updateSessionByUserId(user._id, {
            refreshToken,
        });
    }

    user = {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
    };

    return {
        user,
        accessToken,
        refreshToken,
    };
};

export const logoutUserService = async (refreshToken) => {

    if (!refreshToken) {
        throw new BadRequest("Refresh token not found");
    }

    const decoded =
        token.verifyRefreshToken(refreshToken);

    await sessionDao.deleteSessionByUserId(
        decoded.userId
    );


};

export const refreshService = async (refreshToken) => {

    if (!refreshToken) {
        throw new Error("Refresh token not found");
    }

    const decoded = token.verifyRefreshToken(refreshToken);

    const session = await sessionDao.getSessionByUserId(decoded.userId);

    if (!session) {
        throw new Error("Session not found");
    }

    const isValid = await session.compareRefreshToken(refreshToken);

    if (!isValid) {
        throw new Error("Invalid refresh token");
    }


    const user = await userDao.getUserById(decoded.userId);



    const newAccessToken = token.generateAccessToken({
        userId: user._id,
        role: user.role
    });


    const newRefreshToken = token.generateRefreshToken(user._id);


    await sessionDao.updateSessionByUserId(decoded.userId, {
        refreshToken: newRefreshToken,
    });


    return {
        newAccessToken,
        newRefreshToken,
    };
};

// admin:
export const adminLoginService = async ({ email, password }) => {

    const user = await userDao.getUserByEmailOrUsername({ email });

    if (!user) {
        throw new Error("Admin not found");
    }

    if (user.role !== ROLES.ADMIN) {
        throw new Error("Access denied");
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
        throw new Error("Invalid password");
    }

    // Generate Tokens
    const accessToken = token.generateAccessToken({
        userId: user._id,
        role: user.role,
    });

    const refreshToken = token.generateRefreshToken(user._id);

    // Check if session already exists
    const existingSession = await sessionDao.getSessionByUserId(user._id);

    if (existingSession) {
        // Update existing session
        await sessionDao.updateSessionByUserId(user._id, {
            refreshToken,
        });
    } else {
        // Create new session
        await sessionDao.createSession({
            userId: user._id,
            refreshToken,
        });
    }

    return {
        admin: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        },
        accessToken,
        refreshToken,
    };
};
export const adminDashboardService = async (userId) => {
    const admin = await userDao.getUserById(userId);

    if (!admin) {
        throw new Error("Admin not found");
    }

    return {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
    };
};