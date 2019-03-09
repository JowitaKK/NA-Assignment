<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  html, 
  body {
    height: 100%;
    width: 100%;
  }
  #app {
    height: 100%;
    width: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>

<style lang="scss">
  .default-shadow {
    -webkit-box-shadow: 2px 2px 3px 4px #ccc; 
    -moz-box-shadow:    2px 2px 3px 4px #ccc;  
    box-shadow:         2px 2px 3px 4px #ccc;  
  }

  .default-border{
    border: 2px solid;
    border-color: #c1c6cc;
    border-radius: 10px;
  }

  .default-border-radius{
    border-radius: 5px;
  }

  .grey-bg {
    background-color: #f1f1f1;
  }
  .grey-bg-dark {
    background-color: #a39595;
  }

  .primary-bg{
    background-color: #1ddced;
    &:hover{
      background-color: #00aabb
    }
  }
  .primary-bg-light{
    background-color: #70ffff;
  }
  .primary-bg-dark{
    background-color: #00aabb
  }
  .secondary-bg{
    background-color: #1adda4
  }
  .secondary-bg-light{
    background-color: #69ffd5
  }
  .secondary-bg-dark{
    background-color: #00aa75
  }
</style>