import Minigame from "pages/Minigame";
import { otherPages } from "./system.route";

 const pages = [
  {
    path: "/minigame",
    exact: true,
    name: "Trang chủ",
    component: Minigame,
  },
  {
    path: "/",
    exact: true,
    name: "Trang chủ",
    component: Minigame,
  }
];

const routes = [...otherPages, ...pages];

export default routes;
