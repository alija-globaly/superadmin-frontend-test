import routes from "./routes";

class WebhookEventModule {
  static name() {
    return "ImportEventModule";
  }
  static getRoutes() {
    return routes;
  }
}

export default WebhookEventModule;
