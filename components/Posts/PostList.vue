<template>
  <section class="post-list">
    <PostPreview
      postId = "1"
      thumbnail = "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title = "Post Title 1"
      previewText = "Post preview text 1"
    />
    <PostPreview
      postId = "2"
      thumbnail = "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title = "Post Title 2"
      previewText = "Post preview text 2"
    />
    <PostPreview
      postId = "3"
      thumbnail = "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title = "Post Title 3"
      previewText = "Post preview text 3"
    />
  </section>
</template>
<script>
import PostPreview from '~/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  name: 'PostList'
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
