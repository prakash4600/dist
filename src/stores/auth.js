import { defineStore } from "pinia";

export const useAuth = defineStore({
  id: "auth",
  state: () => ({
    session: false,
  }),
  getters: {},
  actions: {
    async login(username, password) {
      if (username === "admin" && password === "admin") {
        this.session = true;
      }

      // fake api time
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1000)
      );

      return this.session;
    },
  },
});
