import { createStore } from "vuex";
import jwt_decode from "jwt-decode";

const token = localStorage.getItem("token");

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
      context.commit("authenticate", false);
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
  },
});

export default store;
