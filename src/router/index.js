import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/add/payment/:category',
    name: "addPayment",
    component: () =>
        import ('../components/AddPaymentForm.vue')
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router