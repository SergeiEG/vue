import { shallowMount, createLocalVue } from '@vue/test-utils'
import AddPaymentForm from '../components/AddPaymentForm.vue'
import Vuex from 'vuex'
import VueRouter from "vue-router"

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

const mutations = {
    addDataToPaymentsList: jest.fn()
}

const store = new Vuex.Store({
    state: {
        MaxId: 6
    },
    mutations,
    getters: {
        getMaxId: (state) => state.MaxId
    }
})
const router = new VueRouter()

describe('PaymentForm', () => {
    it('test input PaymentForm', async() => {
        const wrapper = shallowMount(AddPaymentForm, {
            store,
            localVue,
            router,
        })
        await wrapper.find("button").trigger('click')

        expect(mutations.addDataToPaymentsList).toHaveBeenCalled()

    })

    it('test input PaymentForm', async() => {
        const wrapper = shallowMount(AddPaymentForm, {
            store,
            localVue,
            router,
        })

        const date = wrapper.find("input[name=date]")
        date.setValue("11.11.2011")
        expect(wrapper.vm.date).toBe('11.11.2011')

        const category = wrapper.find('input[name=category]')
        category.setValue("cookies")
        expect(wrapper.vm.category).toBe('cookies')

        const value = wrapper.find("input[name=value]")
        value.setValue("300")
        expect(wrapper.vm.value).toBe(300)

        await wrapper.find("button").trigger('click')

        expect(mutations.addDataToPaymentsList).toHaveBeenCalledWith({ "MaxId": 6, }, {
            id: 7,
            date: '11.11.2011',
            category: 'cookies',
            value: 300,

        })

    })
})