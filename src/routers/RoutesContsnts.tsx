import AboutPage from "../pages/about";
import BidsPage from "../pages/bids";
import ContactsPage from "../pages/contacts";
import Home from "../pages/home";
import ProjectsPage from "../pages/projects";

export const routesConstatnt = [
  { path: "/", element: <Home />, exact: true },
  { path: "/projects", element: <ProjectsPage />, exact: true },
  { path: "/about", element: <AboutPage />, exact: true },
  { path: "/contacts", element: <ContactsPage />, exact: true },
  { path: "/bids", element: <BidsPage />, exact: true },
];