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
                        <td>{{data.name}}</td>
                        <td>{{data.email}}</td>
                        <td>{{data.number}}</td>
                        <td>
                            <div class="button">
                                <button class="btn save">Edit</button>
                                <button class="btn cancel">Delete</button>
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
                        <td>{{data.name}}</td>
                        <td>{{data.email}}</td>
                        <td>{{data.number}}</td>
                        <td>
                            <div class="button">
                                <button class="btn save">Edit</button>
                                <button class="btn cancel">Delete</button>
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
        }
    },
    mounted() {
        this.listAdmin = this.$store.state.AdminInfo;
        this.listEmployee = this.$store.state.EmployeeInfo;
    },
}
</script>



<style src="./style.css" scoped />