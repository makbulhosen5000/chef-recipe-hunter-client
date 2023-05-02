import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home/Home";
import Main from "../pages/layouts/Main";
import NotFound from "../pages/NotFound";
import FoodList from "../pages/home/food/FoodList";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":id",
        element: <FoodList />,
        loader: ({ params }) => fetch(`http://localhost:5000/food/${params.id}`),
      },
    ],
  },
]);
export default router;