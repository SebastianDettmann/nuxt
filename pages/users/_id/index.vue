<template>
  <div>
    <h1>User page</h1>
    <p>User Id: {{ $route.params.id}}</p>
  </div>
</template>

<script>
export default {
  validate(data) {
    return /^\d+$/.test(data.params.id)
  }
}
</script>
