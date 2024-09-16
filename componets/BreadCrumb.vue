<script setup>
defineProps({
  breadCrumbs: [Object, String]
})

</script>
<template>
<div v-if="breadCrumbs.path !== '/'" class="breadCrumb">
  <nuxt-link to="/" class="link">Главная</nuxt-link>
  <div>/</div>
  <div class="link second-link">{{ breadCrumbs.name }}</div>
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