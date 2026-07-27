export class AppError extends Error {
    constructor(message, statuscode) {
        super(message)

        this.message = message;
        this.statuscode = statuscode;
        this.success = false;
        this.name = "AppError"
    }
}