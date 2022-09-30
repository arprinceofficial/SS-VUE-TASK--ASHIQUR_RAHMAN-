<template>
	<div class="main-body">
		<LeftSide 
			@adminEmp-list="adminEmpList"
			@create-admin="(data) => comp_load=data"
			@create-emp="(data) => comp_load=data"
		/>
		<div class="right-side">
			<component
				:is="comp_load"
				@cancel-button="cancelButton"
				:RECEIVE_DATA="sendData"
			/>
		</div>
	</div>

</template>

<script>
import LeftSide from '@/views/LeftSide'
import DashBoard from '@/views/DashBoard'
import AdminEmpList from '@/views/AdminEmpList'
import CreateAdmin from '@/views/CreateAdmin'
import CreateEmployee from '@/views/CreateEmployee'
export default {
	name: 'HomePage',
	components: {
		LeftSide,
		DashBoard,
		AdminEmpList,
		CreateAdmin,
		CreateEmployee,
	},
	data() {
		return {
			comp_load: 'DashBoard',
			sendData: '',
		}
	},
	methods: {
		adminEmpList(data) {
			this.comp_load = data.comp_load;
			this.sendData = data;
			console.log('adminEmpList', data);
			console.log('sendData', this.sendData);
		},
		cancelButton(data) {
			this.comp_load = data;
			console.log('cancelButton', this.comp_load)
		}
	}

}
</script>


