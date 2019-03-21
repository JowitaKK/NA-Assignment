<template>
  <div class="new-post default-border default-shadow">
    <div class="new-post-header">
      <h4>New Post</h4>
    </div>
    <div class="new-post-content">
      <textarea name="post-text" id="post-text" cols="30" rows="5"> Watch and enjoy:)</textarea>
    </div>
    <div class="new-post-actions">
      <i class="far fa-file-alt icon"></i>
      <i class="far fa-images icon"></i>
      <i class="far fa-file-video icon"></i>
      <button class="primary-bg default-border-radius" id="add-post">Add Post</button>
    </div>
  </div>
</template>

<style>
.new-post {
  min-width: 50%;
  margin-left: 3%;
  margin-right: auto;
}
@media screen and (max-width: 1200px) {
  .new-post {
    min-width: 70%;
  }
}
@media screen and (max-width: 800px) {
  .new-post {
    min-width: 80%;
  }
}
.new-post-header h4 {
  text-align: center;
  margin-bottom: 0px;
}
.new-post-content {
  height: 126px;
}
.new-post-actions {
  display: flex;
  align-items: center;
  justify-content: center;
}
#post-text {
  width: 100%;
  height: 128px;
}
#add-post {
  font-size: 12px;
  padding: 6px 14px;
}
.icon {
  font-size: 30px;
  padding: 16px;
}
</style>

<script>
export default {
  name: "new-post"
};
</script>
