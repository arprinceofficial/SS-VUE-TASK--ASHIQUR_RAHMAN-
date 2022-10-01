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
        DELETE_ADMIN(state, data) {
            var index = state.AdminInfo.findIndex((item) => item.id == data.id);
            state.AdminInfo.splice(index, 1);
        },
        UPDATE_ADMIN(state, data) {
            var index = state.AdminInfo.findIndex((item) => item.id == data.id);

            state.AdminInfo[index].name = data.name;
            state.AdminInfo[index].email = data.email;
            state.AdminInfo[index].number = data.number;
        },
        DELETE_EMPLOYEE(state, data) {
            var index = state.EmployeeInfo.findIndex((item) => item.id == data.id);
            state.EmployeeInfo.splice(index, 1);
        },
        UPDATE_EMPLOYEE(state, data) {
            var index = state.EmployeeInfo.findIndex((item) => item.id == data.id);

            state.EmployeeInfo[index].name = data.name;
            state.EmployeeInfo[index].email = data.email;
            state.EmployeeInfo[index].number = data.number;
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