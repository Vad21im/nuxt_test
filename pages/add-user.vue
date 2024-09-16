<script setup>
import BreadCrumb from "~/componets/BreadCrumb.vue";

const appStores = useAppStores()
const {namePage} = storeToRefs(appStores)
</script>
<template>
  <BreadCrumb :bread-crumbs="namePage"/>
  <div>add-user content</div>
</template>