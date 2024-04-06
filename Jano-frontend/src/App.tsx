import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"
import Home from "./pages/Home";
import Food from "./pages/Food";

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
    element: <Food />,
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

