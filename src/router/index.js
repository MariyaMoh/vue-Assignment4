import { createRouter, createWebHistory } from "vue-router";


const Home = () => import("@/views/HomePage.vue");
const About = () => import("@/views/AboutPage.vue");
const Contact = () => import("@/views/ContactUs.vue");
const Order = () => import("@/views/Order.vue");
const User = () => import("@/views/UserPage.vue");
const Shop = () => import("@/views/Shop.vue");
const UserDetails = () => import("@/views/UserDetails.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/user",
    name: "user",
    component: User,
    children: [
      {
        path: "/userdetails/:user",
        props: true,
        name: "UserDetails",
        component: UserDetails,
      },
    ],
  },

  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/order",
    name: "order",
    component: Order,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
