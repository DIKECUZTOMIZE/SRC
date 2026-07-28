import express from "express";
import asyncHandler from "../../../shared/utils/asyncHandle.js";
import { getAllWeddingCars } from "./wedding.controller.js";

const router = express.Router();

router.get(
  "/vehicles",
  asyncHandler(getAllWeddingCars)
);

// router.get(
//   "/vehicles/:id",
//   asyncHandler(getWeddingCarById)
// );

export default router;