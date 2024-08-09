<template>
  <div class="home-container">
    <header class="min-w-[600px]">
      <div v-if="showNotice" class="bg-[#eceba2] z-[100] relative h-20 flex flex-col items-center justify-center">
        <div>
          <span class="font-bold">Ready to get with the times?</span>
          <span> | Courses for as little as $22.99.</span>
        </div>
        <div class="font-bold">2 days left!</div>
        <i class="iconfont icon-close text-[24px] absolute top-3 right-3 cursor-pointer hover:text-blue-500" @click="showNotice = false"></i>
      </div>
      <Header />
      <FixedHead />
    </header>
    <main class="">
      <div class="bg-[#2d2f31] max-lg:!bg-white">
        <div class="sm:max-w-[600px] min-w-[600px] lg:max-w-[980px] xl:max-w-[1180px] mx-auto my-0 py-7 relative max-sm:p-4">
          <div class="lg:max-w-[600px] xl:max-w-[800px]  text-white max-lg:!text-normal">
            <div class="mx-12 lg-m mb-4 flex items-center text-[#c0c4fc] text-sm cursor-pointer">
              <div>Development</div>
              <i class="iconfont icon-jiantou1 text-white text-xs px-1"></i>
              <div>Programming Languages</div>
              <i class="iconfont icon-jiantou1 text-white text-xs px-1"></i>
              <div>Python</div>
            </div>
            <div class="relative border border-[#232323] w-full max-lg:block hidden my-4">
              <img src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg" class="w-full">
              <div class="absolute inset-0 width-full border-white border bg-gradient-to-t from-black/80 to-gray-300/0 opacity-85 flex flex-col items-center justify-center">
                <div class="rounded-[50%] bg-white w-16 h-16 flex items-center justify-center">
                  <i class="iconfont icon-bofang text-black text-[35px]"></i>
                </div>
                <div class="text-white mt-8 font-semibold"> Preview this course </div>
              </div>
            </div>
            <div class="max-lg:mx-0 mx-12 lg-m mb-4">
              <div class="text-white max-lg:text-black  max-lg:py-2 py-5 text-3xl font-bold">The Complete Python Bootcamp From Zero to Hero in Python</div>
              <div class="max-lg:text-black text-base mb-5 font-light">Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</div>
              <StudentRating />
              <div class="max-lg:text-black text-sm py-4">
                <span>Created by </span>
                <span class="underline text-blue-300 px-1">Jose Portilla</span>
                <span  class="underline text-blue-300 px-1">Pierian Training</span>
              </div>
              <div class="max-lg:text-black text-sm py-4 text-white flex items-center flex-wrap gap-y-3">
                <i class="iconfont icon-jinggao pr-2"></i>
                <span>Last updated：7/2023</span>
                <i class="iconfont icon-xuanzeyuyan px-2"></i>
                <span>English</span>
                <i class="iconfont icon-common_icon_fewcaptions px-2"></i>
                <span>English [Auto], Arabic [Auto]</span>
                <span class="underline text-blue-300 px-2">14 more</span>
              </div>
            </div>
          </div>
          <div class="max-lg:block hidden">
            <FixedCard  />
          </div>
          <div :class="scrollPosition > 5500 ? 'hidden' : scrollPosition > 520 ? 'fixed z-[100]' : 'absolute z-30'" class="top-6 xl:ml-[800px] lg:ml-[600px] max-lg:hidden block border boder-[#d1d7dc] w-[356px] bg-white pb-5 text-black ml-9">
            <div class="relative">
              <img src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg" class="w-full">
              <div class="absolute inset-0 width-full border-white border bg-gradient-to-t from-black/80 to-gray-300/0 opacity-85 flex flex-col items-center justify-center">
                <div class="rounded-[50%] bg-white w-16 h-16 flex items-center justify-center">
                  <i class="iconfont icon-bofang text-black text-[35px]"></i>
                </div>
                <div class="text-white mt-8 font-semibold"> Preview this course </div>
              </div>
            </div>
            <FixedCard />
          </div>
        </div>
      </div>
      <div class="min-w-[600px] sm:max-w-[600px] lg:max-w-[980px] xl:max-w-[1180px] mx-auto my-0 py-6 relative max-sm:p-4">
        <div class="xl:max-w-[800px] lg:max-w-[600px] max-lg:p-0 p-8">
          <Card title="What you'll learn" :showMoreBtn="true">
            <div class="text-sm text-black flex flex-wrap">
              <div class="my-2 flex items-start w-1/2"  v-for="(item, index) in data1" :key="index">
                <i class="iconfont icon-confirm"></i>
                <div class="item-text  ml-4 text-sm">{{ item.text }}</div>
              </div>
            </div>
          </Card>
          <Card title="Explore related topics" padding="0" :showBorder="false" class="mt-8">
            <div class="topic-navigation-module flex items-center">
              <div v-for="(item, index) in data2" :key="index" class="data2-item rounded-[30px] py-3 px-4  border border-black hover:bg-gray-200 font-medium mr-2 cursor-pointer">{{ item }}</div>
            </div>
          </Card>
          <Card title="This course includes:" padding="0" :showBorder="false" class="mt-8">
            <div class="flex flex-wrap">
              <div class="flex items-start w-1/2 mb-2"  v-for="(item, index) in data3" :key="index">
                <i class="iconfont" :class="item.icon"></i>
                <div class="item-text ml-4 text-sm">{{ item.text }}</div>
              </div>
            </div>
          </Card>
          <Card class="mt-8">
            <div class="font-medium fz-16">Top companies offer this course to their employees</div>
            <div class="font-light fz-14">
              <span>This course was selected for our collection of top-rated courses trusted by businesses worldwide. </span>
              <a href="javascript:;" class="underline ml-2 text-blue-600 cursor-pointer"> Learn more</a>
              <div class="img-list flex items-center justify-between mt-2">
                <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="Nasdaq" height="38" width="115" loading="lazy">
                <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="Volkswagen" height="38" width="44" loading="lazy">
                <img src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="Box" height="38" width="67" loading="lazy">
                <img src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="NetApp" height="38" width="115" loading="lazy">
                <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="Eventbrite" height="38" width="115" loading="lazy">
              </div>
            </div>
          </Card>
          <div class="bg-[#f7f9fa] mt-6 p-4 flex text-sm items-center justify-between">
            <div class="flex-[0.7]">
              <div class="font-bold text-2xl">Coding Exercises</div>
              <div class="text-sm text-gray-400 py-5">This course includes our updated coding exercises so you can practice your skills as you learn.</div>
              <button class="underline cursor-pointer text-blue-600">查看演示</button>
            </div>
            <div class="flex-1 ml-6">
              <img src="https://www.udemy.com/staticx/udemy/js/webpack/coding-exercises-demo-preview-desktop.2957bed27c3ae43a02824b61ad9cda03.png" alt="">
            </div>
          </div>
          <Card title="Course content" padding="0" :showBorder="false" class="mt-8">
            <div class="course-container">
              <div class="c-header flex justify-between items-center mb-2">
                <div class="text-sm">{{ collapseList.length }} sections • 156 lectures • 22h 13m total length</div>
                <div class="cursor-pointer text-sm text-blue-400 hover:text-blue-500" @click="handleOpenCollapse">{{ !isShowAll ? 'Expand all sections' : 'Collapse all sections' }}</div>
              </div>
              <Collapse :data="collapseList" ref="CollapseRef" :showMax="4" />
            </div>
          </Card>
          <Card title="Requirements" padding="0" :showBorder="false" class="mt-8">
            <div class="flex items-center">
              <span class="text-base">Access to a computer with an internet connection.</span>
            </div>
          </Card>
          <Card title="Description" padding="0" :showMoreBtn="true" :showBorder="false" class="mt-8">
            <div>
              <div>Become a Python Programmer and learn one of employer's most requested skills of 2023!</div>
              <div v-for="(item, index) in 10" :key="index">This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python</div>
            </div>
          </Card>
          <Card title="Featured review" class="mt-10">
            <div class="comment-infot">
              <div class="user-info  flex items-star">
                <img src="https://img-c.udemycdn.cn/user/200_H/101610246_6b5d_3.jpg" class="mr-4" alt="Ken K." width="64" height="64" loading="lazy">
                <div class="user-right">
                  <div class="font-semibold">Ken K.</div>
                  <div class="text-sm text-gray-600">9 courses</div>
                  <div class="text-sm text-gray-600">2 reviews</div>
                </div>
              </div>
              <div class="rate flex items-center py-2">
                <i class="iconfont icon-icon- text-[#eebd4c]" v-for="(item, index) in 5" :key="index"></i>
                <span>2 years ago</span>
              </div>
              <div class="inter text-sm">
                Everything on this course is a goldmine except for the GUI since it's specific for Jupyter Notebooks and it's missing the video for GUI Events. Still it was a nice introduction to GUI. Don't let that disappoint you though. THIS IS A MUST HAVE COURSE. I have already recommended it to few people and always will. Do yourself a favor and do this course if you want to learn Python 3. Thank you so much for this course, Jose-sensei!!
              </div>
              <div class="pt-3 pb-2 text-xs">Was this review helpful?</div>
              <div class="flex items-center cursor-pointer">
                <button class="mr-3 hover:text-blue-500"><i class="iconfont icon-dianzan text-[20px]"></i></button>
                <button class="mr-3 hover:text-blue-500"><i class="iconfont icon-diancai text-[20px]"></i></button>
                <button class="underline text-sm hover:text-blue-500">Report</button>
              </div>
            </div>
          </Card>
          <Card title="Students also bought" padding="0" :showBorder="false" class="mt-10">
            <StudentBuyItem v-for="(item, index) in showMoreStudentBuyList" :key="index" />
            <button class="border border-[#232323] w-full p-2  mt-4 text-dark font-bold hover:bg-gray-200" @click="moreBuyList()">{{ showMoreStudentBuy ? 'Show less':'Show more' }}</button>
          </Card>
          <Card title="Frequently Bought Together" class="mt-10">
            <div v-for="(item, index) in 3" :key="index" class="mb-3 flex items-start justify-between">
              <div class="w-64 h-36 border">
                <img src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg">
              </div>
              <div class="px-3">
                <div class="text-base font-bold line-clamp-2">The Complete Python Bootcamp From Zero to Hero in Python</div>
                <div class="py-1 text-xs text-gray-400">Jose Portilla, Pierian Training</div>
                <div class="py-1">
                  <span class="text-red-600 pr-1">4.6</span>
                  <i class="iconfont icon-icon- text-red-600" v-for="(item, index) in 4" :key="index"></i>
                  <i class="iconfont icon-pingfenti text-red-600"></i>
                  <a href="javascript:;" class="text-xs max-lg:text-black text-gray-600 px-1 underline">(422323 ratings)</a>
                </div>
              </div>
              <div>
                <div class="text-base font-bold">NT$790</div>
                <div class="text-sm text-gray-400 line-through">NT$4199</div>
              </div>
            </div>
            <div class="flex items-center justify-between mt-5">
              <div>
                <span class="text-xl">Total：</span>
                <span class="text-xl font-bold mr-2">NT$1,500</span>
                <span class="text-xl line-through text-gray-500 font-light">NT$8,370</span>
              </div>
              <button class="py-3 px-4 bg-blue-500 text-white hover:opacity-85 cursor-pointer">Add all to cart</button>
            </div>
          </Card>
          <div class="mt-8">
            <div class="text-2xl pb-4 font-semibold">Instructors</div>
            <Card padding="0" :showBorder="false" :showMoreBtn="true" maxHeight="350px">
              <div class="underline text-blue-700 font-bold text-xl">Jose Portilla</div>
              <div class="text-base text-gray-500">Head of Data Science at Pierian Training</div>
              <div class="mt-3 flex items-start">
                <div class="w-[112px] h-[112px] rounded-[50%] overflow-hidden">
                  <img src="https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg" alt="">
                </div>
                <div class="text-sm ml-4">
                  <div class="mb-2"><i class="iconfont icon-icon- mr-1"></i> 4.6 Instructor Rating</div>
                  <div class="mb-2"><i class="iconfont icon-icon- mr-1"></i>1,194,559 Reviews</div>
                  <div class="mb-2"><i class="iconfont icon-icon- mr-1"></i>3,958,447 Students</div>
                  <div class="mb-2"><i class="iconfont icon-icon- mr-1"></i>87 Courses</div>
                </div>
              </div>
              <div class="text-sm mt-2">
                Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science, Machine Learning and Python Programming. He has publications and patents in various fields such as microfluidics, materials science, and data science. Over the course of his career he has developed a skill set in analyzing data and he hopes to use his experience in teaching and data science to help other people learn the power of programming, the ability to analyze data, and the skills needed to present the data in clear and beautiful visualizations. Currently he works as the Head of Data Science for Pierian Training and provides in-person data science and python programming training courses to employees working at top companies, including General Electric, Cigna, SalesForce, Starbucks, McKinsey and many more. Feel free to check out the website link to find out more information about training offerings.
              </div>
            </Card>
            <Card padding="0" :showBorder="false" class="mt-8">
              <div class="underline text-blue-700 font-bold text-xl">Pierian Training</div>
              <div class="text-base text-gray-500">Data Science and Machine Learning Training</div>
              <div class="mt-3 flex items-start">
                <div class="w-[112px] h-[112px] rounded-[50%] overflow-hidden">
                  <img src="https://img-c.udemycdn.com/user/200_H/265589972_dca1.jpg" alt="">
                </div>
                <div class="text-sm ml-4">
                  <div class="mb-2"><i class="iconfont icon-icon- mr-1"></i> 4.6 Instructor Rating</div>
                  <div class="mb-2"><i class="iconfont icon-icon- mr-1"></i>1,194,559 Reviews</div>
                  <div class="mb-2"><i class="iconfont icon-icon- mr-1"></i>3,958,447 Students</div>
                  <div class="mb-2"><i class="iconfont icon-icon- mr-1"></i>87 Courses</div>
                </div>
              </div>
              <div class="text-sm mt-2">
                Pierian Training stands as a premier provider in the realms of Data Science and Machine Learning education, offering both in-person and virtual instructor-led training tailored for enterprises. Explore our comprehensive profile to discover a wide range of courses designed to enhance your professional skills and organizational capabilities. Feel free to contact us if you have any questions in the link on our profile!
              </div>
            </Card>
          </div>
          <div class="mt-8">
            <div class="mb-4 font-bold text-2xl flex items-center">
              <i class="mr-2 iconfont icon-icon- text-2xl text-red-600"></i>
              <span>4.6 course rating</span>
              <span class="mx-2 w-2 h-2 bg-red-600 rounded-[50%]"></span>
              <span>514K ratings</span>
            </div>
            <div class="flex flex-wrap justify-between">
              <div v-for="(item, index) in 4" :key="index" class="w-[46%] pt-3 pb-4 mr-3 border-t border-gray-200">
                <div class="flex mb-4">
                  <div class="w-10 h-10 bg-black mr-3 text-white rounded-full flex items-center justify-center">AI</div>
                  <div class="flex-1 flex items-start flex-col justify-center">
                    <div class="font-bold">Aishwarya.s</div>
                    <div class="text-xs text-[#6a6f73] flex items-center">
                      <i class="iconfont icon-icon- text-red-600" v-for="(item, index) in 5" :key="index"></i>
                      <span>6 days ago</span>
                    </div>
                  </div>
                  <div>
                    <i class="iconfont icon-sangediandian"></i>
                  </div>
                </div>
                <div class="mb-3 text-sm text-gray-500">Its going well so far ,I hope I will be able to understand and learn more about python , so far it was beginner friendly</div>
                <button class="text-sm font-medium">Show more</button>
                <div class="flex items-center mt-5">
                  <span class="text-xs text-gray-500">Helpful?</span>
                  <i class="iconfont icon-dianzan px-1 cursor-pointer hover:text-blue-500"></i>
                  <i class="iconfont icon-diancai px-1 cursor-pointer hover:text-blue-500"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8">
            <div class="text-2xl font-bold pb-2">More Courses by <span class="text-blue-600">Jose Portilla</span></div>
            <div class="flex justify-between flex-wrap">
              <div v-for="(item, index) in 3" :key="index" class="w-[31%]">
                <div class="border h-24">
                  <img src="https://img-c.udemycdn.com/course/240x135/762616_7693_3.jpg" class="w-full h-full" alt="">
                </div>
                <div class="font-bold text-base line-clamp-2 mt-2">The Complete SQL Bootcamp: Go from Zero to Hero</div>
                <div class="text-xs text-gray-400">Jose Portilla, Pierian Training</div>
                <div class="py-1">
                  <span class="text-black font-medium text-sm pr-1">4.6</span>
                  <i class="iconfont icon-icon- text-red-600" v-for="(item, index) in 4" :key="index"></i>
                  <i class="iconfont icon-pingfenti text-red-600"></i>
                  <a href="javascript:;" class="text-xs max-lg:text-black text-gray-600 px-1 underline">(4233)</a>
                </div>
                <div class="text-xs text-gray-400">
                  <span>9 total hours</span>
                  <span>·</span>
                  <span>83 lectures</span>
                  <span>·</span>
                  <span>All Levels</span>
                </div>
                <div class="pt-2">
                  <span class="font-bold text-lg">NT$690</span>
                  <span class="line-through text-base ml-1 text-gray-500">NT$4399</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
