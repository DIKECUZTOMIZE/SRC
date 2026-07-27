import { buildFailureResponse } from "../shared/utils/buildFailureResponse.js";

export const errorHandleMiddleware = (err, req, res, next) => {
 
    const errMessage = err.message;
    const errName = err.name;
    const errStatus = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
console.log(errMessage)
    if (errName === "TokenExpiredError" || errName === "JsonWebTokenError" || errName === "NotBeforeError") {
        return buildFailureResponse(res, "refresh token expired", StatusCodes.UNAUTHORIZED);
    }
    return buildFailureResponse(res, errMessage, errStatus)

}