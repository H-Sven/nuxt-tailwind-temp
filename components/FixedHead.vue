<template>
  <div class="header-fiexd block top-0 left-0 max-lg:!bottom-0 max-lg:!block max-lg:!top-auto max-sm:!bg-white bg-[#2d2f31] fixed z-50 w-full py-3 px-6 text-white text-sm">
    <div class="flex items-center justify-between">
      <div class="max-sm:!hidden">
        <p class="font-semibold text-base line-clamp-1 overflow-hidden">The Complete Python Bootcamp From Zero to Hero in Python</p>
        <StudentRating />
      </div>
      <div class="max-lg:!block hidden max-sm:!w-full max-sm:!ml-0 w-[47%] ml-3 overflow-hidden">
        <button class="bg-white w-full h-full text-black py-3 text-base max-sm:!text-white max-sm:!bg-blue-600">Try Personal Plan for free</button>
        <div class="text-center mt-1 text-gray-500">Starting at NT$410 per month after trial. Cancel anytime</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header-fiexd {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .08), 0 4px 12px rgba(0, 0, 0, .16);
  }
</style>