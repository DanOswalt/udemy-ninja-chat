<template>
  <div class="chat container">
    <h2>chat {{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data() {
    return {

    }
  },
  props: [
    'name'
  ]
}
</script>

<style>

</style>
