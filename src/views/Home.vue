<template>
	<div class="container-main">
		<nav-bar />
		
		<div class="main-area">
			<div class="feed-area">
				<new-post/>
				<feed />
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
.feed-area{
	flex-grow: 1;
	display: flex; 
	flex-direction: column;
	overflow-y: auto;
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
	import Feed from '../components/Feed';

	export default {
		name: 'home',
		components: {
			ChatRoom,
			NewPost,
			NavBar,
			FriendList,
			Feed,
		}
	}
</script>
