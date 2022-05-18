import coachesMutations from "./mutations.js";
import coachesGetters from "./getters.js";
export default {
  state() {
    return {
      coaches: [
        {
          id: "1",
          name: "Manuel Lorenz",
          salary: 39,
          categories: ["frontend", "career"],
        },
        {
          id: "2",
          name: "Maximilian Schwarzmuller",
          salary: 39,
          categories: ["frontend", "backend", "career"],
        },
        {
          id: "3",
          name: "Angela Yu",
          salary: 30,
          categories: ["frontend", "backend"],
        },
        { id: "4", name: "David Atacol", salary: 20, categories: ["career"] },
        {
          id: "5",
          name: "Kadeer Iran",
          salary: 40,
          categories: ["backend", "career"],
        },
        {
          id: "6",
          name: "Tom Jason",
          salary: 20,
          categories: ["frontend", "career"],
        },
        { id: "7", name: "Delan Mark", salary: 30, categories: ["backend"] },
      ],
      filters: { frontend: false, backend: false, career: false },
    };
  },
  getters: coachesGetters,
  mutations: coachesMutations,
  actions: {
    registerCoach(context, payload) {
      context.commit("registerCoach", payload);
    },
  },
};
