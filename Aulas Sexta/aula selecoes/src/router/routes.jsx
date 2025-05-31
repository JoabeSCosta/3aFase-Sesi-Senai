import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Marujos from "../pages/Marujos"
import MarujoEntrevista from "../pages/MarujoEntrevista";

const router = createBrowserRouter([
    {path: "/", element: <Marujos />},
    {path: "/Entrevista", element: <MarujoEntrevista />}, 
    {path: "/Home", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
])

export default router;
