<template>
  <div>
    <NuxtPage/>
  </div>
</template>


<script setup lang="ts">
/* ref()和computed()会自动导入 */
const count = ref(1)
const double = computed(() => count.value * 2)
</script>