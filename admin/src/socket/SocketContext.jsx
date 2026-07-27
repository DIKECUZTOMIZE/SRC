/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect } from "react";
import socket from "./socket";

export const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  useEffect(() => {
    socket.emit("join-admin");

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
