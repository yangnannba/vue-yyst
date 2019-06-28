<template>
  <div class="booklist">

	<swipe class="my-swipe" :auto="10000">
		
	  <swipe-item class="slide" v-for="item in bookbanner"><img :src="item.src" /></swipe-item>

	</swipe>
	
	<ul class="book-ul">
		<li class="itembook" v-for="item in books" @click="tobookdetail(item.id)" >
			<img :src="item.images.large" />
			<p>{{item.title}}</p>
		</li>
		
	</ul>
    <div class="loading" v-if="loading"><img src="../../assets/img/loading.gif" /></div>
  </div>
</template>

<script>
	
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';

export default {
  name: 'booklist',
  data () {
    return {
		books:[],
		bookbanner:[
			{src:"./static/img/banner-1.jpg"},
			{src:"./static/img/banner-2.jpg"},
			{src:"./static/img/banner-3.jpg"}
		],
		loading:true

    }
  },
  methods:{
	  getbook:function(){
		  this.$http.get("/api/v2/book/search?q=%E5%89%8D%E7%AB%AF&count=20").then((res)=>{
			  this.books=res.data.books;
			  this.loading=false
		  })
	  },
	  tobookdetail:function(id){
		  this.$router.push({name:"bookdetails",params:{id:id}})
	  }
  },
  mounted:function(){
	  this.getbook();
  },
  components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  }

}
</script>


<style scoped>
.booklist{
	margin:1.75rem 0  2.4rem;
}
.my-swipe {
  height: 8rem;
}
 
.slide img{
	width:100%;
}
.book-ul{
	display: flex;
	flex-direction: row;
	flex-wrap:wrap;
	justify-content:space-around;
	margin-top: 0.8rem;

	
}
.book-ul li{
	flex-basis: 45%;
	width:45%;
	margin-bottom: 0.8rem;
	box-shadow: 0 0.1rem 0.2rem #e2e2e2,0 -0.1rem 0.2rem #e2e2e2;
}
.book-ul li.itembook img{
	width: 100%;

	display: block;
	height:8rem;
	background: url(../../assets/img/loading.gif) no-repeat center;
	
}
.book-ul li p{
	font-size: 0.7rem;
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 2em;
	
}
.loading{
	text-align: center;
	padding:0.2rem 0;
}
</style>
