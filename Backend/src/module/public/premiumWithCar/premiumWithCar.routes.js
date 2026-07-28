import express from "express";
import asyncHandler from "../../../shared/utils/asyncHandle.js";
import { getAllPremiumCars } from "./premiumWithCar.controller.js";

const router = express.Router();

router.get(
  "/vehicles",
  asyncHandler(getAllPremiumCars)
);

// router.get(
//   "/vehicles/:id",
//   asyncHandler(getPremiumCarById)
// );

export default router;