<template>
  <form @submit.prevent="onSubmit">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.content">Content</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.previewText">Preview Text</AppControlInput>
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Cancel</AppButton>
  </form>
</template>
<script>
import AppButton from '~/components/UI/AppButton'
import AppControlInput from '~/components/UI/AppControlInput'
export default {
  name: 'AdminPostForm',
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  components: {
    AppButton, AppControlInput
  },
  data() {
    return {
      editedPost: this.post
        ? {...this.post}
        : {
            author: '',
            title: '',
            thumbnail: '',
            content: '',
            previewText: ''
          }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.editedPost);
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      this.$router.push('/admin');
    }
  }

}
</script>

<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}
a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}
</style>
