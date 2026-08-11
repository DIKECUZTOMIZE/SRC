import { buildFailureResponse } from "../shared/utils/buildFailureResponse.js";

export const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            console.error("Validation Error:", result.error.issues);

            return buildFailureResponse(
                res,
                "Validation Failed",
                400,
                result.error.issues
            );
        }

        req.body = result.data;

        next();
    };
};