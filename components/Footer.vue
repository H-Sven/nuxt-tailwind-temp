<template>
  <footer class="bg-[#2d2f31] w-full px-7 pb-7 max-lg:!mb-24">
    <div class="flex py-3 px-12 flex-row justify-between items-center flex-wrap border-b border-gray-600">
      <div class="text-lg font-bold flex-1 text-white"> Top companies choose <span class="text-blue-300 hover:underline cursor-pointer">Udemy Business</span> to build in-demand career skills. </div>
      <div class=" flex items-center flex-wrap *:mr-3 *:h-[44px] *:my-4 last:*:mr-0">
        <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" loading="lazy">
        <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" loading="lazy">
        <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" loading="lazy">
        <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" loading="lazy">
        <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" loading="lazy">
      </div>
    </div>
    <div class="pt-7 flex justify-between">
      <div class="py-4 px-12 flex-1 flex flex-wrap max-sm:!flex-col">
        <div class="text-white w-1/5 max-lg:!w-1/3 max-sm:!w-full" v-for="(item, index) in linkList" :key="index">
          <div class="mb-3 text-sm hover:underline cursor-pointer" v-for="(ele, i) in item" :key="i">{{ ele.label }}</div>
        </div>
      </div>
      <div>
        <button class="border text-white py-3 px-5 flex items-center">
          <i class="iconfont icon-xuanzeyuyan text-xl mr-1"></i>
          <span class="text-base">English</span>
        </button>
      </div>
    </div>
    <div class="flex py-12 px-12 flex-row justify-between items-center">
      <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" class="w-24">
      <span class="text-xs text-white">© 2024 Udemy, Inc.</span>
    </div>
  </footer>
</template>
<script setup>
const linkList = ref([
  [
    { url: '', label: 'Udemy Business'},
    { url: '', label: 'Teach on Udemy'},
    { url: '', label: 'Get the app'},
    { url: '', label: 'About us'},
    { url: '', label: 'Contact us'},
  ],
  [
    { url: '', label: 'Careers'},
    { url: '', label: 'Blog'},
    { url: '', label: 'Help and Support'},
    { url: '', label: 'Affiliate'},
    { url: '', label: 'Investors'},
  ],
  [
    { url: '', label: 'Terms'},
    { url: '', label: 'Privacy policy'},
    { url: '', label: 'Sitemap'},
    { url: '', label: 'Accessibility statement'},
  ]
])
</script>
<style lang="scss" scoped>

</style>