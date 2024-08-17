import { useState } from "react";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/Navigation";
import ProjectsPage from "./pages/ProjectsPage";
import AllProjects from "./components/AllProjects";
import ProjectNavigation from "./components/ProjectNavigation";
import AuthPage from "./pages/AuthPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddPodCast from "./pages/AddPodCast";
import EditEpisode from "./components/EditEpisode";

function App() {
  const route = createBrowserRouter([
    {path:'/auth',element:<AuthPage/>,children:[
      {path:'login',element:<Login/>},
      {path:'signup',element:<Signup/>},

    ]},
    {path:'/',element:<Navigation/>,errorElement:<Error/>,children:[
      {path:"",element:<HomePage/>},
      {path:'projects',element:<ProjectsPage/>,children:[
        {path:'',element:<AllProjects/>},
      ]}
    ]},

    {path:"/projects/:id",element:<ProjectNavigation/>,children:[
      {path:'',element:<AddPodCast/>},
      {path:'edit',element:<EditEpisode/>}
    ]}

  ])

  return (
    <RouterProvider router={route}/>
  );
}

export default App;
