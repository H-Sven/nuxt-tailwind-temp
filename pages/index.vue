<template>
  <div class="home-container">
    <div class="w-full fixed-notice bg-[#eceba2] z-[100] relative h-20 flex flex-col items-center justify-center">
      <div>
        <span class="font-bold">从各种教学风格中学习</span>
        <span> | 课程 NT$320 起。</span>
      </div>
      <div class="font-bold">2 days left!</div>
    </div>
    <div class="header-search-box z-[100] relative h-20 px-6 w-full flex bg-white items-center">
      <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" width="91" height="31" class="logo">
      <el-popover placement="bottom-start" :width="400">
      <template #reference>
        <button class="text-blue-400 px-5 cursor-pointer hover:text-blue-600">类别</button>
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
        <button class="text-black px-3 cursor-pointer hover:text-blue-600">Udemy Business</button>
        <button class="text-black px-3 cursor-pointer hover:text-blue-600">在Udemy上授课</button>
        <div class="text-black px-3 cursor-pointer hover:text-blue-600"><el-icon><ElIconShoppingCart /></el-icon></div>
        <button class="py-2 px-4 cursor-pointer border border-black hover:bg-gray-200">请登录</button>
        <button class="py-2 px-4 cursor-pointer border border-black bg-black text-white hover:opacity-70 ml-3">注册</button>
        <button class="py-2 px-4 cursor-pointer border border-black hover:bg-gray-200 ml-3"><el-icon><ElIconLocationFilled /></el-icon></button>
      </div>
    </div>
    <div class="header-fiexd top-0 bg-[#2d2f31] fixed z-50 w-full py-3 px-6 text-white text-sm">
      <p class="font-semibold">The Complete Python Bootcamp From Zero to Hero in Python</p>
      <StudentRating />
    </div>
    <div class="banner-container h-[390px] bg-[#2d2f31] w-full py-8">
      <div class="inner-container w1200 text-white">
        <div class="max-w55p">
          <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item>开发</el-breadcrumb-item>
            <el-breadcrumb-item>编程语言</el-breadcrumb-item>
            <el-breadcrumb-item>Python</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <h3 class="slogan py-5 text-3xl font-semibold max-w55p">The Complete Python Bootcamp From Zero to Hero in Python</h3>
        <div class="text text-xl mb-5 max-w55p font-light">Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</div>
        <div class="max-w55p">
          <StudentRating />
        </div>
      </div>
    </div>
    <div class="course-body-container relative w-full">
      <div class="course-main-box mt-8 flex items-start w1200">
        <div class="course-content max-w55p">
          <Card title="你将会学到的" :showMoreBtn="true" className="margin-bottom-32">
            <div class="text-sm text-black flex flex-wrap">
              <div class="my-2 flex items-start w-1/2"  v-for="(item, index) in data1" :key="index">
                <el-icon class="mt-1"><ElIconSelect /></el-icon>
                <div class="item-text  ml-4 text-sm">{{ item.text }}</div>
              </div>
            </div>
          </Card>
          <Card title="浏览相关主题" padding="0" :showBorder="false" class="margin-bottom-32">
            <div class="topic-navigation-module flex items-center">
              <div v-for="(item, index) in data2" :key="index" class="data2-item rounded-[30px] py-3 px-4  border border-black hover:bg-gray-300 font-medium mr-2 cursor-pointer">{{ item }}</div>
            </div>
          </Card>
          <Card title="本课程包括：" padding="0" :showBorder="false" class="margin-bottom-32">
            <div class="flex flex-wrap">
              <div class="flex items-start w-1/2"  v-for="(item, index) in data3" :key="index">
                <el-icon>
                  <component :is="item.icon" />
                </el-icon>
                <div class="item-text ml-4 text-sm">{{ item.text }}</div>
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
            <div class="comment-infot">
              <div class="user-info  flex items-star">
                <img src="https://img-c.udemycdn.cn/user/200_H/101610246_6b5d_3.jpg" class="mr-4" alt="Ken K." width="64" height="64" loading="lazy">
                <div class="user-right">
                  <div class="username font-semibold">Ken K.</div>
                  <div class="">9 门课程</div>
                  <div class="">2 条评论</div>
                </div>
              </div>
              <div class="rate flex items-center">
                <el-rate disabled model-value="5" />
                <span>3年前</span>
              </div>
              <div class="inter text-sm">
                Everything on this course is a goldmine except for the GUI since it's specific for Jupyter Notebooks and it's missing the video for GUI Events. Still it was a nice introduction to GUI. Don't let that disappoint you though. THIS IS A MUST HAVE COURSE. I have already recommended it to few people and always will. Do yourself a favor and do this course if you want to learn Python 3. Thank you so much for this course, Jose-sensei!!
              </div>
            </div>
          </Card>
          <Card title="学生还购买了" padding="0" :showBorder="false" class="margin-bottom-32">
            <StudentBuyItem v-for="(item, index) in 6" :key="index" />
          </Card>
        </div>
        <FixedCard />
      </div>
    </div>
    <Footer />
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
    .header-search-box {
      :deep .el-input__wrapper {
        border-radius: 20px;
        border-color: #2d2f31;
      }
    }
    .header-fiexd {
      box-shadow: 0 2px 4px rgba(0, 0, 0, .08), 0 4px 12px rgba(0, 0, 0, .16);
    }
  }
</style>
