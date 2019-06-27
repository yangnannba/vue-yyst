import Vue from 'vue'
import Router from 'vue-router'

import movie from '@/components/movie/movie'
import music from '@/components/music/music'
import book from '@/components/book/book'
import pic from '@/components/pic/pic'

import MovieList from '@/components/movie/MovieList'
import MovieDetails from '@/components/movie/MovieDetails'

import BookList from '@/components/book/BookList'
import BookDetails from '@/components/book/BookDetails'

import PicList from '@/components/pic/PicList'
import PicDetails from '@/components/pic/PicDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movie',
			component:movie,
			redirect:"/movie/movielist",
			children:[
				{path:"movielist",component:MovieList},
				{path:"moviedetails/:id",name:"moviedetails",component:MovieDetails}		
			]
    },
    {
      path: '/music',
			component:music
    },
    {
      path: '/book',
			component:book,
			redirect:"/book/booklist",
			children:[
				{path:"booklist",component:BookList},
				{path:"bookdetails/:id",name:"bookdetails",component:BookDetails}		
			]
    },
    {
      path: '/pic',
			component:pic,
			redirect:"/pic/piclist",
			children:[
				{path:"piclist",component:PicList},
				{path:"picdetails/:index",name:"picdetails",component:PicDetails}
			]
    },
    {
      path: '/',
			redirect:"/movie"
    },
  ]
})
