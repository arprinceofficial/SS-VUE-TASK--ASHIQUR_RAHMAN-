<template>
<div class="content">
    <!-- Start Employee Section -->
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
                            <input v-if="isEditEmp == index" type="text" v-model="data.name" :class="{ 'error':  !data.name && error }" />
                            <span v-else>{{data.name}}</span>
                        </td>
                        <td>
                            <div v-if="isEditEmp == index" style="display:flex; flex-direction:column; color:red">
                                <input placeholder="Enter Email" v-model.trim="data.email"
                                    :class="{ 'error':  !data.email && error && !isValidEmail(data.email) }" />
                            
                                <!-- Validation Message -->
                                <small class="form-text text-danger" v-if="error && !isValidEmail(data.email)">
                                    {{ !data.email ? 'Required' : 'Invalid Email Address' }}
                                </small>
                            </div>
                            <span v-else>{{data.email}}</span>
                        </td>
                        <td>
                            <div v-if="isEditEmp == index" style="display:flex; flex-direction:column; color:red">
                                <input placeholder="Enter number" v-model.trim="data.number"
                                    :class="{ 'error':  !data.number && error && !isValidPhoneNo(data.number) }" />
                            
                                <!-- Validation Message -->
                                <small class="form-text text-danger" v-if="error && !isValidPhoneNo(data.number)">
                                    {{ !data.number ? 'Required' : 'Invalid format' }}
                                </small>
                            </div>
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
                                    @click="openModal(data, user=RECEIVE_DATA.data)"
                                >Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="button">
            <!-- <button class="btn save">Save</button> -->
            <button class="btn cancel" @click="$emit('cancel-button','DashBoard')">Cancel</button>
        </div>
    </div>
    <!-- End Employee Section -->

    <!-- Start Admin Section -->
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
                            <input v-if="isEditAdm == index" type="text" v-model="data.name" :class="{ 'error':  !data.name && error }"/>
                            <span v-else>{{data.name}}</span>
                        </td>
                        <td>
                            <div v-if="isEditAdm == index" style="display:flex; flex-direction:column; color:red">
                                <input placeholder="Enter Email" v-model.trim="data.email"
                                    :class="{ 'error':  !data.email && error && !isValidEmail(data.email) }" />
                            
                                <!-- Validation Message -->
                                <small class="form-text text-danger" v-if="error && !isValidEmail(data.email)">
                                    {{ !data.email ? 'Required' : 'Invalid Email Address' }}
                                </small>
                            </div>
                            <span v-else>{{data.email}}</span>
                        </td>
                        <td>
                            <div v-if="isEditAdm == index" style="display:flex; flex-direction:column; color:red">
                                <input placeholder="Enter number" v-model.trim="data.number"
                                    :class="{ 'error':  !data.number && error && !isValidPhoneNo(data.number) }" />
                            
                                <!-- Validation Message -->
                                <small class="form-text text-danger" v-if="error && !isValidPhoneNo(data.number)">
                                    {{ !data.number ? 'Required' : 'Invalid format' }}
                                </small>
                            </div>
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
                                    @click="openModal(data, user=RECEIVE_DATA.data)"
                                >Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="button">
            <!-- <button class="btn save">Save</button> -->
            <button class="btn cancel" @click="$emit('cancel-button','DashBoard')">Cancel</button>
        </div>
    </div>
    <!-- End Admin Section -->

    <!--Start Dialog Modal -->
    <div class="dialog-modal text-center">
        <v-dialog v-model="dialog"
        persistent
        >
            <v-card>
                <v-card-text>
                    Are you sure want to delete this user?
                </v-card-text>
                <v-card-actions>
                    <v-btn color="red cancel" block @click="(dialog = false, deleteUser = [])">Close</v-btn>
                    <v-btn color="green save" block @click="removeUser()">Ok</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
    <!--End Dialog Modal -->
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
            dialog: false,
            deleteUser: [],
            error: false,
        }
    },
    mounted() {
        this.listAdmin = this.$store.state.AdminInfo;
        this.listEmployee = this.$store.state.EmployeeInfo;
    },
    methods: {
        updateAdmin(data) {
            if (data.name && this.isValidEmail(data.email) && this.isValidPhoneNo(data.number)) {
                this.$store.commit('UPDATE_ADMIN', data);
                this.isEditAdm = null;
                this.error = false;
            } else {
                this.error = true;
            }
        },
        updateEmployee(data) {
            if(data.name && this.isValidEmail(data.email) && this.isValidPhoneNo(data.number)) {
                this.$store.commit('UPDATE_EMPLOYEE', data);
                this.isEditEmp = null;
                console.log(data);
            } else {
                this.error = true;
            }
        },
        openModal(data, user) {
            this.dialog = true;
            this.deleteUser = {data, user};
            console.log(this.deleteUser);
        },
        removeUser() {
            if(this.deleteUser.user == 'adm') {
                this.$store.commit('DELETE_ADMIN', this.deleteUser.data);
            }
            else if(this.deleteUser.user == 'emp') {
                this.$store.commit('DELETE_EMPLOYEE', this.deleteUser.data);
            }
            this.dialog = false;
            this.deleteUser = [];
        },
        isValidPhoneNo(phoneNo) {
            const regExp = /(^\d{11}$)|(^\+?\d{5}-?\d{8}$)/g
            return regExp.test(phoneNo);
        },
        isValidEmail(email) {
            const regExp = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regExp.test(email);
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