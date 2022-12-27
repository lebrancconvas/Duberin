<template lang="html">
  <div>
    <Menu mode="horizontal" :theme="theme">
      <NuxtLink to="/">
        <MenuItem>
          Duberin
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/wishlist">
        <MenuItem>
          Wishlist
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/cart">
        <MenuItem>
          Cart
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/profile">
        <MenuItem>
          Profile
        </MenuItem>
      </NuxtLink>
    </Menu>
  </div>
</template>

<script lang="js">
  export default {

  }
</script>

<style lang="css" scoped>

</style>
