<template>
  <div class="student-rating flex items-center">
    <span class="rating-num">4.6</span>
    <el-rate v-model="rateValue" />
    <a href="javascript:;" class="rating-count underline">(422323个评分)</a>
    <span>1932323个学生</span>
  </div>
</template>

<script setup lang="ts">
  const rateValue = ref(4.6)
</script>
<style lang="scss" scoped>
.student-rating {
  font-size: 14px;
  .rating-num {
    color: #eebd4c;
    padding-right: 5px;
  }
  .rating-count {
    color: #c0c4fc;
    padding: 0 5px;
  }
}
</style>