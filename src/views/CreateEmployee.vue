<template>
    <div style="height:100%">
        <form @submit.prevent="createHandler">
            <div class="register">
                <h1>Create Employee</h1>
                <input type="text" placeholder="Enter name" v-model="name" :class="{ 'error':  !name && error }" />
                <input type="email" placeholder="Enter Email" v-model="email" :class="{ 'error':  !email && error }" />
                <input type="tel" pattern="[0-9]{11}" placeholder="Enter number" v-model="number"
                    :class="{ 'error':  !number && error }" />
                <small>Ex: 01977879681</small>
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
            if (!this.name == null || this.name == "" || !this.email == null || this.email == "" || this.number == null || this.number == "") {
                this.error = true;
            }
            else {
                // alert("Create Successful")
                let result = {
                    name: this.name,
                    email: this.email,
                    number: this.number
                };

                // Store data in Vuex
                this.$store.dispatch("storeEmployeeInfo", result);
            }
        }
    },
}
</script>

<style src="./create.css" scoped />