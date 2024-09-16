<script setup>
defineProps({
  breadCrumbs: [Object, String]
})

</script>
<template>
<div class="breadCrumb">
  <nuxt-link to="/" class="link">Главная</nuxt-link>
  <div v-if="breadCrumbs.path !== '/'">/</div>
  <nuxt-link v-if="breadCrumbs.path !== '/'" :to="breadCrumbs.path" class="link second-link">{{ breadCrumbs.name }}</nuxt-link>
</div>
</template>
<style scoped lang="scss">
.breadCrumb {
  display: flex;
  font-weight: 600;
  margin-bottom: 32px;
  .link {
    cursor: pointer;
    margin-right: 8px;
  }
  .second-link {
    margin-left: 8px;
  }
}
</style>