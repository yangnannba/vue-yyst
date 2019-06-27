<template>
  <ul class="piclist">
		<li v-for="(item,index) in pictures" class="pic-item" @click="gopicdetails(index)">
			<img :src="item" />
		</li>
  </ul>
</template>

<script>

export default {
  name: 'piclist',
  data () {
    return {
       
    }
  },
	computed:{
		pictures:function(){
			return this.$store.state.pictures
		}
	},
	methods:{
		gopicdetails(index){
			this.$router.push({name:"picdetails",params:{index:index}})
		}
	}
}
</script>


<style scoped>
	
.piclist{
	text-align: center;
	font-size: 0;
	-webkit-text-size-adjust: none;
}

.pic-item{
	width:50%;
	display: inline-block;
}
.pic-item img{
	width:100%;
	display: block;
}
</style>
