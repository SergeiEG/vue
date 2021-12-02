import Dropdown from '../components/Dropdown.vue'
import ModalWin from '../components/ModalWin'

export default {
    install(Vue) {
        if (this.installed) {
            return
        }

        this.installed = true

        Vue.component('dropdown-menu', Dropdown)
        Vue.component('modal', ModalWin)

        Vue.prototype.$menu = {
            EventBus: new Vue(),

            show(item) {
                this.EventBus.$emit('show', { item })
            },

        }
    }
}