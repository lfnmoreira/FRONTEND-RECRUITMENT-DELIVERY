import { createBrowserRouter } from "react-router-dom";
import { RoutePath } from "./paths";

import Questions from "../pages/Questions";
import Details from "../pages/Details";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: RoutePath.ROOT,
    element: <Home />,
  },
  {
    path: RoutePath.QUESTIONS,
    element: <Questions />,
  },
  {
    path: RoutePath.DETAILS,
    element: <Details />,
  },
]);
