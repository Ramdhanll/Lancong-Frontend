<template>
  <div id="app"></div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('destroyToken')
      .then(() => {
        this.$router.push({name: 'Login'})
      })
      .catch(e => console.log(e));
  },
}
</script>

<style>

</style>