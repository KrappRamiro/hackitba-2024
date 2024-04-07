
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Forums from "./pages/Forum";
import Forum from "./pages/ForumDetails";
import TrackersHome from "./pages/TrackersHome"; // Import the missing component
import TrackerForm from "./pages/TrackerForm";
import Sleep from "./pages/Sleep";
import Alimentation from "./pages/Alimentation";
import Social from "./pages/Social";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <TrackersHome />, // Add the missing component
  },
  {
    path: "/foro",
    element: <Forums />,
  },
  {
    path:"/form",
    element: <TrackerForm/>
  },
  {
    path: "/foro/:forumId",
    element: <ForumDetails />,
  },
  {
    path: "/alimentacion",
    element: <Alimentation />,
  },
  {
    path: "/suenio",
    element: <Sleep />,
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


