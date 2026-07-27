

import { StatusCodes } from 'http-status-codes'
import { AppError } from './appError.js';

export class Unauthorize extends AppError {
    constructor(message) {
        super(message, StatusCodes.UNAUTHORIZED)
    }
}