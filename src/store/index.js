import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
        paymentsListIDS: [],
        maxId: 6,
    },
    mutations: {
        setPaymentsListData(state, payload) {
            const uniqIdsObj = payload.filter((item) => {
                return state.paymentsListIDS.indexOf(item.id) < 0
            })
            const uniqIds = uniqIdsObj.map(obj => obj.id)
            state.paymentsList.push(...uniqIdsObj)
            state.paymentsListIDS.push(...uniqIds)
        },
        addDataToPaymentsList(state, data) {
            state.paymentsList.push(data)
            state.maxId = data.id
        },
        removeDataToPaymentsList(state, data) {
            state.paymentsList.splice(state.paymentsList.indexOf(data), 1)

        },
        editDataToPaymentsList(state, payload) {
            const idx = state.paymentsList.indexOf(payload[0])
            if (idx !== -1) {
                state.paymentsList.splice(idx, 1, payload[1])
            }
        }
    },
    actions: {
        fetchData({ commit }, page) {
            return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            "page1": [
                                { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
                                { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
                                { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
                            ],
                            "page2": [
                                { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                                { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
                                { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
                            ],
                        }[`page${page}`])
                    }, 0)
                })
                .then(res => {
                    commit('setPaymentsListData', res)
                })
        }
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getMaxId: state => state.maxId
    }
})