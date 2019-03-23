<template>
  <div class="container-main">
    <nav-bar/>

    <div class="main-area">
      <div class="feed-area">
        <sketchboard/>
        <new-post/>
        <feed/>
      </div>

      <div class="contacts">
        <friend-list/>
        <chat-room/>
      </div>
    </div>
  </div>
</template>

<style>
.container-main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main-area {
  margin-top: 56px;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #e9ebee;
}
.feed-area {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.contacts {
  flex-grow: 0;
  display: flex;
}
</style>

<script>
// import ChatRoom from "../components/ChatRoom";
import NewPost from "../components/NewPost";
import NavBar from "../components/NavBar";
import FriendList from "../components/FriendList";
import Feed from "../components/Feed";
import Sketchboard from "../components/Sketchboard";

export default {
  name: "home",
  components: {
    NewPost,
    NavBar,
    FriendList,
    Feed,
    Sketchboard
  }
};
</script>
