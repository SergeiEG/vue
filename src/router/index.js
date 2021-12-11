import Vue from 'vue'
import VueRouter from 'vue-router'
import AddPamentForm from '../components/AddPaymentForm.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/add/payment/:category',
    name: "addPayment",
    component: AddPamentForm
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router