import routes from "./routes";

class SMSRequest {
  static name() {
    return "SMSRequestModule";
  }
  static getRoutes() {
    return routes;
  }
}

export default SMSRequest;
