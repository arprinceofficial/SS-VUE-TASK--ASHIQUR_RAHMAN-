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
                    <tr v-for="index in 30" :key="index">
                        <td>{{index}}</td>
                        <td>Ashiqur Rahman</td>
                        <td>as@gmail.com</td>
                        <td>01977879681</td>
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
                    <tr v-for="index in 5" :key="index">
                        <td>{{index}}</td>
                        <td>Ashiqur Rahman</td>
                        <td>as@gmail.com</td>
                        <td>01977879681</td>
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
    }
}
</script>



<style src="./style.css" scoped />