export default {
  coaches(state) {
    return state.coaches;
  },
  coach: (state) => (payload) => {
    return state.coaches.find((element) => {
      return element.id === payload.id;
    });
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  filterCoaches(state) {
    let filtered = [];
    for (const [key, value] of Object.entries(state.filters)) {
      if (value)
        filtered.push(
          ...state.coaches.filter((element) => element.categories.includes(key))
        );
    }
    return filtered;
  },
  filters(state) {
    return state.filters;
  },
  filterValue: (state) => (payload) => {
    return state.filters[payload.filter];
  },
};
