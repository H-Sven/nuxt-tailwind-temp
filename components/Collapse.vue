<template>
  <div>
    <div class="collapse-comp-container">
      <div
        class="collapse-item border border-[#d1d7dc] bg-[#f7f9fb]"
        v-for="(item, index) in showDataList" :key="index"
      >
        <div class="header flex items-center justify-between px-6 py-4 cursor-pointer"  @click.stop="handleShowCollapse(index)">
          <div class="icon flex items-center justify-center">
            <i v-if="activeNames.includes(index)" class="iconfont icon-jiantou"></i>
            <i v-else class="iconfont icon-jiantou2"></i>
          </div>
          <div class="title flex-1 ml-3 font-semibold">{{ item.title }}</div>
          <div class="right-content text-sm">{{ item.total }}个讲座·{{ item.duration }}分钟</div>
        </div>
        <div class="content px-6 py-4 bg-white" v-if="activeNames.includes(index)">
          <div class="mb-3" v-for="(ele, i) in item.content" :key="i">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <i class="iconfont icon-common_icon_fewcaptions"></i>
                <div class="ml-2 text-sm">{{ ele.text }}</div>
                <div class="ml-2 text-gray-400 cursor-pointer" @click.stop="ele.showContent = !ele.showContent">
                  <i v-if="!ele.showContent" class="iconfont icon-xiangxiazhankai"></i>
                  <i v-else class="iconfont icon-shouqi"></i>
                </div>
              </div>
              <div class="text-sm text-gray-400">{{ ele.duration }}</div>
            </div>
            <div v-if="ele.showContent" class="text-gray-400 text-sm pl-5 my-2">
              <div v-for="(eleitem, k) in ele.content" :key="k">{{ eleitem }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border border-[#232323] bg-white h-10 w-full flex items-center justify-center mt-4 cursor-pointer" @click="isShowAll = true" v-if="!isShowAll && data.length - showMax > 0">还有{{ data.length - showMax }}个章节</div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: []
  },
  showMax: {
    type: Number,
    default: 0
  }
})
const showDataList = computed(()=> {
  return isShowAll.value ? props.data : props.data.slice(0, props.showMax)
})
const activeNames = ref([0])

const handleShowCollapse = (index) => {
  if (activeNames.value.includes(index)) {
    activeNames.value = activeNames.value.filter((item) => index !== item)
  } else {
    activeNames.value = [...activeNames.value, index]
  }
}

const openAll = (status) => {
  if(status) {
    activeNames.value = []
  } else {
    activeNames.value = props.data.map((_, index) => index)
  }
}
const isShowAll = ref(false)

defineExpose({
  openAll
})

</script>
<style lang="scss" scoped>
.collapse-item {
  border-bottom-width: 0px;
  &:last-child {
    border-bottom-width: 1px;
  }
}
</style>