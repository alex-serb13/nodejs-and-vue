import { createStore } from "vuex";
import jwt_decode from "jwt-decode";
import router from "./router";

export const validateToken = () => {
  const token = localStorage.getItem("token");
  const decodedToken = token ? jwt_decode(token) : null;
  const time = parseInt(Date.now() / 1000);

  if (token && time > decodedToken?.exp) {
    return null;
  }

  return token;
};

const token = validateToken();

const state = {
  isAuthenticated: token ? true : false,
  token: token ? token : null,
  user: token ? jwt_decode(token) : null,
};

const store = createStore({
  state,
  getters: {
    isAuthenticated: (state) => {
      return state.isAuthenticated;
    },
    token: (state) => {
      return state.token;
    },
    user: (state) => {
      return state.user;
    },
  },
  actions: {
    authenticate(contex, token) {
      localStorage.setItem("token", token);
      contex.commit("authenticate", { token, isAuthenticated: true });
      contex.commit("decodedUser", { user: jwt_decode(token) });
    },

    signout(context) {
      localStorage.removeItem("token");
      context.commit("signout");
      router.push("signin");
    },
  },
  mutations: {
    authenticate(state, { token, isAuthenticated }) {
      state.isAuthenticated = isAuthenticated;
      state.token = token;
    },
    decodedUser(state, { user }) {
      state.user = user;
    },
    signout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    },
  },
});

// Request intercerptor to validate the token before
// each request that uses a token
window.originalFetch = window.fetch;

// Then override fetch function with interceptor
window.fetch = async (...args) => {
  const authToken = args[1]?.headers?.Authorization?.split(" ")?.[1];

  if (authToken && !validateToken()) {
    store.dispatch("signout");
    return;
  }

  return window.originalFetch(...args);
};

export default store;
