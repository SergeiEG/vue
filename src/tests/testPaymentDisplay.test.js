import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import menu from '../plugins/menu'

const localVue = createLocalVue()
localVue.use(menu)

describe('PaymentsDisplay', () => {
    it('test PaymentsDisplay', async() => {
        const wrapper = shallowMount(PaymentsDisplay, {
            localVue,
            propsData: {
                items: [{ "id": 999, "date": "20.03.2020", "category": "Проверка прошла", "value": 9999 }, ]
            }

        })
        expect(wrapper.find("tbody").text()).toBe("999 20.03.2020 Проверка прошла 9999")

    })
    it('test dropdown-menu', async() => {
        const wrapper = mount(PaymentsDisplay, {
            localVue,
            propsData: {
                items: [{ "id": 999, "date": "20.03.2020", "category": "Проверка прошла", "value": 9999 }, ]
            }
        })
        await wrapper.findComponent({ name: "Dropdown" }).trigger('click')
        expect(wrapper.find("div.Dropdown").isVisible()).toBe(true)
    })
})