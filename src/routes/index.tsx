import { createBrowserRouter } from "react-router-dom";
import { RoutePath } from "./paths";

import List from "../pages/List";
import Details from "../pages/Details";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: RoutePath.ROOT,
    element: <Home />,
  },
  {
    path: RoutePath.QUESTIONS_LIST,
    element: <List />,
  },
  {
    path: RoutePath.QUESTION,
    element: <Details />,
  },
]);
