<template>
  <div class="card-container" :class="[className, showBorder ? 'show-border' : '']" :style="{ padding }">
    <div v-if="title" class="title font-semibold">{{title}}</div>
    <div :class="{'show-more-module': !showMoreVisible && showMoreBtn}">
      <div class="slot-content" :style="{maxHeight: showMoreVisible || !showMoreBtn ? '100%': maxHeight}">
        <slot></slot>
      </div>
    </div>
    <div v-if="showMoreBtn" class="show-more-btn flex items-center cursor-pointer" @click="handleShowMore">
      <span>{{ showMoreVisible ? '显示更少': '显示更多' }}</span>
      <el-icon v-if="showMoreVisible"><ElIconArrowUpBold /></el-icon>
      <el-icon v-else><ElIconArrowDownBold /></el-icon>
    </div>
  </div>
</template>
<script setup lang="ts">
const showMoreVisible = ref(false)

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  },
  showMoreBtn: {
    type: Boolean,
    default: false
  },
  showBorder: {
    type: Boolean,
    default: true
  },
  maxHeight: {
    type: [Number, String],
    default: '250px'
  },
  padding: {
    type: String,
    default: '24px'
  }
})


const handleShowMore = () => {
  showMoreVisible.value = !showMoreVisible.value
}
</script>

<style lang="scss" scoped>
  .card-container {
    position: relative;
    &.show-border {
      border: 1px solid #d1d7dc;
    }
    .title {
      font-size: 24px;
      padding-bottom: 16px;
    }
    .show-more-module {
      mask-image: linear-gradient(#ffffff, #ffffff, rgba(255, 255, 255, 0));
    }
    .show-more-btn {
      color: #5022c3;
      font-size: 14px;
    }
  }
</style>