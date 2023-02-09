import {createRouter, createWebHashHistory} from "vue-router";
import Hello from "@/components/Hello.vue";
import ChooseHero from "@/components/choose-hero/ChooseHero.vue";
import ConfirmHero from "@/components/choose-hero/ConfirmHero.vue";
import Levels from "@/components/levels/Levels.vue";
import Level from "@/components/levels/Level.vue";
import Shop from "@/components/levels/Shop.vue"
import MyHero from "@/components/levels/MyHero.vue";

const routes = [
    {
        path: '/',
        alias: '/hello',
        name: 'hello',
        component: Hello
    },
    {
        path: '/choose-hero',
        name: 'choose-hero',
        component: ChooseHero
    },
    {
        path: '/confirm-hero',
        name: 'confirm-hero',
        component: ConfirmHero
    },
    {
        path: '/levels',
        name: 'levels',
        component: Levels
    },
    {
        path: '/level/:id',
        name: 'level',
        component: Level
    },
    {
        path: '/shop',
        name: 'shop',
        component: Shop
    },
    {
        path: '/my-hero',
        name: 'my-hero',
        component: MyHero
    },


]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router