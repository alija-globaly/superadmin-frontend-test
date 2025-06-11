import routes from "./routes";

class TenantModule {
  static name() {
    return "TalentModule";
  }
  static getRoutes() {
    return routes;
  }
}

export default TenantModule;
