<template id="login-form">
  <div class="container">
    <div class="row align-items-center">
      <div class="col">
        <img height="400" src="../assets/printed-watercolour-glass-splashback-pink-tree.png">
      </div>

      <div class="col">
        <form>
          <div class="form-group">
            <label class="float-left" for="email">Email address</label>
            <input type="email" class="form-control" id="email"  placeholder="Enter email" required>
          </div>
          <div class="form-group">
            <label class="float-left" for="Username">Username</label>
            <input type="username" class="form-control" id="uername"  placeholder="Enter Username" required>
          </div>
          <div class="form-group">
            <label class="float-left" for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" required>
          </div>
          <div class="form-group">
            <label class="float-left" for="password-confirmation">Password Confirmation</label>
            <input type="password-confirmation" class="form-control" id="password-confirmation" placeholder="Password" required>
          </div>
          <div class="float-left form-check">
            <input type="checkbox" class="form-check-input" id="terms-checkbox">
            <label class="form-check-label" for="terms-checkbox">Agree to term and conditions</label>
          </div>
          <button type="submit" id="signup-btn" class="float-right btn btn-success">Signup</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style type="text/css">
  #signup-btn{
    padding-top: 0px;
      padding-bottom: 0px;
  }
</style>