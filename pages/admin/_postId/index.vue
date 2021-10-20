<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post-form="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm'
export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'me',
        thumbnailLink: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
        title: 'Post Title 3',
        content: 'Post preview text 3'
      }
    }
  }
}
</script>
<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
