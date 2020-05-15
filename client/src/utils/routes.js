import Main from "@/views/Main";
import RegisterActivity from "@/views/RegisterActivity"; 
import RegisterUser from "@/views/RegisterUser"; 
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
    path: "/registerActivity",
    name: "",
    meta: {
      requiresAuth: false 
    },
    component: RegisterActivity,
  },
  {
    path: "/registerUser",
    name: "",
    meta: {
      requiresAuth: false 
    },
    component: RegisterUser,
  },
  {
    path: '**',
    redirect: "/"
  }
];

export { routes };
