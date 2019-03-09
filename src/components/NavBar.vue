<template>
  <nav class="navbar">
    <a href="/" class="logo">
      <img height="40" src="../assets/logo.png" alt="warriors logo"> <h3>Warriors</h3>
    </a>
    <ul class="nav-links left-nav">
      <li class="nav-item default-border-radius"><a href="/sketchboard">
        <i class="fab fa-sketch"></i> Sketchboard</a>
      </li>
    </ul>
    <ul class="nav-links right-nav">
      <li class="nav-item primary-bg default-border-radius"><a href="/logout">Logout</a></li>
    </ul>
  </nav>
</template>

<style>
  .navbar {  
    width: 100%;
    margin-bottom: 16px;
    background-color: #f1f1f1;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
  }

  .logo {
    display: inline-block;
  }

  .nav-links {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;
  }
  .left-nav{
    margin-right: auto;
  }
  .right-nav{
    margin-left: auto;
  }
  .nav-item a {
    display: inline-block;
    padding: 6px 14px;
    text-decoration: none;
    color: black;
  }
  .logo {
    font-size: 24px;
    color: black;
  }
  .logo:hover{
    text-decoration: none;
  }
  .logo h3{
    display: inline;
  }
  .logo img {
    vertical-align: middle;
  }
</style>


<script>
export default {
  name: "nav-bar"
}
</script>
