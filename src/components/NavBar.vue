<template>
  <nav class="navbar">
    <a href="/" class="logo">
      <img height="40" src="../assets/logo.png" alt="warriors logo">
      <h3>Warriors</h3>
    </a>
    <ul class="nav-links left-nav">
      <li class="nav-item" @click="toggleSketchboard()">
        <i class="fas fa-pencil-alt"></i> Sketchboard
      </li>
    </ul>
    <ul class="nav-links right-nav">
      <li class="nav-item primary-bg default-border-radius">
        <a href="/logout">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<style>
.navbar {
  width: 100%;
  margin-bottom: 16px;
  background-color: #f1f1f1;
  display: flex;
  position: fixed;
  align-items: center;
  border-bottom: 1px gray solid;
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
.left-nav {
  margin-right: auto;
}
.right-nav {
  margin-left: auto;
}
.nav-item {
  cursor: pointer;
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
.logo:hover {
  text-decoration: none;
}
.logo h3 {
  display: inline;
}
.logo img {
  vertical-align: middle;
}
</style>


<script>
import Sketchboard from "../store/SketchboardStore";

export default {
  name: "nav-bar",
  data: () => {
    return {
      privateState: {},
      sketchboard: Sketchboard.state
    };
  },
  computed: {
    isSketchboardOpen: function() {
      return this.sketchboard.isOpen;
    }
  },
  methods: {
    toggleSketchboard: function() {
      Sketchboard.toggle();
    }
  }
};
</script>
