<template>
  <!-- header 导航 -->
  <div>
    <div class="w-full bg-white px-6 items-center flex shadow-md z-[100] relative text-sm max-md:hidden">
      <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" width="91" height="31">
      <button class="text-gray-700 h-12 my-3 mx-4 cursor-pointer hover:text-blue-600">类别</button>
      <div class="flex flex-1 items-center rounded-full bg-light h-12 px-4 border border-[#000] mr-4 cursor-default">
        <i class="iconfont icon-search text-[24px] pr-3"></i>
        <input type="text" name="search" autocomplete="off" class="w-full outline-0 bg-transparent" placeholder="搜索任何内容">
      </div>
      <div class="flex items-center pl-5">
        <button class="h-12 my-3 mx-3 hover:text-blue-600 lg:block hidden">Udemy Business</button>
        <button class="h-12 my-3 mx-3 hover:text-blue-600 lg:block hidden">在Udemy上授课</button>
        <button class="text-black px-3 cursor-pointer hover:text-blue-600">
          <i class="iconfont icon-gouwuchekong text-[24px]"></i>
        </button>
        <button class=" py-2 px-4 cursor-pointer border border-black hover:bg-gray-200">请登录</button>
        <button class="py-2 px-4 cursor-pointer border border-black bg-black text-white hover:opacity-70 ml-3">注册</button>
        <button class="py-2 px-4 cursor-pointer border border-black hover:bg-gray-200 ml-3 sm:hidden md:block">
          <i class="iconfont icon-xuanzeyuyan text-[24px] font-medium"></i>
        </button>
      </div>
    </div>
    <div class="max-md:block hidden">
      <div class="bg-white px-6 py-6 items-center justify-between flex shadow-md z-[100] relative text-sm">
       <button class="w-[15%]">
          <i class="iconfont icon-caidan text-xl"></i>
       </button>
        <div class="flex-[1] pl-5 flex items-center justify-center">
          <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" width="91" height="31">
        </div>
        <div class="flex items-center w-[15%]">
          <button class="ml-6">
            <i class="iconfont icon-search text-xl"></i>
          </button>
          <button  class="ml-6">
            <i class="iconfont icon-gouwuchekong text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>