import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store/store.js";
import AppRoutes from "./app/routes/AppRoutes.jsx";
import { SocketProvider } from "./socket/socketContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <SocketProvider>
        <AppRoutes />
      </SocketProvider>
    </QueryClientProvider>
  </Provider>,
);
