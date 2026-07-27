import jwt from 'jsonwebtoken'
import env from '../config/env.js'
import { Unauthorize } from '../shared/error/unAuthorize.error.js';
export const authMiddleware = (req, res, next) => {


    try {
        const token = req.cookies.accessToken;
        const payload = jwt.verify(token, env.ACCESS_TOKEN_SECRET);

        req.user = payload;

        next();
    } catch (err) {


        return res.status(401).json({
            success: false,
            message: "Access token expired",
        });
    }
};



export const authorizationMiddleware = (...roles) => {

    return (req, res, next) => {
         console.log("User Role:", req.user.role);
    console.log("Allowed Roles:", roles);
        if (roles.includes(req.user.role)) {
            return next();
        }

        throw new Unauthorize("Invalid role");
    };
};