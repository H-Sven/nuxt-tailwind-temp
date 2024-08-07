<template>
  <div class="footer bg-[#2d2f31] w-full h-80 p-7">
    <div class="left-link flex flex-wrap w-[50%]">
      <div class="text-white w-[30%] mb-3 text-sm hover:underline cursor-pointer" v-for="(item, index) in linkList" :key="index">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
<script setup>
const linkList = ref([
  { url: '', label: 'Udemy Business'},
  { url: '', label: '在 Udemy 上授课'},
  { url: '', label: '获取应用程序'},
  { url: '', label: '关于我们'},
  { url: '', label: '联系我们'},
  { url: '', label: '职业生涯'},
  { url: '', label: '博客'},
  { url: '', label: '帮助和支持'},
  { url: '', label: '营销联盟'},
  { url: '', label: '投资者'},
  { url: '', label: '条款'},
  { url: '', label: '隐私政策'},
  { url: '', label: '网站地图'},
  { url: '', label: '无障碍声明'},
])
</script>
<style lang="scss" scoped>

</style>