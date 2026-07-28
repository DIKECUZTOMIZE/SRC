import express from "express";
import asyncHandler from "../../../shared/utils/asyncHandle.js";
import { getAllTempoTravellerBus, getTempoTravellerBusById } from "./tempoTravellerBusRoute.controller.js";

const router = express.Router();


// Public - Get all Tempo Traveller & Bus
router.get(
    "/vehicles",
    asyncHandler(getAllTempoTravellerBus)
);


// Public - Get single vehicle details
router.get(
    "/vehicles/:id",
    asyncHandler(getTempoTravellerBusById)
);


export default router;