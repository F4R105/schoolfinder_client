import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// COMPONENTS
import Template from './Template'

// PAGES
import Home from "./pages/Home";
import Filter from "./pages/Filter";
import Matches from "./pages/Matches";
import School from "./pages/School";
import About from "./pages/About";

import Admin_Login from "./pages/Admin_Login";
import Admin_School from "./pages/Admin_School";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [{
      path: "",
      element: <Home />,
    },{
      path: "filter",
      element: <Filter />,
    },{
      path: "matches",
      element: <Matches />,
    },{
      path: "school",
      element: <School />,
    },{
      path: "about",
      element: <About />
    },{
      path: "admin_school",
      element: <Admin_School />
    }]
  },{
    path: "/admin",
    element: <Admin_Login />
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
