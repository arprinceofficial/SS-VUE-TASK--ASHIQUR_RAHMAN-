<template>
<div class="left-side">
    <div class="bottom">
        <ul>
            <li @click="$emit('adminEmp-list',{comp_load: 'AdminEmpList', data:'emp'})">Employee List</li>
            <li @click="$emit('adminEmp-list',{comp_load: 'AdminEmpList', data:'adm'})">Admin List</li>
            <li @click="$emit('create-admin','CreateAdmin')">Create Admin</li>
            <li @click="$emit('create-emp','CreateEmployee')">Create Employee</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {

}
</script>


<style src="./LeftSide.css" scoped />