<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <VLayout ref="app">
    <TheHeader />

    <VMain class="bg-grey-lighten-5">
      <div class="">
        <RouterView></RouterView>
      </div>
    </VMain>
    

  </VLayout>
</template>

<style scoped>

</style>
