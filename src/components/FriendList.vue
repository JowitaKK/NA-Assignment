<template>
  <div class="contact-list default-shadow default-border-radius">
    <div class="contact grey-bg" @click="startChat('Lorenzo James')">
      <div class="user-photo">
        <img height="60" src="../assets/lorenzo-james.png">
      </div>
      <div class="user-name"> 
          Lorenzo James
      </div>
    </div>
    <div class="contact grey-bg" @click="startChat('Emanuele De Pellegrin')">
      <div class="user-photo">
        <img height="60" src="../assets/emanuele-de-pellegrin.png">
      </div>
      <div class="user-name">
        Emanuele De Pellegrin
      </div>
    </div>
  </div>
</template>

<style>
  .contact-list{
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 330px;
    padding: 8px;
    position: fixed;
    right: 0px;
  }
  @media screen and (max-width: 1700px) {
    .contact-list {
      display: none !important;
    }
  }
  .contact{
    margin-bottom: 8px;
    display: flex;
    vertical-align: center;
    border-radius: 30px;
  }
  .contact:hover{
    background-color: #a39595;
  }
  .user-name{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .user-photo{
    margin-right: 8px;
  }
  .user-photo img {
    border-radius: 30px;  
  }

</style>

<script>
import ChatStore from '../store/ChatStore';

export default {
  name: 'friend-list',
  data: () => {
    return {
      privateState: {},
      sharedState: ChatStore.state
    };
  }, 
  methods: {
    startChat: function(username){
      ChatStore.startChat(username);
    }
  }
}
</script>
