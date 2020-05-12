import Main from "@/views/Main";
import RouterView from "@/views/RouterView";

const routes = [
  {
    path: "/",
    name: "root",
    meta: {
      requiresAuth: false 
    },
    component: Main,
  },
  {
    path: '**',
    redirect: "/"
  }
];

export { routes };
