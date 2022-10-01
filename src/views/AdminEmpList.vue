<template>
<div class="content">
    <div v-if="RECEIVE_DATA.data == 'emp'">
        <h1>Employee List</h1>
        <div class="table-body">
            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr v-for="(data, index) in listEmployee" :key="index">
                        <td>{{data.id}}</td>
                        <td>
                            <input v-if="isEditEmp == index" type="text" v-model="data.name" />
                            <span v-else>{{data.name}}</span>
                        </td>
                        <td>
                            <input v-if="isEditEmp == index" type="text" v-model="data.email" />
                            <span v-else>{{data.email}}</span>
                        </td>
                        <td>
                            <input v-if="isEditEmp == index" type="text" v-model="data.number" />
                            <span v-else>{{data.number}}</span>
                        </td>
                        <td>
                            <div class="button">
                                <button class="btn save"
                                    @click="isEditEmp = isEditEmp == index ? null :index"
                                >Edit</button>
                                <button class="btn save"
                                    @click="updateEmployee(data)"
                                >Update</button>
                                <button class="btn cancel"
                                    @click="removeEmployee(data)"
                                >Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="button">
            <button class="btn save">Save</button>
            <button class="btn cancel" @click="$emit('cancel-button','DashBoard')">Cancel</button>
        </div>
    </div>

    <div v-if="RECEIVE_DATA.data == 'adm'">
        <h1>Admin List</h1>
        <div class="table-body">
            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr v-for="(data, index) in listAdmin" :key="index">
                        <td>{{data.id}}</td>
                        <td>
                            <input v-if="isEditAdm == index" type="text" v-model="data.name" />
                            <span v-else>{{data.name}}</span>
                        </td>
                        <td>
                            <input v-if="isEditAdm == index" type="text" v-model="data.email" />
                            <span v-else>{{data.email}}</span>
                        </td>
                        <td>
                            <input v-if="isEditAdm == index" type="text" v-model="data.number" />
                            <span v-else>{{data.number}}</span>
                        </td>
                        <td>
                            <div class="button">
                                <button class="btn save"
                                    @click="isEditAdm = isEditAdm == index ? null :index"
                                >Edit</button>
                                <button class="btn save"
                                    @click="updateAdmin(data)"
                                >Update</button>
                                <button class="btn cancel"
                                    @click="removeAdmin(data, index)"
                                >Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="button">
            <button class="btn save">Save</button>
            <button class="btn cancel" @click="$emit('cancel-button','DashBoard')">Cancel</button>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'AdminEmpList',
    props: {
        RECEIVE_DATA: {
            type: Object,
            default: () =>{}
        }
    },
    data() {
        return {
            listAdmin: [],
            listEmployee: [],
            isEditAdm: null,
            isEditEmp: null,
        }
    },
    mounted() {
        this.listAdmin = this.$store.state.AdminInfo;
        this.listEmployee = this.$store.state.EmployeeInfo;
    },
    methods: {
        removeAdmin(data) {
            // this.listAdmin.splice(index, 1);
            this.$store.commit('DELETE_ADMIN', data)
        },
        updateAdmin(data) {
            console.log(data);
            this.$store.commit('UPDATE_ADMIN', data);
            this.isEditAdm = null;
        },
        removeEmployee(data) {
            this.$store.commit('DELETE_EMPLOYEE', data)
        },
        updateEmployee(data) {
            console.log(data);
            this.$store.commit('UPDATE_EMPLOYEE', data);
            this.isEditEmp = null;
        }
    },
    watch: {
        RECEIVE_DATA() { 
            this.isEditAdm = null;
            this.isEditEmp = null;
        }
    }
}
</script>



<style src="./style.css" scoped />