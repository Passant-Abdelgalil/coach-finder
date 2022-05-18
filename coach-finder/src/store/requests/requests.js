export default {
  state() {
    return {
      requests: [
        {
          id: 1,
          email: "test@test.com",
          body: "Tester!",
        },
        {
          id: 2,
          email: "test@test.com",
          body: "Hi Can you help me?",
        },
      ],
    };
  },
  getters: {
    requests(state) {
      return state.requests;
    },
  },
  mutations: {
    insertRequest(context, payload) {
      context.requests.push(payload);
    },
  },
  actions: {
    insertRequest(context, payload) {
      context.commit("insertRequest", payload);
    },
  },
};
