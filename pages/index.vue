<template>
  <div class="home-container">
    <div class="w-full fixed-notice flex flex-col items-center z-50 justify-center">
      <div>
        <span class="font-bold">从各种教学风格中学习</span>
        <span> | 课程 NT$320 起。</span>
      </div>
      <div class="font-bold">2 days left!</div>
    </div>
    <div class="header-search-box w-full flex bg-white z-50 items-center">
      <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" width="91" height="31" class="logo">
      <el-popover placement="bottom-start" :width="400">
      <template #reference>
        <el-button link class="header-link-btn category">类别</el-button>
      </template>
      <div>sdsd</div>
      <div>sdsd</div>
      <div>sdsd</div>
      <div>sdsd</div>
      <div>sdsd</div>
      <div>sdsd</div>
      </el-popover>
      <div  class="rounded-lg flex-auto">
        <el-input v-model="searchValue" style="border-radius: 20px;width: 100%; height: 44px;" placeholder="搜索如何内容">
          <template #prefix>
            <el-icon><ElIconSearch /></el-icon>
          </template>
        </el-input>
      </div>
      <div class="right-box flex items-center pl-5">
        <div class="header-link-btn px-3 cursor-pointer">Udemy Business</div>
        <div class="header-link-btn px-3 cursor-pointer">在Udemy上授课</div>
        <div class="header-link-btn px-3 cursor-pointer"><el-icon><ElIconShoppingCart /></el-icon></div>
        <button class="header-right-btn header-right-login px-3 cursor-pointer border border-solid">请登录</button>
        <button class="header-right-btn header-right-register px-3 cursor-pointer  border border-solid ml-2">注册</button>
        <button class="header-right-btn px-3 cursor-pointer border border-solid ml-2"><el-icon><ElIconLocationFilled /></el-icon></button>
      </div>
    </div>
    <div class="header-fiexd sticky z-50 w-full">
      <p class="font-semibold">The Complete Python Bootcamp From Zero to Hero in Python</p>
      <StudentRating />
    </div>
    <div class="banner-container w-full">
      <div class="inner-container w1200">
        <div class="max-w55p">
          <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item>开发</el-breadcrumb-item>
            <el-breadcrumb-item>编程语言</el-breadcrumb-item>
            <el-breadcrumb-item>Python</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <h3 class="slogan font-semibold max-w55p">The Complete Python Bootcamp From Zero to Hero in Python</h3>
        <div class="text max-w55p font-light">Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</div>
        <div class="max-w55p">
          <StudentRating />
        </div>
      </div>
    </div>
    <div class="course-body-container w-full">
      <div class="course-main-box w1200">
        <div class="course-content max-w55p">
          <Card title="你将会学到的" :showMoreBtn="true" className="margin-bottom-32">
            <div class="data1-list flex flex-wrap">
              <div class="data1-item flex items-start w-1/2"  v-for="(item, index) in data1" :key="index">
                <el-icon><ElIconSelect /></el-icon>
                <div class="item-text text-sm">{{ item.text }}</div>
              </div>
            </div>
          </Card>
          <Card title="浏览相关主题" padding="0" :showBorder="false" class="margin-bottom-32">
            <div class="topic-navigation-module flex items-center">
              <div v-for="(item, index) in data2" :key="index" class="data2-item font-medium mr-2 cursor-pointer">{{ item }}</div>
            </div>
          </Card>
          <Card title="本课程包括：" padding="0" :showBorder="false" class="margin-bottom-32">
            <div class="data1-list flex flex-wrap">
              <div class="data1-item flex items-start w-1/2"  v-for="(item, index) in data3" :key="index">
                <el-icon>
                  <component :is="item.icon" />
                </el-icon>
                <div class="item-text text-sm">{{ item.text }}</div>
              </div>
            </div>
          </Card>
          <Card class="margin-bottom-32">
            <div class="font-medium fz-16">顶级公司为他们的员工提供这门课程</div>
            <div class="font-light fz-14">
              <span>此课程被选入我们受全球企业信赖的最受好评的课程系列。</span>
              <a href="javascript:;" class="underline ml-2">了解更多</a>
              <div class="img-list flex items-center justify-between mt-2">
                <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="Nasdaq" height="38" width="115" loading="lazy">
                <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="Volkswagen" height="38" width="44" loading="lazy">
                <img src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="Box" height="38" width="67" loading="lazy">
                <img src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="NetApp" height="38" width="115" loading="lazy">
                <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="Eventbrite" height="38" width="115" loading="lazy">
              </div>
            </div>
          </Card>
          <Card title="课程内容" padding="0" :showBorder="false" class="margin-bottom-32">
            <div class="course-container">
              <div class="c-header flex justify-between items-center mb-2">
                <div class="text-sm">{{ collapseList.length }} 个章节 • 156 个讲座 • 总时长 22 小时 13 分钟</div>
                <div class="cursor-pointer text-blue-400 hover:text-blue-500" @click="handleOpenCollapse">{{ !isShowAll ? '展开所有章节' : '收起所有章节' }}</div>
              </div>
              <Collapse :data="collapseList" ref="CollapseRef" :showMax="4" />
            </div>
          </Card>
          <Card title="要求" padding="0" :showBorder="false" class="margin-bottom-32">
            <div class="flex items-center">
              <el-icon><ElIconWarningFilled /></el-icon>
              <span class="ml-3">Access to a computer with an internet connection.</span>
            </div>
          </Card>
          <Card title="说明" padding="0" :showMoreBtn="true" :showBorder="false" class="margin-bottom-32">
            <div class="">
              <p>Become a Python Programmer and learn one of employer's most requested skills of 2023!</p>
              <p>This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.</p>
              <p>This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.</p>
              <p>This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.</p>
              <p>This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.</p>
              <p>This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.</p>
              <p>This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.</p>
              <p>This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.</p>
              <p>This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.</p>
              <p>This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.</p>
              <p>This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.</p>
              <p>This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.</p>
              <p>This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.</p>
              <p>This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.</p>
              <p>This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.</p>
              <p>This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.</p>
              <p>This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.</p>
            </div>
          </Card>
          <Card title="精选评论" class="margin-bottom-32">
            <div class="comment-info">
              
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ArrowRight, Notebook,FolderDelete,Mic,MapLocation ,Apple,Lollipop} from '@element-plus/icons-vue'

