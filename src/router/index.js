import Vue from 'vue'
import VueRouter from 'vue-router'
import AddPaymentForm from '../components/AddPaymentForm.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/add/payment/:category',
    name: "addPayment",
    component: AddPaymentForm
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router