<template>
  <div class="student-buy border-b border-[#d1d7dc] flex items-start py-4 items-stretch">
    <img src="https://img-c.udemycdn.com/course/50x50/2776760_f176_10.jpg" width="64" height="68">
    <div class="midden-content ml-3 flex flex-1 flex-col justify-between">
      <div class="title font-semibold">100 Days of Code: The Complete Python Pro Bootcamp</div>
      <div class="course-info">
        <span class="font-medium text-sm">总共 56.5 小时 · </span>
        <span class="text-sm">更新日期 2024年8月</span>
      </div>
    </div>
    <div class="data-box flex items-start">
      <div class="ml-6 font-semibold flex items-center">
        <span>4.7</span>
        <el-icon><ElIconStarFilled /></el-icon>
      </div>
      <div  class="ml-6 text-sm  flex items-center">
        <el-icon><ElIconUserFilled /></el-icon>
        <span>132313213</span>
      </div>
      <div  class="ml-6 flex flex-col">
        <span class="font-semibold">NT$320</span>
        <span class="text-sm text-gray-400 line-through">NT$20202</span>
      </div>
    </div>
    <div class="like-btn rounded-[50%] border border-[#232323] w-10 h-10 flex items-center justify-center ml-3 cursor-pointer hover:bg-slate-300">
      <el-icon><ElIconCollectionTag /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
  const rateValue = ref(4.6)
</script>
<style lang="scss" scoped>

</style>