const searchValue = ref('')

const data1 = ref([
  {text: 'You will learn how to leverage the power of Python to solve tasks.'},
  {text: 'You will learn how to leverage the power of Python to solve tasks.'},
  {text: 'You will learn how to leverage the power of Python to solve tasks.'},
  {text: 'You will learn how to leverage the power of Python to solve tasks.'},
  {text: 'You will learn how to leverage the power of Python to solve tasks.'},
  {text: 'You will learn how to leverage the power of Python to solve tasks.'},
  {text: 'You will learn how to leverage the power of Python to solve tasks.'},
  {text: 'You will learn how to leverage the power of Python to solve tasks.'},
  {text: 'You will learn how to leverage the power of Python to solve tasks.'},
  {text: 'You will learn how to leverage the power of Python to solve tasks.'},
  {text: 'You will learn how to leverage the power of Python to solve tasks.'},
  {text: 'You will learn how to leverage the power of Python to solve tasks.'},
])

const data2 = ref(['Python', '编程语言', '开发'])
const data3 = ref([
  {text: '22 小时 长的随选视频', icon: Notebook },
  {text: '在移动设备和电视上观看', icon: FolderDelete },
  {text: '19 个代码练习', icon: MapLocation },
  {text: '完整的永久访问权', icon: Mic },
  {text: '15 篇文章', icon: Lollipop },
  {text: '结业证书', icon: Apple },
])

const collapseList = ref([
  {
    title: 'Course Overview',
    content: [
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
    ],
    total: 5,
    duration: 19
  },
  {
    title: 'Course Overview',
    content: [
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
    ],
    total: 5,
    duration: 19
  },
  {
    title: 'Course Overview',
    content: [
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
    ],
    total: 5,
    duration: 19
  },
  {
    title: 'Course Overview',
    content: [
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
    ],
    total: 5,
    duration: 19
  },
  {
    title: 'Course Overview',
    content: [
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
    ],
    total: 5,
    duration: 19
  },
  {
    title: 'Course Overview',
    content: [
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
    ],
    total: 5,
    duration: 19
  },
  {
    title: 'Course Overview',
    content: [
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
    ],
    total: 5,
    duration: 19
  },
  {
    title: 'Course Overview',
    content: [
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
      { text: 'Auto-Welcome Message', duration: '00:44' },
    ],
    total: 5,
    duration: 19
  },
])
const CollapseRef = ref(null)
const isShowAll = ref(false)
const handleOpenCollapse = () => {
  CollapseRef.value.openAll(isShowAll.value)
  isShowAll.value = !isShowAll.value
}
</script>

<style lang="scss" scoped>
  .home-container {
    .fixed-notice {
      height: 77px;
      background-color: #eceba2;
    }
    .header-search-box {
      height: 72px;
      padding:  0 24px;
      .header-link-btn {
        &:hover {
          color: blue;
        }
      }
      .category {
        padding: 0 20px;
      }
      :deep .el-input__wrapper {
        border-radius: 20px;
        border-color: #2d2f31;
      }
      .right-box {
        .header-right-btn {
          padding: 6px 16px;
          border-color: #2d2f31;
          &.header-right-login {
            &:hover {
              background-color: #e4e7ea;
            }
          }
          &.header-right-register {
            background-color: #2d2f31;
            color: #fff;
            &:hover {
              background-color: #3f4143;
            }
          }
        }
      }
    }
    .header-fiexd {
      top: 0;
      background-color: #2d2f31;
      padding:  10px 24px;
      color: #fff;
      .student {
        font-size: 12px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .08), 0 4px 12px rgba(0, 0, 0, .16);
      }
    }
    .banner-container {
      background-color: #2d2f31;
      height: 390px;
      padding: 32px 0;
      .inner-container {
        color: #fff;
        .slogan {
          padding: 20px 0;
          font-size: 30px;
        }
        .text {
          font-size: 20px;
          margin-bottom: 20px;
        }
        
      }
    }
    .course-body-container {
      .course-main-box {
        margin-top: 32px;
      }
    }
    .data1-list {
      color: #2d2f31;
      font-size: 14px;
      .data1-item {
        margin-bottom: 16px;
        .el-icon {
          margin-top: 4px;
        }
        .item-text {
          margin-left: 16px;
          display: -webkit-box !important;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: normal;
        }
      }
    }
    .topic-navigation-module {
      .data2-item {
        padding: 10px 15px;
        border-radius: 30px;
        border: 1px solid #2d2f31;
        &:hover {
          background-color: #e4e7ea;
        }
      }
    }
    .course-container {

    }
  }
</style>
