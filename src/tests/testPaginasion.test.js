import { shallowMount, createLocalVue } from '@vue/test-utils'
import Pagination from '../components/Pagination.vue'

const localVue = createLocalVue()

describe('Pagination', () => {
    it('test Pagination', async() => {
        const wrapper = shallowMount(Pagination, {
            localVue,
            propsData: {
                length: 19,
                n: 5,
                cur: 3,
            }

        })

        expect(wrapper.find("div.active").text()).toBe("3")

    })
})