<template>
  <footer class="bg-[#2d2f31] w-full px-7 py-7 max-lg:!mb-24">
    <div class="flex justify-between">
      <div class="py-4 px-12 flex-1 flex flex-wrap max-sm:!flex-col">
        <div class="text-white w-1/5 max-lg:!w-1/3 max-sm:!w-full" v-for="(item, index) in linkList" :key="index">
          <div class="mb-3 text-sm hover:underline cursor-pointer" v-for="(ele, i) in item" :key="i">{{ ele.label }}</div>
        </div>
      </div>
      <div>
        <button class="border text-white py-3 px-5 flex items-center">
          <i class="iconfont icon-xuanzeyuyan text-xl mr-1"></i>
          <span class="text-base">中文（简体）</span>
        </button>
      </div>
    </div>

  </footer>
</template>
<script setup>
const linkList = ref([
  [
    { url: '', label: 'Udemy Business'},
    { url: '', label: '在 Udemy 上授课'},
    { url: '', label: '获取应用程序'},
    { url: '', label: '关于我们'},
    { url: '', label: '联系我们'},
  ],
  [
    { url: '', label: '职业生涯'},
    { url: '', label: '博客'},
    { url: '', label: '帮助和支持'},
    { url: '', label: '营销联盟'},
    { url: '', label: '投资者'},
  ],
  [
    { url: '', label: '条款'},
    { url: '', label: '隐私政策'},
    { url: '', label: '网站地图'},
    { url: '', label: '无障碍声明'},
  ]
])
</script>
<style lang="scss" scoped>

</style>