<template>
  <div class="movie">
		
		<v-header :bg="bg">
			{{title}}
		</v-header>
		
		<router-view></router-view>
		
		<tab-bar :bg="bg">
		</tab-bar>		
		

  </div>
</template>

<script>
import VHeader from "../VHeader.vue"
import TabBar from "../TabBar.vue"
export default {
  name: 'movie',
  data () {
    return {
			title:"Movie",
			bg:"#009688"
      
    }
  },
	components:{
		VHeader,
		TabBar
	}
}
</script>


<style scoped>

</style>
