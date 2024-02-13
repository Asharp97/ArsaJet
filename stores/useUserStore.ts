import { defineStore } from "pinia";

export const useStore = defineStore("user", {
  state: () => {
    return {
      user: false,
      token: "",
    };
  },
  persist: true,
});
