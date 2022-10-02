<template>
<v-card>
    <v-layout>
        <v-navigation-drawer expand-on-hover rail>
            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-star" title="Employee List"
                    @click="$emit('adminEmp-list',{comp_load: 'AdminEmpList', data:'emp'})"></v-list-item>
                <v-list-item prepend-icon="mdi-star" title="Admin List"
                    @click="$emit('adminEmp-list',{comp_load: 'AdminEmpList', data:'adm'})"></v-list-item>
                <v-list-item prepend-icon="mdi-account-multiple" title="Create Admin"
                    @click="$emit('create-admin','CreateAdmin')"></v-list-item>
                <v-list-item prepend-icon="mdi-account-multiple" title="Create Employee"
                    @click="$emit('create-emp','CreateEmployee')"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main style="height: 250px"></v-main>
    </v-layout>
</v-card>

<!-- <div class="left-side">
    <div class="bottom">
        <ul>
            <li @click="$emit('adminEmp-list',{comp_load: 'AdminEmpList', data:'emp'})">Employee List</li>
            <li @click="$emit('adminEmp-list',{comp_load: 'AdminEmpList', data:'adm'})">Admin List</li>
            <li @click="$emit('create-admin','CreateAdmin')">Create Admin</li>
            <li @click="$emit('create-emp','CreateEmployee')">Create Employee</li>
        </ul>
    </div>
</div> -->
</template>

<script>
export default {

}
</script>


<style src="./LeftSide.css" scoped />