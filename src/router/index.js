import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/page/home'
import Job from '@/page/job'
import JobDetail from '@/page/job-detail'
import App from '@/page/app'
import News from '@/page/news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/home',
      name: '首页',
      component: Home
    },{
      path: '/job',
      name: '求职',
      component: Job
    },{
      path: '/job-detail',
      name: '求职',
      component: JobDetail
    },{
      path: '/app',
      name: 'APP',
      component: App
    },{
      path: '/news',
      name: '新闻',
      component: News
    }]
})
