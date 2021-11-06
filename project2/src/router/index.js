import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import About from "../views/About.vue";
import Auth from "../views/Auth.vue";
import NotFound from "../views/NotFound.vue";
import AddPayment from "../views/AddPayment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/dashboard/:page",
    name: "DashboardPage",
    component: Dashboard,
  },
  {
    path: "/add/payment/Food",
    name: "Food",
    component: AddPayment,
  },
  {
    path: "/add/payment/Transport",
    name: "Transport",
    component: AddPayment,
  },
  {
    path: "/add/payment/Entertainment",
    name: "Entertainmen",
    component: AddPayment,
  },
  {
    path: "/about*",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/notfound",
    name: "NotFound",
    component: NotFound,
  },

  {
    path: "*",
    redirect: "/notfound",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const userIsAuth = true;

router.beforeEach((to, from, next) => {
  if (to.name !== "Auth" && !userIsAuth) {
    next({
      name: "Auth",
    });
  } else {
    next();
  }
});

const getTitleByRouteName = (routeName) => {
  return {
    Dashboard: "Take a look on your payments and add more!",
    About: "Anything about our awesome application!",
    Login: "Login",
    NotFound: "Oops! Seems like we lost this page :(",
  }[routeName];
};

router.afterEach((to) => {
  document.title = getTitleByRouteName(to.name);
});
export default router;
