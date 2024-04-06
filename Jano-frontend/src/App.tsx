
import Home from "./pages/Home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/food",
    element: <div>WIP: Food component!</div>,
  },
  {
    path: "/sleep",
    element: <div>WIP: Sleep component!</div>,
  },
  {
    path: "/workout",
    element: <div>WIP: Workout component!</div>,
  },
  {
    path: "/social",
    element: <div>WIP: Social component!</div>,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}


