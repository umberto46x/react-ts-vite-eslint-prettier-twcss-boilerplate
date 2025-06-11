import { createBrowserRouter } from "react-router-dom";
import App from "../AppNewRouting";
import { Home } from "../pages/Home";
import { Level1 } from "../pages/level1/Level1";
import { Level2 } from "../pages/level2/Level2";
import { Level5 } from "../pages/level5/Level5";
import { Level3 } from "../pages/level3/Level3";
import { Level4 } from "../pages/level4/Level4";


export const router = createBrowserRouter([{
    path: "/",
    Component: App,
    children: [
        { path: "/", Component: Home },
        {path: "/lv1", Component: Level1},
        {path: "/lv2", Component: Level2},
        {path: "/lv3", Component: Level3},
        {path: "/lv4", Component: Level4},
        {path: "/lv5", Component: Level5},
       
    ]
}])