<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <VLayout ref="app">
    <TheHeader />

    <VMain class="">
      <div class="">
        <RouterView></RouterView>
      </div>
      <TheFooter />
    </VMain>
    

  </VLayout>
</template>

<style lang="scss" scoped>
main {
  background-color: $light-gray;
}

</style>