const scrollPosition = ref(0)
const handleScroll = () => {
  // 更新滚动位置
  scrollPosition.value = window.scrollY;
  console.log('滚动位置:', scrollPosition.value);
}
onMounted(() => {
  // 组件挂载后添加滚动事件监听
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  // 组件卸载前移除滚动事件监听
  window.removeEventListener('scroll', handleScroll);
});
const showNotice = ref(true)

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

const data2 = ref(['Python', 'Programming Languages', 'Development'])
const data3 = ref([
  {text: '22 hours on-demand video', icon: 'icon-common_icon_fewcaptions' },
  {text: 'Access on mobile and TV', icon: 'icon-common_icon_fewcaptions' },
  {text: '19 coding exercises', icon: 'icon-common_icon_fewcaptions' },
  {text: 'Full lifetime access', icon: 'icon-common_icon_fewcaptions' },
  {text: '15 articles', icon: 'icon-common_icon_fewcaptions' },
  {text: 'Certificate of completion', icon: 'icon-common_icon_fewcaptions' },
])

const collapseList = ref([
  {
    title: 'Course Overview',
    content: [
      { text: 'Auto-Welcome Message', content: ['Welcome to the Complete Python Bootcamp'], showContent: false, duration: '00:44' },
      { text: 'Course Introduction', content: ['Welcome to the Complete Python Bootcamp'],showContent: false, duration: '00:44' },
      { text: 'Course Curriculum Overview', content: ['Welcome to the Complete Python Bootcamp'],showContent: false, duration: '00:44' },
      { text: 'Why Python?', content: ['Welcome to the Complete Python Bootcamp'], showContent: false, duration: '00:44' },
      { text: 'Course FAQs', content: ['Welcome to the Complete Python Bootcamp'], showContent: false, duration: '00:44' },
    ],
    total: 5,
    duration: 19
  },
  {
    title: 'Python Setup',
    content: [
      { text: 'Auto-Welcome Message', content: ['Welcome to the Complete Python Bootcamp'], duration: '00:44' },
      { text: 'Course Introduction', content: ['Welcome to the Complete Python Bootcamp'],duration: '00:44' },
      { text: 'Course Curriculum Overview', content: ['Welcome to the Complete Python Bootcamp'],duration: '00:44' },
      { text: 'Why Python?', content: ['Welcome to the Complete Python Bootcamp'], duration: '00:44' },
      { text: 'Course FAQs', content: ['Welcome to the Complete Python Bootcamp'], duration: '00:44' },
    ],
    total: 5,
    duration: 19
  },
  {
    title: 'Python Object and Data Structure Basics',
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
    title: 'Python Comparison Operators',
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
    title: 'Python Statements',
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
    title: 'Methods and Functions',
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
    title: 'Milestone Project - 1',
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
    title: 'Object Oriented Programming',
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
    title: 'Modules and Packages',
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
    title: 'Errors and Exceptions Handling',
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
    title: 'Milestone Project - 2',
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
    title: 'Python Decorators',
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

const showMoreStudentBuyList = ref(6)
const showMoreStudentBuy = ref(false)
const moreBuyList = () => {
  showMoreStudentBuy.value = !showMoreStudentBuy.value
  showMoreStudentBuyList.value = showMoreStudentBuy.value ? 10 : 6
}
</script>
