<template>
  <div class="student-rating text-sm flex items-center">
    <span class="text-[#eebd4c] pr-1">4.6</span>
    <i class="iconfont icon-icon- text-[#eebd4c]" v-for="(item, index) in 4" :key="index"></i>
    <i class="iconfont icon-pingfenti text-[#eebd4c]"></i>
    <a href="javascript:;" class="rating-count max-lg:text-black text-[#c0c4fc] px-1 underline">(422323个评分)</a>
    <span class="max-lg:text-black">1932323个学生</span>
  </div>
</template>

<script setup lang="ts">
  const rateValue = ref(4.6)
</script>
<style lang="scss" scoped>
</style>