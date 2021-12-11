import { mount, createLocalVue } from '@vue/test-utils'
import App from '../App.vue'
import Vuex from 'vuex'
import VueRouter from "vue-router"
import store from '../store/index.js'
import router from '../router/index.js'
import menu from '../plugins/menu'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
localVue.use(menu)

describe('App', () => {
    it('test App view components', async() => {
        const wrapper = mount(App, {
            store,
            localVue,
            router,
        })

        expect(wrapper.findComponent({ name: "PaymentsDisplay" }).exists()).toBe(true)

        wrapper.find("button.form-btn").trigger('click')
        await wrapper.vm.$nextTick()

        expect(wrapper.findComponent({ name: "AddPaymentForm" }).exists()).toBe(true)

        wrapper.find("button.form-btn").trigger('click')
        await wrapper.vm.$nextTick()

        expect(wrapper.findComponent({ name: "AddPaymentForm" }).exists()).toBe(false)

    })
    it('test view store data', async() => {
        const stor = new Vuex.Store({
            state: {
                paymentsList: [{ "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 }],
                MaxId: 6
            },
            mutations: {
                addDataToPaymentsList: jest.fn()
            },
            getters: {
                getMaxId: (state) => state.MaxId,
                getPaymentsList: state => state.paymentsList,
            },
            actions: {
                fetchData: jest.fn()
            },
        })
        const wrapper = mount(App, {
            store: stor,
            localVue,
            router,
        })
        expect(wrapper.find("td").text()).toBe("1")
    })
    it('test App router link & display', async() => {
        const wrapper = mount(App, {
            store,
            localVue,
            router,
        })

        wrapper.find(".fist_link").trigger('click')
        await wrapper.vm.$nextTick()

        expect(wrapper.find("td").text()).toBe("7")

    })
})