import routes from "./routes";

class WebhookEventModule {
  static name() {
    return "WebhookEventModule";
  }
  static getRoutes() {
    return routes;
  }
}

export default WebhookEventModule;
