<template>
  <div>
    <div class="tabs flex items-center justify-between">
      <div :class="{'active': activeName === item.type}" @click="handleActive(item.type)" class="tabs-item border-b border-[#d2d7db] w-1/2 flex items-center justify-center py-4 font-light cursor-pointer hover:font-semibold" v-for="(item, index) in tabsList" :key="index">{{ item.label }}</div>
    </div>
    <div v-if="activeName === 1" class="type1-container px-4 py-4">
      <div class="font-semibold text-xl">订阅 Udemy 的热门课程</div>
      <div class="text-sm text-gray-600">通过个人方案订阅，获得这门课程以及 11000 多门我们最受好评的课程。 <a class="text-blue-400 underline hover:text-blue-700 cursor-pointer" href="javascript:;">了解更多</a></div>
      <button class="bg-blue-500 cursor-pointer hover:bg-blue-700 mt-4 w-full h-12 text-white">免费试用个人方案</button>
      <div class="text-xs text-gray-400 text-center mt-3">
        <div>试用后每月 NT$410 起售</div>
        <div class="m-2">随时取消</div>
      </div>
      <div class="huo flex items-center text-xs text-gray-400 text-center mt-3">或</div>
      <div>
        <span class="font-bold text-xl">NT$790</span>
        <span class="line-through text-gray-400 text-base font-normal ml-3">原价NT$4,190</span>
        <span class="font-normal text-base ml-3">81%折扣</span>
      </div>
      <div class="text-red-500 font-normal text-sm mt-2">
        <i class="iconfont icon-naozhong font-bold"></i>
        此优惠价格仅剩 <span class="font-bold">1</span> 天！
      </div>
      <button class="w-full h-10 border-black border mt-4 cursor-pointer hover:bg-gray-200">前往购物车</button>
      <div class="text-xs text-gray-400 text-center mt-3">
        <div>30 天退款保证</div>
        <div class="m-2">完整的永久访问权</div>
      </div>
      <div class="flex justify-between items-center text-sm font-semibold mt-3">
        <button class="underline underline-offset-4 decoration-blue-600">分享</button>
        <button>将该课程作为礼物赠送</button>
        <button>使用优惠卷</button>
      </div>
      <div class="border border-dashed flex items-center justify-between  p-2 my-4 text-xs">
        <div>
          <div class="text-gray-400"><span class="font-bold text-gray-600">ST10MT8624</span> 适用</div>
          <div class="text-gray-400">Udemy 优惠券</div>
        </div>
        <div><i class="iconfont icon-close text-blue-600 text-2xl"></i></div>
      </div>
      <div class="border border-primary flex items-center">
        <input type="text" class="flex-1 px-4 outline-none bg-transparent" autocomplete="off" placeholder="输入优惠券">
        <button class="bg-black text-white hover:opacity-85 w-20 py-2 ">使用</button>
      </div>
    </div>
    <div v-if="activeName === 2" class="type2-container  px-4 py-4">
      <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg" alt="Udemy Business" width="141" height="24" loading="lazy">
      <div class="text-sm text-gray-600 py-2">订阅此课程和您组织的 26000 个以上最受好评的 Udemy 课程。</div>
      <button class="bg-blue-500 cursor-pointer hover:bg-blue-700 mt-4 w-full h-12 text-white">试用 Udemy Business</button>
      <div class="">
        <div class="text-gray-500 text-sm mt-4" v-for="(item, index) in textList" :key="index">
          <i class="iconfont icon-confirm mr-3"></i>
          <span>{{item.text}}</span>
        </div>
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
const textList = ref([
  {text: '面向用户数为5人或以上的团队' },
  {text: '26000个以上需求最高的全新课程' },
  {text: '学习互动工具' },
  {text: 'SSO和LMS集成' },
])
const handleActive = (type) => {
  activeName.value = type
}

</script>
<style lang="scss" scoped>
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
</style>