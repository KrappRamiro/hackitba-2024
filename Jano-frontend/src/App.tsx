
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Social from "./pages/Social";
import Forum from "./pages/Forum";
import TrackersHome from "./pages/TrackersHome"; // Import the missing component
import TrackerForm from "./pages/TrackerForm";

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
    element: <Social />,
  },
  {
    path:"/form",
    element: <TrackerForm/>
  },
  {
    path: "/foro/:forumId",
    element: <Forum />,
  },
]);

export default function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}


