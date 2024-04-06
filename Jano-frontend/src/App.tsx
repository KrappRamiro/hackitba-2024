
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Social from "./pages/Social";
import TrackersHome from "./pages/TrackersHome"; // Import the missing component

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <TrackersHome />, // Add the missing component
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


