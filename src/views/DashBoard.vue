<template>
	<div>
		<!-- <h1>{{this.$store.state.appName}}</h1> -->

		<div class="main-body">
			<div class="left-side">
				<div class="bottom">
					<ul>
						<li>Employee List</li>
						<li>Admin List</li>
						<li>Create Employee</li>
						<li>Create Admin</li>
					</ul>
				</div>
			</div>
			<div class="right-side">
				<div class="content">
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
								<tr>
									<td>{{item}}</td>
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
						<button class="btn cancel">Cancel</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style src="./style.css" scoped />