<template>
  <div class="card-container relative" :class="[className, showBorder ? 'show-border' : '']" :style="{ padding }">
    <div v-if="title" class="title text-2xl pb-4 font-semibold">{{title}}</div>
    <div :class="{'show-more-module': !showMoreVisible && showMoreBtn}">
      <div class="slot-content overflow-hidden" :style="{maxHeight: showMoreVisible || !showMoreBtn ? '100%': maxHeight}">
        <slot></slot>
      </div>
    </div>
    <div v-if="showMoreBtn" class="text-blue-500 text-sm flex items-center cursor-pointer" @click="handleShowMore">
      <span>{{ showMoreVisible ? '显示更少': '显示更多' }}</span>
      <i class="iconfont icon-jiantou" v-if="showMoreVisible"></i>
      <i class="iconfont icon-jiantou2" v-else></i>
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
    &.show-border {
      border: 1px solid #d1d7dc;
    }
    .show-more-module {
      mask-image: linear-gradient(#ffffff, #ffffff, rgba(255, 255, 255, 0));
    }
  }
</style>