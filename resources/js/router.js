// resources/js/router.js

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
   mode: "history",
   routes: [
      {
         path: "/home",
         name: "home",
         component: Home
      },
     
   ]
});

export default router