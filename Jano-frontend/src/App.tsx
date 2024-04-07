
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Forums from "./pages/Forum";
import ForumDetails from "./pages/ForumDetails";
import TrackersHome from "./pages/TrackersHome"; 
import TrackerForm from "./pages/TrackerForm";
import Sleep from "./pages/Sleep";
import Alimentation from "./pages/Alimentation";
import Social from "./pages/Social";
import EnergyVitality from "./pages/EnergyVitality";

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
  {
    path: "/energia-vitalidad",
    element: <EnergyVitality />,
  },

]);

export default function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}


