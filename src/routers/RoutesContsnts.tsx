import AboutPage from "../pages/about";
import Home from "../pages/home";
import ProjectsPage from "../pages/projects";

export const routesConstatnt = [
  { path: "/", element: <Home />, exact: true },
  { path: "/projects", element: <ProjectsPage />, exact: true },
  { path: "/about", element: <AboutPage />, exact: true },
];