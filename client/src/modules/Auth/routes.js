const Login = () => import("./views/Login");

export default [
  {
    path: "/",
    component: Login,
    name: "auth.login",
    meta: { requiresAuth: false, layout: "Default" }
  }
];
