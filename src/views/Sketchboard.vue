<template>
  <div class="container-main">
    <nav-bar/>

    <div class="main-area">
      <div class="feed">
        Sketch
      </div>

      <div class="contacts">
        <friend-list/>
      </div>
    </div>
  </div>
</template>
<script>
	import NavBar from '../components/NavBar';
	import FriendList from '../components/FriendList'

	export default {
		name: 'home',
		components: {
			NavBar,
			FriendList,
		}
	}
</script>

