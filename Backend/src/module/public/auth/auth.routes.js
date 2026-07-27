import { Router } from "express";
import {
    loginUserController,
    logoutUserController,
    registerUserController,
    refreshTokenController,
    getMe,
    adminDashboardController,
    adminLoginController,
} from "./auth.controller.js";
import { validate } from "../../../validator/validate .js";
import { loginSchema, registerSchema } from "../../../schema/auth.schema.js";
import asyncHandle from "../../../shared/utils/asyncHandle.js";
import {
    authMiddleware,
    authorizationMiddleware,
} from "../../../middleware/auth.middleware.js";
import { ROLES } from "../../../constant/model.constant.js";

const authRouter = Router();

authRouter.post(
    "/register",
    validate(registerSchema),
    asyncHandle(registerUserController),
);

authRouter.post(
    "/login",
    validate(loginSchema),
    asyncHandle(loginUserController),
);

authRouter.post("/logout", logoutUserController);

authRouter.get("/refresh-token", refreshTokenController);

authRouter.get("/current-user", authMiddleware, asyncHandle(getMe));




// admin
// Admin Login
authRouter.post(
    "/admin-login",
    validate(loginSchema),
    asyncHandle(adminLoginController)
);

authRouter.get(
    "/dashboard",
    authMiddleware,
    authorizationMiddleware(ROLES.ADMIN),
    asyncHandle(adminDashboardController),
);
export default authRouter;
