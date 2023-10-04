import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.router.tsx";
import "./index.css";
import { Providers } from "./redux/providers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Providers>
      <RouterProvider router={router} />,
    </Providers>
  </>
);
