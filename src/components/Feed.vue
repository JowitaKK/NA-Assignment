<template>
  <div class="feed">
    <div class="post default-border default-shadow">
      <div class="post-author">
        <div class="post-author-avatar">
          <img height="60" alt="post author avatar" src="../assets/lorenzo-james.png"> Lorenzo James
        </div>
      </div>
      <div class="post-media">
        <video controls>
          <source src="../assets/video/insulin.mp4" type="video/mp4">
        </video>
      </div>
      <div class="post-body">
        <p class="post-text">Very useful.</p>
      </div>
    </div>

    <div class="post default-border default-shadow">
      <div class="post-author">
        <div class="post-author-avatar">
          <img height="60" alt="post author avatar" src="../assets/lorenzo-james.png"> Lorenzo James
        </div>
      </div>
      <div class="post-media">
        <img src="../assets/img/funny1.jpeg">
      </div>
      <div class="post-body">
        <p class="post-text">Very useful.</p>
      </div>
    </div>

    <div class="post default-border default-shadow">
      <div class="post-author">
        <div class="post-author-avatar">
          <img height="60" alt="post author avatar" src="../assets/lorenzo-james.png"> Lorenzo James
        </div>
      </div>
      <div class="post-media">
        <video controls>
          <source src="../assets/video/insulin.mp4" type="video/mp4">
        </video>
      </div>
      <div class="post-body">
        <p class="post-text">Very useful.</p>
      </div>
    </div>

    <div class="post default-border default-shadow">
      <div class="post-author">
        <div class="post-author-avatar">
          <img height="60" alt="post author avatar" src="../assets/lorenzo-james.png"> Lorenzo James
        </div>
      </div>
      <div class="post-media">
        <video controls>
          <source src="../assets/video/insulin.mp4" type="video/mp4">
        </video>
      </div>
      <div class="post-body">
        <p class="post-text">Very useful.</p>
      </div>
    </div>

    <div class="post default-border default-shadow">
      <div class="post-author">
        <div class="post-author-avatar">
          <img height="60" alt="post author avatar" src="../assets/lorenzo-james.png"> Lorenzo James
        </div>
      </div>
      <div class="post-media">
        <video controls>
          <source src="../assets/video/insulin.mp4" type="video/mp4">
        </video>
      </div>
      <div class="post-body">
        <p class="post-text">Very useful.</p>
      </div>
    </div>

    <div class="post default-border default-shadow">
      <div class="post-author">
        <div class="post-author-avatar">
          <img height="60" alt="post author avatar" src="../assets/lorenzo-james.png"> Lorenzo James
        </div>
      </div>
      <div class="post-media">
        <video controls>
          <source src="../assets/video/insulin.mp4" type="video/mp4">
        </video>
      </div>
      <div class="post-body">
        <p class="post-text">Very useful.</p>
      </div>
    </div>
  </div>
</template>


<style>
.feed {
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

@media screen and (max-width: 1200px) {
  .feed {
    max-width: 70%;
  }
}
@media screen and (max-width: 800px) {
  .feed {
    max-width: 80%;
  }
}

.post-divider {
  width: 32px;
}
.post {
  margin-top: 16px;
  margin-bottom: 16px;
  flex-basis: 100%;
  box-sizing: border-box;
  background-color: white;
}
.post-author-avatar {
  padding: 4px;
}
.post-author-avatar img {
  border-radius: 30px;
}
.post-media video {
  width: 100%;
}
.post-media img {
  width: 100%;
}
.post-text{
  padding: 8px;
}
</style>

	<script>
export default {
  name: "feed"
};
</script>