import Vue from "vue";
import VueRouter from "vue-router";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import Songs from "@/components/Songs";
import CreateSong from "@/components/CreateSong.vue";
import ViewSong from "@/components/ViewSong/Index.vue";
import EditSong from "@/components/EditSong.vue";
import Test from "@/components/Test.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/songs",
    name: "Songs",
    component: Songs,
  },
  {
    path: "/songs/create",
    name: "Song-Create",
    component: CreateSong,
  },
  {
    path: "/songs/:songId",
    name: "View-Song",
    component: ViewSong,
  },
  {
    path: "/songs/:songId/edit",
    name: "Edit-Song",
    component: EditSong,
  },
  {
    path: "/test",
    component: Test,
  },
  { path: "*", redirect: "Songs" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
