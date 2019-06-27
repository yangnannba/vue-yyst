<template>
  <div class="music">
		<v-header :bg="bg">
			{{title}}
		</v-header>
		<aplayer 
				v-if="aplayershow"
				autoplay 
				:showLrc="true"
				
				:music="{
					title: '蒲公英的梦',
					artist: '刘增瞳',
					src: 'http://m10.music.126.net/20190626153947/f9c6319c0306b7c3ba52dc87f1da9120/ymusic/627c/d25d/178f/2f29a7f5fb6c9a07ca44d230f0263b81.mp3',
					pic: 'https://p2.music.126.net/d6-GcQjlqM1TEWX4BwW2VQ==/109951163413306030.jpg?param=200x200',
					lrc: 'https://api.mlwei.com/music/api/wy/?key=523077333&cache=1&type=lrc&id=1293951763'
				  }"
				  :list="list"
		  >
		  </aplayer>
		  <div class="loading" v-else><img src="../../assets/img/loading.gif" /></div>
		<tab-bar :bg="bg">
		</tab-bar>	
  </div>
</template>

<script>
	
import Aplayer from 'vue-aplayer'	
	
	
	import VHeader from "../VHeader.vue"
	import TabBar from "../TabBar.vue"
export default {
  name: 'music',
  data () {
    return {
			title:"Music",
			bg:"#FF5722",
			list:[],
			aplayershow:false
			
      
    }
  },
		components:{
		VHeader,
		TabBar,
		Aplayer
	},
	methods:{
		getmusic(){
			this.$http.get("https://api.mlwei.com/music/api/wy/?key=523077333&cache=1&type=songlist&id=128509912").then((res)=>{
				let list=res.data.Body
				list.forEach((item)=>{
					let obj={
						'title':item.title,
						'artist':item.author,
						'src':item.url,
						'pic':item.pic,
						'lrc':item.lrc
					}
					this.list.push(obj)
				})
				this.aplayershow=true
			})
		}
	},
	mounted:function(){
		this.getmusic()
	}
}
</script>


<style scoped>
.music{
	padding:1.75rem 0  2.4rem;
}
.loading{
	text-align: center;
}
</style>
