<template>
  <div class="py-4 border-b flex items-start justify-between">
    <img src="https://img-c.udemycdn.com/course/50x50/2776760_f176_10.jpg" class="w-16 h-16">
    <div class="flex-1 flex">
      <div class="flex-[4] min-w-44 ml-2 relative">
        <div class="text-base font-bold line-clamp-2">100 Days of Code: The Complete Python Pro Bootcamp</div>
        <div class="whitespace-nowrap absolute">
          <span class="font-medium text-sm">56.5 total hours · </span>
          <span class="text-sm">Updated 08/2024</span>
        </div>
      </div>
      <div class="flex flex-[4] items-start justify-between ml-4">
        <div class="ml-6 font-semibold flex items-center">
          <span>4.7</span>
          <i class="iconfont icon-icon- text-red-600"></i>
        </div>
        <div  class="ml-6 text-sm  flex items-center">
          <i class="iconfont icon-user pr-1"></i>
          <span>132313213</span>
        </div>
        <div  class="ml-6 flex flex-col">
          <span class="font-semibold">NT$320</span>
          <span class="text-xs text-gray-400 line-through">NT$20202</span>
        </div>
      </div>
    </div>
    <div class="like-btn rounded-[50%] border border-[#232323] w-10 h-10 flex items-center justify-center ml-3 cursor-pointer hover:bg-slate-300">
      <i class="iconfont icon-shoucang"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
  const rateValue = ref(4.6)
</script>
<style lang="scss" scoped>

</style>