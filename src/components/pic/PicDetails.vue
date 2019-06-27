<template>
  <div class="picdetails">
    
		<v-touch v-on:swipeleft="onSwipeLeft" @swiperight="onswiperight" v-on:tap="onTap" tag="div" class="v-touch"><img class="mypic" :src="picture" /></v-touch>
  </div>
</template>

<script>

export default {

  name: 'picdetails',
  data () {
    return {
         myindex:-1
    }
  },
	methods:{
		onSwipeLeft(){
			if(this.myindex>=this.$store.state.pictures.length-1){
				this.myindex=0
			}else{
				
				this.myindex++
			}
			
		},
		onswiperight(){
			if(this.myindex==0){
				this.myindex=this.$store.state.pictures.length-1
			}else{
							this.myindex--
			}

		},
		onTap(){
			this.$router.go(-1)
		}
	},
	computed:{
		picture(){
			return this.$store.state.pictures[this.myindex]
		}
		
	},
	mounted:function(){
		this.myindex=this.$route.params.index
	}
}
</script>


<style scoped>
	.v-touch{
		position:fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left:0;
		background: #000;
	}
.mypic{
	width:100%;
	position: fixed;
	top: 50%;
	transform:translateY(-50%);
	
}
</style>
