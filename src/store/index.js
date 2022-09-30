import { createStore } from 'vuex';

const store = createStore({
    state: {
        AdminInfo: [],
        EmployeeInfo: [],
    },
    mutations: {
        setAdminInfo(state, val) {
            state.AdminInfo.push({
                id: state.AdminInfo.length + 1,
                name: val.name,
                email: val.email,
                number: val.number,
            });
        },
        setEmployeeInfo(state, val) {
            state.EmployeeInfo.push({
                id: state.EmployeeInfo.length + 1,
                name: val.name,
                email: val.email,
                number: val.number,
            });
        },
    },
    actions: {
        storeAdminInfo({ commit }, payload) {
            commit("setAdminInfo", payload);
        },
        storeEmployeeInfo({ commit }, payload) {
            commit("setEmployeeInfo", payload);
        },
    }
});

export default store;