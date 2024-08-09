<template>
  <div>
    <div class="tabs flex items-center justify-between">
      <div :class="{'active': activeName === item.type}" @click="handleActive(item.type)" class="tabs-item border-b border-[#d2d7db] w-1/2 flex items-center justify-center py-4 font-light cursor-pointer hover:font-semibold" v-for="(item, index) in tabsList" :key="index">{{ item.label }}</div>
    </div>
    <div v-if="activeName === 1" class="type1-container px-4 py-4">
      <div class="font-semibold text-xl">Subscribe to Udemy’s top courses</div>
      <div class="text-sm text-gray-600">Get this course, plus 11,000+ of our top-rated courses, with Personal Plan. <a class="text-blue-400 underline hover:text-blue-700 cursor-pointer" href="javascript:;"> Learn more </a></div>
      <button class="bg-blue-500 cursor-pointer hover:bg-blue-700 mt-4 w-full h-12 text-white">Try Personal Plan for free</button>
      <div class="text-xs text-gray-400 text-center mt-3">
        <div>Starting at NT$410 per month after trial</div>
        <div class="m-2">Cancel anytime</div>
      </div>
      <div class="huo flex items-center text-xs text-gray-400 text-center mt-3">or</div>
      <div>
        <span class="font-bold text-xl">NT$790</span>
        <span class="line-through text-gray-400 text-base font-normal ml-3">Orgin NT$4,190</span>
        <span class="font-normal text-base ml-3">81% off</span>
      </div>
      <div class="text-red-500 font-normal text-sm mt-2">
        <i class="iconfont icon-naozhong font-bold"></i>
         <span class="font-bold ml-2">24</span> hours left at this price!
      </div>
      <button class="w-full h-10 border-black border mt-4 cursor-pointer hover:bg-gray-200">Add to cart</button>
      <div class="text-xs text-gray-400 text-center mt-3">
        <div>30-Day Money-Back Guarantee</div>
        <div class="m-2">Full Lifetime Access</div>
      </div>
      <div class="flex justify-between items-center text-sm font-semibold mt-3">
        <button class="underline underline-offset-4 decoration-blue-600">Share</button>
        <button>Gift this course</button>
        <button>Apply Coupon</button>
      </div>
      <div class="border border-dashed flex items-center justify-between  p-2 my-4 text-xs">
        <div>
          <div class="text-gray-400"><span class="font-bold text-gray-600">LETSLEARNNOWPP</span> is applied</div>
          <div class="text-gray-400">Udemy coupon</div>
        </div>
        <div><i class="iconfont icon-close text-blue-600 text-2xl"></i></div>
      </div>
      <div class="border border-primary flex items-center">
        <input type="text" class="flex-1 px-4 outline-none bg-transparent" autocomplete="off" placeholder="Enter Coupon">
        <button class="bg-black text-white hover:opacity-85 w-20 py-2 ">Apply</button>
      </div>
    </div>
    <div v-if="activeName === 2" class="type2-container  px-4 py-4">
      <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg" alt="Udemy Business" width="141" height="24" loading="lazy">
      <div class="text-sm text-gray-600 py-2">Subscribe to this course and 26,000+ top‑rated Udemy courses for your organization.</div>
      <button class="bg-blue-500 cursor-pointer hover:bg-blue-700 mt-4 w-full h-12 text-white">Try Udemy Business</button>
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
  {label: 'Personal', type: 1 },
  {label: 'Teams', type: 2 },
])
const textList = ref([
  {text: 'For teams of 5 or more users' },
  {text: '26,000+ fresh & in-demand courses' },
  {text: 'Learning Engagement tools' },
  {text: 'SSO and LMS Integrations' },
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