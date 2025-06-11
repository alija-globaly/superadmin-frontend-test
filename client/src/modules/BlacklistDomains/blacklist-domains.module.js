import routes from "./routes";

class BlacklistDomainModule {
  static name() {
    return "BlacklistDomainModule";
  }
  static getRoutes() {
    return routes;
  }
}

export default BlacklistDomainModule;
