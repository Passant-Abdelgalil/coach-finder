export default {
  loadFromLocalStorage(context) {
    if (localStorage.getItem("frontend"))
      context.filters.frontend = localStorage.getItem("frontend") === "true";
    if (localStorage.getItem("backend"))
      context.filters.backend = localStorage.getItem("backend") === "true";
    if (localStorage.getItem("career"))
      context.filters.career = localStorage.getItem("career") === "true";
  },
  updateFilters(context, payload) {
    for (const [key, value] of Object.entries(payload)) {
      context.filters[key] = value;
      localStorage.setItem(key, value);
    }
  },
  registerCoach(context, payload) {
    context.coaches.push(payload);
    console.log(context.coaches);
  },
};
