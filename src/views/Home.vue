<template>
	<div class="container-main">
		<nav-bar />
	
		<div class="main-area">
			<div class="feed">
				<new-post/>
			</div>

			<div class="contacts">
				<chat-room/>
				<friend-list/>
			</div>
		</div>
	</div>
</template>

<style type="text/css">
	.container-main{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.main-area{
		flex-grow: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.feed{
		flex-grow: 1;
		/* display: flex; */
	}
	.contacts{
		flex-grow: 0;
		display: flex;
	}

</style>

<script>
	import ChatRoom from '../components/ChatRoom';
	import NewPost from '../components/NewPost';
	import NavBar from '../components/NavBar';
	import FriendList from '../components/FriendList'

	export default {
		name: 'home',
		components: {
			ChatRoom,
			NewPost,
			NavBar,
			FriendList,
		}
	}
</script>
