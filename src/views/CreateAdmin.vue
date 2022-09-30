<template>
    <div style="height:100%">
        <form @submit.prevent="createHandler">
            <div class="register">
                <h1>Create Admin</h1>
                <input type="text" placeholder="Enter name" v-model="name" :class="{ 'error':  !name && error }" />
                <input type="email" placeholder="Enter Email" v-model="email" :class="{ 'error':  !email && error }" />
                <input type="number" placeholder="Enter number" v-model="number" :class="{ 'error':  !number && error }" />
                
                <div class="button">
                    <button type="submit">Create</button>
                    <button class="btn cancel" @click="$emit('cancel-button','DashBoard')">Cancel</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            number: null,
            error: false,
        }
    },
    methods: {
        createHandler() {
            if (!this.name == null || this.name == "" || !this.email == null || this.email == "" || !this.number == null || this.number == "") {
                this.error = true;
            }
            else {
                alert("Create Successful")
            }
        }
    },
}
</script>



<style src="./create.css" scoped />