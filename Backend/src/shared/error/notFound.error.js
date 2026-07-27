import { AppError } from "./appError.js";
import { StatusCodes } from 'http-status-codes'
export class NoteFound extends AppError {
    constructor(message) {
        super(message, StatusCodes.NOT_FOUND)
    }
}