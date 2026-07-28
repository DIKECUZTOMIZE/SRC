import express from "express";
import asyncHandler from "../../../shared/utils/asyncHandle.js";
import { getAllAirportTransfer } from "./airportTransfer.controller.js";



const router = express.Router();

router.get(
    "/vehicles",
    asyncHandler(getAllAirportTransfer)
);

// router.get(
//     "/vehicles/:id",
//     asyncHandler(getAirportTransferById)
// );

export default router;