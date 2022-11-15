<script setup>
import YesNo from './components/User.vue'
</script>
<template>
  <Suspense>
    <YesNo/>
    <template #fallback>
      <img src="https://media.tenor.com/o8m3bKTsifUAAAAC/hold-on.gif" />
    </template>
  </Suspense>
  
</template>

<style scoped>

</style>
