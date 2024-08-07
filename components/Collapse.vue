<template>
  <div>
    <div class="collapse-comp-container">
      <div
        class="collapse-item border border-[#d1d7dc] bg-[#f7f9fb]"
        v-for="(item, index) in showDataList" :key="index"
        @click="handleShowCollapse(index)"
      >
        <div class="header flex items-center justify-between px-6 py-4 cursor-pointer">
          <div class="icon flex items-center justify-center">
            <el-icon v-if="activeNames.includes(index)"><ElIconArrowUpBold /></el-icon>
            <el-icon v-else><ElIconArrowDownBold /></el-icon>
          </div>
          <div class="title flex-1 ml-3 font-semibold">{{ item.title }}</div>
          <div class="right-content text-sm">{{ item.total }}个讲座·{{ item.duration }}分钟</div>
        </div>
        <div class="content px-6 py-4 bg-white" v-if="activeNames.includes(index)">
          <div class="content-item flex items-center justify-between h-10" v-for="(ele, i) in item.content" :key="i">
            <div class="left-title">{{ ele.text }}</div>
            <div class="right-title">{{ ele.duration }}</div>
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