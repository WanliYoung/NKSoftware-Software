<template>
  <UploadImg :username="this.$route.params.username"></UploadImg>
</template>

<script>

import UploadImg from "@/components/main_vue/UploadImg";
export default {
  name: "UpdateImg",
  components: {UploadImg}
}
</script>

<style scoped>

</style>
