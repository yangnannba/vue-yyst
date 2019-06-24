import Vue from 'vue'
import Router from 'vue-router'
import movie from '@/components/movie/movie'
import music from '@/components/music/music'
import book from '@/components/book/book'
import pic from '@/components/pic/pic'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movie',
			component:movie
    },
    {
      path: '/music',
			component:music
    },
    {
      path: '/book',
			component:book
    },
    {
      path: '/pic',
			component:pic
    },
    {
      path: '/',
			redirect:"/movie"
    },
  ]
})
