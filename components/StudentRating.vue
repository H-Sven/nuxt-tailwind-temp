<template>
  <div class="student-rating text-sm flex items-center">
    <span class="rating-num text-[#eebd4c] pr-1">4.6</span>
    <el-rate disabled v-model="rateValue" />
    <a href="javascript:;" class="rating-count text-[#c0c4fc] px-1 underline">(422323个评分)</a>
    <span>1932323个学生</span>
  </div>
</template>

<script setup lang="ts">
  const rateValue = ref(4.6)
</script>
<style lang="scss" scoped>
</style>