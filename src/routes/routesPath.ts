import Home from "pages/Home";
import Main from "pages/Main";

export const routePath = {
  home: "/",
  main: "/main",
  notfound: "*",
};

export const routes = [
  {
    path: routePath.home,
    element: Home,
    authIsRequired: false,
    redirectPath: routePath.main,
  },
  {
    path: routePath.main,
    element: Main,
    authIsRequired: true,
    redirectPath: routePath.home,
  },
];
