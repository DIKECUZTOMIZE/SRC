import express from "express";
import path from "path"; // <-- ye add karo
import env from "./config/env.js";
import morgan from "morgan";
import securityMiddleware from "./middleware/security.middleware.js";

import authRouter from "./module/public/auth/auth.routes.js";
import selfDriveRoutes from "./module/public/selfDrive/selfDrive.routes.js";
import carRouter from "./module/public/addCar/addCar.routes.js";
import normalWhitDriverRouter from "./module/public/normalCarWithDriver/normalCarWithDriver.routes.js";


const createApp = () => {

  const app = express();


  if (env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }


  securityMiddleware(app);


  // // images access ke liye
  // app.use(
  //   "/uploads",
  //   express.static(
  //     path.join(process.cwd(), "uploads")
  //   )
  // );


  app.use("/api/auth", authRouter);
  app.use("/api/selfDrive", selfDriveRoutes);
  app.use("/api/carAdd", carRouter);
  app.use("/api/normalWhitDriver", normalWhitDriverRouter);
  // app.use("/api/airportTransfer", normalWhitDriverRouter);


  return app;
};


export default createApp;