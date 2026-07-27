import * as userDao from "../../../dao/user.dao.js";
import * as sessionDao from "../../../dao/user.dao.js";
import { app_config } from "../../../constant/app.constant.js";
import { buildSuccessResponse } from "../../../shared/utils/buildSuccessResponse.js";
import {
    loginUserService,
    registerUserService,
    logoutUserService,
    refreshService,
    adminLoginService,
    adminDashboardService,
} from "./auth.service.js";


export const registerUserController = async (req, res) => {
    const data = await registerUserService(req.body);

    res.cookie(
        "refreshToken",
        data.refreshToken,
        app_config().cookie.refreshToken,
    );

    res.cookie(
        "accessToken",
        data.accessToken,
        app_config().cookie.accessToken,
    );

    delete data.refreshToken;

    return buildSuccessResponse(
        res,
        "User registered successfully",
        201,
        data
    );
};

export const loginUserController = async (req, res) => {
    console.log('ram')
    const data = await loginUserService(req.body);

    res.cookie(
        "refreshToken",
        data.refreshToken,
        app_config().cookie.refreshToken,
    );
    res.cookie(
        "accessToken",
        data.accessToken,
        app_config().cookie.accessToken,
    );
    delete data.refreshToken;

    return buildSuccessResponse(res, "User logged in successfully", 200, data);
};

export const logoutUserController = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    await logoutUserService(refreshToken);

    res.clearCookie("refreshToken", app_config().cookie.refreshToken);

    return buildSuccessResponse(res, "User logged out successfully", 200);
};

export const refreshTokenController = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    const { newAccessToken, newRefreshToken } =
        await refreshService(refreshToken);

    res.cookie(
        "accessToken",
        newAccessToken,
        app_config().cookie.accessToken
    );

    res.cookie(
        "refreshToken",
        newRefreshToken,
        app_config().cookie.refreshToken
    );

    return buildSuccessResponse(
        res,
        "Tokens refreshed successfully",
        200,
        {
            accessToken: newAccessToken,
        }
    );
};

export const getMe = async (req, res) => {
    const userId = req.user.userId;

    const user = await userDao.getUserById(userId);

    if (!user) {
        return buildFailureResponse(res, "User not found", 404);
    }

    return buildSuccessResponse(
        res,
        "User data retrieved successfully",
        200,
        {
            id: user._id,
            username: user.username,
            email: user.email,
        }
    );
};

export const adminLoginController = async (req, res) => {
    const data = await adminLoginService(req.body);

    res.cookie(
        "accessToken",
        data.accessToken,
        app_config().cookie.accessToken
    );

    res.cookie(
        "refreshToken",
        data.refreshToken,
        app_config().cookie.refreshToken
    );

    delete data.refreshToken;

    return buildSuccessResponse(
        res,
        "Admin logged in successfully",
        200,
        data
    );
};

export const adminDashboardController = async (req, res) => {

    const data = await adminDashboardService(req.user.userId);

    return buildSuccessResponse(
        res,
        "Admin dashboard",
        200,
        data
    );
};


