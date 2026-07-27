import http from "http";
import createApp from "./src/app.js";
import connectDB from "./src/config/database.js";
import env from "./src/config/env.js";
import { logger } from "./src/config/logger.js";
import { initSocket } from "./src/socket/server.socket.js";


const serverStart = async () => {
    try {
        const app = createApp();

        await connectDB();

        const server = http.createServer(app);

        // Initialize Socket.IO
        initSocket(server);

        server.listen(env.PORT, () => {
            logger.info(
                { port: env.PORT },
                " Server with Socket.IO is running"
            );
        });
    } catch (err) {
        console.log(err)
        logger.error(
            { error: err },

            "Server failed to start"
        );

        process.exit(1);
    }
};

serverStart();