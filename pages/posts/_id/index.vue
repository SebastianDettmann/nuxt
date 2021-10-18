<template>
  <section class="container single-post-page">
    <section class="post">
      <h2 class="post-title">Post Title</h2>
      <div class="post-details">
        <div class="post-detail">Last update XXXXX</div>
        <div class="post-detail">Written by Name</div>
      </div>
      <p class="post-content">Contendof the Post</p>
    </section>
    <section class="post-feedback">
      <p>Give me a feedback<a href="mailto:foo.bar@fizz.baz">foo.bar@fizz.baz</a>.</p>
    </section>
  </section>
</template>

<script>

</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}
.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
