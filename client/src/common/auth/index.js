import axios from "axios";

const LOGIN_URL = `${process.env.VUE_APP_API_URL}/login`;

export default {
  user: {
    authenticated: false,
    role: "Admin"
  },

  async attempt(credentials) {
    const data = await axios.post(LOGIN_URL, credentials);
    localStorage.setItem("auth_token", data.headers.authorization);
    this.user.authenticated = true;
  },

  logout() {
    return axios.post("/logout").then(() => {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("userName");
      this.user.authenticated = false;
    });
  },

  check() {
    const jwt = localStorage.getItem("auth_token");
    this.user.authenticated = !!jwt;
    return this.user.authenticated;
  },

  getAuthHeader() {
    return {
      Authorization: `${localStorage.getItem("auth_token")}`
    };
  },

  getBearerToken() {
    return `${localStorage.getItem("auth_token")}`;
  }
};
