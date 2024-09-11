import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default router;
