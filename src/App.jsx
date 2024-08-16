import { useState } from "react";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/Navigation";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectCard from "./components/ProjectCard";
import AllProjects from "./components/AllProjects";
import Project from "./components/Project";
import ProjectNavigation from "./components/ProjectNavigation";

function App() {
  const route = createBrowserRouter([

    {path:'/',element:<Navigation/>,errorElement:<Error/>,children:[
      {path:"",element:<HomePage/>},
      {path:'projects',element:<ProjectsPage/>,children:[
        {path:'',element:<AllProjects/>},
      ]}
    ]},
    {path:"/project/:id",element:<ProjectNavigation/>}

  ])

  return (
    <RouterProvider router={route}/>
  );
}

export default App;
