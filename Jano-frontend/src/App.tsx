
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Suenio from "./pages/Suenio";
import Ejercicio from "./pages/Ejercicio";
import Social from "./pages/Social";
import Nutricion from "./pages/Nutricion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/nutricion",
    element: <Nutricion />,
  },
  {
    path: "/suenio",
    element: <Suenio />,
  },
  {
    path: "/ejercicio",
    element: <Ejercicio />,
  },
  {
    path: "/social",
    element: <Social />,
  },
]);

export default function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}


