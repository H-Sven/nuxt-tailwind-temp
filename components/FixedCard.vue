<template>
  <div class="fixed-card text-[#232323] z-10 border boder-[#d1d7dc] w-[340px] bg-white pb-5 text-black ml-9">
    <img src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg" class="w-full">
    <div class="tabs flex items-center justify-between">
      <div :class="{'active': activeName === item.type}" @click="handleActive(item.type)" class="tabs-item border-b border-[#d2d7db] w-1/2 flex items-center justify-center py-4 font-light cursor-pointer hover:font-semibold" v-for="(item, index) in tabsList" :key="index">{{ item.label }}</div>
    </div>
    <div v-if="activeName === 1" class="type1-container px-4 py-4">
      <div class="font-semibold">订阅 Udemy 的热门课程</div>
      <div class="text-sm text-gray-400">通过个人方案订阅，获得这门课程以及 11000 多门我们最受好评的课程。 <a class="text-blue-400 underline hover:text-blue-700 cursor-pointer" href="javascript:;">了解更多</a></div>
      <button class="bg-blue-500 cursor-pointer hover:bg-blue-700 mt-4 w-full h-12 text-white">免费试用个人方案</button>
      <div class="text-xs text-gray-400 text-center mt-3">
        <div>试用后每月 NT$410 起售</div>
        <div class="m-2">随时取消</div>
      </div>
      <div class="huo flex items-center text-xs text-gray-400 text-center mt-3">或</div>
      <div class="m-4">
        <span class="font-bold">NT$790</span>
        <span class="line-through text-gray-400 font-normal ml-3">原价NT$4,190</span>
        <span class="font-normal ml-3">折扣81%</span>
      </div>
      <div class="text-red-500 font-normal text-sm">此优惠价格仅剩 <span class="font-bold">1</span> 天！</div>
      <button class="w-full h-10 border-black border mt-4 cursor-pointer hover:bg-gray-200">前往购物车</button>
      <div class="text-xs text-gray-400 text-center mt-3">
        <div>30 天退款保证</div>
        <div class="m-2">完整的永久访问权</div>
      </div>
    </div>
    <div v-if="activeName === 2" class="type2-container  px-4 py-4">
      <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg" alt="Udemy Business" width="141" height="24" loading="lazy">
      <div class="text-sm text-gray-400">订阅此课程和您组织的 26000 个以上最受好评的 Udemy 课程。</div>
      <button class="bg-blue-500 cursor-pointer hover:bg-blue-700 mt-4 w-full h-12 text-white">试用 Udemy Business</button>
      <div class="list">
        <div class="list-item text-gray-500 text-sm m-4" v-for="(item, index) in 5" :key="index">面向用户数为 5 人或以上的团队</div>
      </div>
    </div>
  </div>
</template>
<script setup>
const activeName = ref(1)
const tabsList = ref([
  {label: '个人', type: 1 },
  {label: '团队', type: 2 },
])
const handleActive = (type) => {
  activeName.value = type
}
</script>
<style lang="scss" scoped>
  .fixed-card {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .08), 0 4px 12px rgba(0, 0, 0, .08);
    .tabs {
      .tabs-item {
        &.active {
          font-weight: 600;
          border-color: #232323;
          border-bottom-width: 2px;
        }
      }
    }
    .huo {
      &::before,
      &::after {
        display: block;
        content: '';
        flex: 1;
        border-bottom: 1px solid #d1d7dc;
        margin-left: 8px;
      }
      &::before {
        margin-right: 8px;
      }
    }
  }
</style>