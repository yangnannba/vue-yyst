<template>
  <div class="tabbar" :style="{backgroundColor:bg}">
      <router-link :to="{path: '/movie'}" tag="li"><span class="iconfont icon-dianying"></span>电影</router-link>
      <router-link :to="{path: '/music'}"  tag="li"><span class="iconfont icon-yinle"></span>音乐</router-link>
      <router-link :to="{path: '/book'}"  tag="li"><span class="iconfont icon-shuji"></span>书籍</router-link>
      <router-link :to="{path: '/pic'}"  tag="li"><span class="iconfont icon-tupian"></span>图片</router-link>
  </div>
</template>

<script>
	import "../assets/fonts/iconfont.css"
export default {
  name: 'tabbar',
	props:["bg"],
  data () {
    return {
      
    }
  }
}
</script>


<style scoped>

.tabbar{
	display: flex;
	position: fixed;
	bottom: 0;
	left:0;
	width:100%;
	padding:0.4rem 0;
}
.tabbar li{
	list-style: none; 
	flex-grow:1;
	font-size: 0.6rem;
	color:#ccc;
	text-align: center;
}
.tabbar li.router-link-active{
	color:#fff;

}
.iconfont{
	display: block;
	margin-bottom: 0.2rem;
	font-size: 0.8rem;
}
</style>
