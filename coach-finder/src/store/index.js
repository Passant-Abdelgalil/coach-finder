import { createStore } from "vuex";
import coachesModule from "./coaches/coaches";
import requestsModule from "./requests/requests";
export default createStore({
  modules: {
    coachesModule,
    requestsModule,
  },
});
