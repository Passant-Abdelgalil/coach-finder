import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "../views/CoachesList.vue";
import RequestsList from "../views/RequestsList.vue";
import ContactCoach from "../components/coaches/ContactCoach.vue";
import CoachDetails from "../views/CoachDetails.vue";
import RegisterCoach from "../views/RegisterCoach.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  { path: "/", redirect: "/coaches" },
  {
    path: "/coaches",
    name: "all-coaches",
    component: CoachesList,
  },
  {
    path: "/requests",
    name: "requests",
    component: RequestsList,
  },
  {
    props: true,
    path: "/coaches/:id",
    name: "coach-details",
    component: CoachDetails,
    children: [
      {
        name: "contact-coach",
        path: "contact",
        component: ContactCoach,
      },
    ],
  },
  {
    path: "/register",
    name: "register-coach",
    component: RegisterCoach,
  },
  {
    path: "/404",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/:catchAll(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
