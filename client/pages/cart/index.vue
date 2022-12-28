<template lang="html">
  <div>
    <header>
      <div>
        <h1>Cart</h1>
      </div>
    </header>
    <section id="display-section">
      <div v-for="(item, index) in $store.state.carts" :key="index">
        <h2>{{ item }}</h2>
      </div>
    </section>
  </div>
</template>

<script lang="js">

</script>

<style lang="css" scoped>
  * {
    text-align: center;
  }
</style>
