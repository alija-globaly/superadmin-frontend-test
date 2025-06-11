import routes from "./routes";

class AuthModule {
  static name() {
    return "AuthModule";
  }
  static getRoutes() {
    return routes;
  }
}

export default AuthModule;
