<template id="login-form">
	<div class="container">
		<div class="row align-items-center">
			<div class="col">
				<img height="400" src="../assets/logo.png">
			</div>

			<div class="col">
				<form>
					<div class="form-group">
						<label class="float-left" for="email">Email address</label>
						<input type="email" class="form-control" id="email"  placeholder="Enter email" required>
					</div>
					<div class="form-group">
						<label class="float-left" for="password">Password</label>
						<input type="password" class="form-control" id="password" placeholder="Password" required>
					</div>
					<div class="float-left form-check">
						<input type="checkbox" class="form-check-input" id="exampleCheck1">
						<label class="form-check-label" for="exampleCheck1">Remember me</label>
					</div>
					<button type="submit" id="login-btn" class="float-right btn btn-success">Login</button>
				</form>
			</div>
		</div>
	</div>
</template>

<style type="text/css">
	#login-btn{
		padding-top: 0px;
    padding-bottom: 0px;
	}
</style>