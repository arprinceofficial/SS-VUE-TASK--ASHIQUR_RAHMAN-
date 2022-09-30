import { createStore } from 'vuex';

const store = createStore({
    state: {
        AdminInfo: [],
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
    },
    actions: {
        storeAdminInfo({ commit }, payload) {
            commit("setAdminInfo", payload);
        }
    }
});

export default store;