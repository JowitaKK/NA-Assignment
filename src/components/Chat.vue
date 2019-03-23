<template>
  <div>
    <div class="chatbox">
      <div class="chatbox-header">
        <h6>Chat</h6>
      </div>
      <div class="chatlogs">
        <template v-for="m in messages">
          <div :key="m.id" class="chat friend" v-if="m.from !== settings.me">
            <div class="user-photo">
              <img
                height="60"
                alt="friend avatar"
                :src="require(`@/assets/${friends.friends[m.from].avatar}`)"
              >
            </div>
            <p class="chat-message secondary-bg">{{m.message}}</p>
          </div>

          <div :key="m.id" class="chat self" v-if="m.from === settings.me">
            <div class="user-photo">
              <img 
                height="60" 
                alt="me avatar" 
                :src="require(`@/assets/${settings.avatar}`)"
              >
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
    <div class="contact-list">
      <div class="contact grey-bg">
        <div class="user-photo">
          <img height="60" alt="avatar" src="../assets/lorenzo-james.png">
        </div>
        <div class="user-name">Lorenzo James</div>
      </div>
      <div class="contact grey-bg">
        <div class="user-photo">
          <img height="60" alt="avatar" src="../assets/emanuele-de-pellegrin.png">
        </div>
        <div class="user-name">Emanuele De Pellegrin</div>
      </div>
    </div>
  </div>
</template>

<style>
.chatbox {
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 100%;
  padding: 16px;
  position: fixed;
  right: 280px;
  border-left: gray 1px solid;
  border-top: gray 1px solid;
}

@media screen and (max-width: 1700px) {
  .chatbox {
    display: none !important;
  }
}
.chatbox-header {
  display: flex;
  justify-content: space-between;
}
.close-icon {
  cursor: pointer;
}
.chatlogs {
  height: calc(100% - 180px);
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
  order: 0;
}
.self .chat-message {
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
  border: 2px solid #eee;
  border-radius: 3px;
  resize: none;
  padding: 2px;
  font-size: 18px;
  color: black;
}
.chat-form textarea:focus {
  background: #fff;
}
.chat-form button {
  background: #1ddced;
  padding: 8px 18px;
  color: black;
  border: none;
  margin: 10px;
  border-radius: 3px;
  cursor: pointer;
}
.contact-list {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 280px;
  padding: 8px;
  position: fixed;
  right: 0px;
  background: lightgray;
  border-left: 1px gray solid;
}
@media screen and (max-width: 1700px) {
  .contact-list {
    display: none !important;
  }
}
.contact {
  margin-bottom: 8px;
  display: flex;
  vertical-align: center;
  border-radius: 30px;
}
.user-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.user-photo {
  margin-right: 8px;
}
.user-photo img {
  border-radius: 30px;
}
</style>

<script>
import ChatStore from "../store/ChatStore";
import UsersStore from "../store/UsersStore";
import SettingsStore from "../store/SettingsStore"

export default {
  name: "chat",
   data: function() {
    return {
      chatStore: ChatStore.state,
      settings: SettingsStore.state,
      usersStore: UsersStore.state
    };
  },
  computed: {
    users: function() {
      return this.usersStore.users;
    },
    messages: function() {
      return this.chatStore.messages;
    }
  },
};
</script>
