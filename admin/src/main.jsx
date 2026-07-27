import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./app/store/store.js";

import AppRoutes from "./app/routes/AppRoutes.jsx";
import { SocketProvider } from "./socket/SocketContext.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SocketProvider>
      <AppRoutes />
    </SocketProvider>
  </Provider>,
);
