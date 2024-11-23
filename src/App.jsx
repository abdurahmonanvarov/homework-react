//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AllInfo from "./pages/AllInfo";

//routers 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// loyout
import MainLOyauts from "./loyaut/MainLOyauts";


function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLOyauts />,
      children: [
        {
          index: true,
          element: <AllInfo/>
        },
        {
          path: "/works",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    },

  ])
  return <RouterProvider router={routers} /> 
      
      
   
  
}

export default App
