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
    }]
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App