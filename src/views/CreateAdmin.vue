<template>
    <div style="height:100%">
        <form @submit.prevent="createHandler">
            <div class="register">
                <h1>Create Admin</h1>
                <input type="text" placeholder="Enter name" v-model="name" :class="{ 'error':  !name && error }" />
                <input type="email" placeholder="Enter Email" v-model="email" :class="{ 'error':  !email && error }" />
                <div style="display:flex; flex-direction:column; color:red">
                    <input placeholder="Enter number" v-model.trim="number"
                        :class="{ 'error':  !number && error && !isValidPhoneNo(number) }" />
                
                    <!-- Validation Message -->
                    <small class="form-text text-danger" v-if="error && !isValidPhoneNo(number)">
                        {{ !number ? 'Required' : 'Invalid format' }}
                    </small>
                </div>
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
            storeAdmin:[],
        }
    },
    methods: {
        createHandler() {
            if (!this.name == null || this.name == "" || !this.email == null || this.email == "" || this.number == null || this.number == "" || !this.isValidPhoneNo(this.number)) {
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
                this.$store.dispatch("storeAdminInfo", result);

                // Store data in Local for checking in console
                this.storeAdmin.push({
                    id: this.storeAdmin.length + 1,
                    name: this.name,
                    email: this.email,
                    number: this.number
                })
            }
            console.log(this.storeAdmin)
        },
        isValidPhoneNo(phoneNo) {
            const regExp = /(^\d{11}$)|(^\+?\d{5}-?\d{8}$)/g
            return regExp.test(phoneNo);
        },
    },
}
</script>



<style src="./create.css" scoped />