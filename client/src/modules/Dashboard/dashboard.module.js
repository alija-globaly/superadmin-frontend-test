class DashboardModule {
  static name() {
    return "DashboardModule";
  }
  static getRoutes() {
    return [
      {
        path: "/dashboard",
        component: () => import("./views/Dashboard"),
        name: "dashboard",
        meta: { requiresAuth: true, layout: "Admin" }
      }
    ];
  }
}

export default DashboardModule;
