<template>
  <div class="chatbox default-shadow" v-if="username">
    <div class="chatbox-header">
      <h6>{{ username }}</h6>
      <i class="fas fa-times close-icon" @click="finishChat"></i>
    </div>
    <div class="chatlogs">

      <!--
        Using hardcoded img, replace with serverside url 
        https://github.com/vuejs-templates/webpack/issues/450
       -->
      <template v-for="m in messages">
        <div :key="m.id" class="chat friend" v-if="m.from !== settings.me">
          <div class="user-photo">
            <img height="60" :src="require(`@/assets/${friends.friends[m.from].avatar}`)">
          </div>
          <p class="chat-message secondary-bg">{{m.message}}</p>
        </div>

        <div :key="m.id" class="chat self" v-if="m.from === settings.me">
          <div class="user-photo">
            <img height="60" :src="require(`@/assets/${settings.avatar}`)">
          </div>
          <p class="chat-message primary-bg">{{m.message}}</p>
        </div>
      </template>
    </div>

    <div class="chat-form">
      <textarea></textarea>
      <button class="secondary-bg">Send</button>
    </div>
  </div>
</template>

<style>
.chatbox {
  width: 450px;
  height: 500px;
  background: #f1f1f1;
  padding: 16px;
  position: fixed;
  right: 362px;
  bottom: 0px;
}
.chatbox-header {
  display: flex;
  justify-content: space-between;
}
.close-icon {
  cursor: pointer;
}
.chatlogs {
  padding: 10px;
  width: 100%;
  height: 350px;
  overflow-x: hidden;
  overflow-y: scroll;
}

.chat {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
}
.chat .user-photo {
  width: 50px;
  height: 50px;
  background: #ccc;
  border-radius: 50%;
  overflow: hidden;
}
.chat .user-photo img {
  width: 100%;
}
.chat .chat-message {
  width: 300px;
  padding: 15px;
  margin: 5px 10px 0;
  border-radius: 10px;
  color: black;
  font-size: 18px;
}
.friend .chat-message {
  /* background: #1adda4; */
}

.self .chat-message {
  /* background: #1ddced; */
  order: -1;
}
.chat-form {
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
}
.chat-form textarea {
  background: #fbfbfb;
  width: 75%;
  height: 50px;
  border: 2px solid #eee;
  border-radius: 3px;
  resize: none;
  padding: 10px;
  font-size: 18px;
  color: black;
}
.chat-form textarea:forcus {
  background: #fff;
}
.chat-form button {
  background: #1ddced;
  padding: 5px 15px;
  color: black;
  border: none;
  margin: 0 10px;
  border-radius: 3px;
  cursor: pointer;
}
</style>

<script>
import ChatStore from "../store/ChatStore";
import FriendsStore from "../store/FriendsStore";
import SettingsStore from "../store/SettingsStore";

export default {
  name: "chat-room",
  data: function() {
    return {
      chat: ChatStore.state,
      settings: SettingsStore.state,
      friends: FriendsStore.state,
    };
  },
  computed: {
    username: function() {
      return this.chat.username;
    },
    messages: function() {
      return this.chat.messages;
    },
  },
  methods: {
    finishChat: function() {
      ChatStore.finishChat();
    }
  }
};
</script>
