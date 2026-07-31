import express from "express";
import path from "path"; // <-- ye add karo
import env from "./config/env.js";
import morgan from "morgan";
import securityMiddleware from "./middleware/security.middleware.js";

import authRouter from "./module/public/auth/auth.routes.js";
import selfDriveRoutes from "./module/public/selfDrive/selfDrive.routes.js";
import carRouter from "./module/public/addCar/addCar.routes.js";
import normalWhitDriverRouter from "./module/public/normalCarWithDriver/normalCarWithDriver.routes.js";
import tempoTravellerBusRoute from "./module/public/tempoTravellerBus/tempoTravellerBusRoute.routes.js";
import airportTransferRoute from "./module/public/airportTransfer/airportTransfer.routes.js"
import premiumCarRoute from "./module/public/premiumWithCar/premiumWithCar.routes.js"
import weddingCarRoute from "./module/public/wedding/wedding.routes.js"

const createApp = () => {

  const app = express();


  if (env.NODE_ENV === "production") {
    app.use(morgan("dev"));
  }


  securityMiddleware(app);


  // images access ke liye
  app.use(
    "/uploads",
    express.static(
      path.join(process.cwd(), "uploads")
    )
  );


  app.use("/api/auth", authRouter);
  app.use("/api/selfDrive", selfDriveRoutes);
  app.use("/api/carAdd", carRouter);
  app.use("/api/normalWhitDriver", normalWhitDriverRouter);
  app.use(
    "/api/tempoTravellerBus",
    tempoTravellerBusRoute
  );
  app.use(
    "/api/airport-transfer",
    airportTransferRoute
  );

  app.use(
    "/api/premium-car",
    premiumCarRoute
  );

  app.use(
    "/api/wedding-car",
    weddingCarRoute
  );



  return app;
};


export default createApp;