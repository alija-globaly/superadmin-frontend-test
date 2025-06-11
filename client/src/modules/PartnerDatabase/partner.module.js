import routes from "./routes";

class TenantModule {
  static name() {
    return "TenantModule";
  }
  static getRoutes() {
    return routes;
  }
}

export default TenantModule;
