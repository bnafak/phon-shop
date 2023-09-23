import { createBrowserRouter } from "react-router-dom";
import Favorite from "./src/Components/Favorite/Favorite";
import Login from "./src/Components/Longin/Login";
import Home from "./src/Home/Home";
import MainLayout from "./src/MainLayout/MainLayout";
 
    const Router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
          children :[
            {
              path: '/',
              element: <Home></Home>,
            },
            {
                path:'/favorite',
                element:<Favorite></Favorite>
            },
            {
                path:'/login',
                element: <Login></Login>
            }
          ]
      
        },
      
      ]);

export default Router;