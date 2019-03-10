<template>
  <div class="new-post default-shadow default-border default-border-radius">
    <div class="new-post-header grey-bg">
      <h3>New Post</h3>
    </div>
    <div class="new-post-content">
      <textarea name="post-text" id="post-text" cols="30" rows="5"> Watch and enjoy:)</textarea>
    </div> 
    <div class="new-post-actions grey-bg">
      <i class="far fa-file-alt icon"></i>
      <i class="far fa-images icon"></i>
      <i class="far fa-file-video icon"></i>
      <button class="primary-bg default-border-radius" id="add-post">Add Post</button>
    </div>
  </div>
</template>

<style>
.new-post{
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
.new-post-header h3{
  margin-bottom: 0px;
}
.new-post-content{
  height: 126px;
}
.new-post-actions{
  display: flex;
  align-items: center;
  justify-content: center;
}
#post-text{
  width: 100%;
  height: 128px;
}
#add-post{
  padding: 6px 14px;
}
.icon {
  font-size: 45px;
  padding: 16px;
}
</style>

<script>
  export default {
    name: "new-post"
  };
</script>
