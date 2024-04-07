
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import ForumDetails from "./pages/ForumDetails";
import TrackersHome from "./pages/TrackersHome"; // Import the missing component
import TrackerForm from "./pages/TrackerForm";
import Sleep from "./pages/Sleep";
import Alimentation from "./pages/Alimentation";

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
    path: "/social",
    element: <Forum />,
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

]);

export default function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}


