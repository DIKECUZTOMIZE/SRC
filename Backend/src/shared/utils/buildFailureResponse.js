export const buildFailureResponse = (
    res,
    message,
    statusCode = 400,
    errors = null
) => {
    return res.status(statusCode).json({
        success: false,
        message,
        errors,
    });
};