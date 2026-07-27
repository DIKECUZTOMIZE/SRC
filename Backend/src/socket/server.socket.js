import { Server } from "socket.io";
import env from "../config/env.js";

let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: env.CORS_ORIGIN.split(","),
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("Socket Connected:", socket.id);

    // Admin
    socket.on("join-admin", () => {
      socket.join("admins");
      console.log("Admin Joined:", socket.id);
    });

    // User
    socket.on("join-user", (userId) => {
      socket.join(`user-${userId}`);
      console.log(`User Joined: user-${userId}`);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected:", socket.id);
    });
  });
};

export const getIO = () => {
  if (!io) {
    throw new Error("Socket not initialized");
  }

  return io;
};