import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import AddPaymentForm from '../components/AddPaymentForm.vue'
import Vuex from 'vuex'
import VueRouter from "vue-router"

const localVue = createLocalVue()
localVue.use(Vuex)

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

describe('PaymentForm', () => {
    it('test route.params PaymentForm', async() => {
        const router = new VueRouter()
        const wrapper = mount(AddPaymentForm, {
            store,
            localVue,
            router,
            mocks: {
                $route: {
                    path: '/add/payment/',
                    params: { category: 'cookies' },
                }
            }
        })

        const category = wrapper.find('input[name=category]')
        expect(wrapper.vm.category).toBe('cookies')


        expect(mutations.addDataToPaymentsList).not.toHaveBeenCalled()

    })
    it('test route.query & save PaymentForm', async() => {
        const router = new VueRouter()
        const wrapper = mount(AddPaymentForm, {
            store,
            localVue,
            router,
            mocks: {
                $route: {
                    path: '/add/payment/',
                    params: { category: 'cookies' },
                    query: { value: '300' }
                }
            }
        })
        const category = wrapper.find('input[name=category]')
        expect(wrapper.vm.category).toBe('cookies')

        const value = wrapper.find("input[name=value]")
        expect(wrapper.vm.value).toBe(300)


        expect(mutations.addDataToPaymentsList).toHaveBeenCalled()
    })

    it('test input PaymentForm', async() => {
        localVue.use(VueRouter)
        const router = new VueRouter()
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