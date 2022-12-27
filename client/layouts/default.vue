<template>
  <div>
    <NavBar />
    <br>
    <Nuxt />
    <br>
    <FooTer />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar';
  import FooTer from '@/components/FooTer';
  export default {
    components: [
      NavBar,
      FooTer
    ]
  }
</script>
