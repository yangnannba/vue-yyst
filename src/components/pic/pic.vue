<template>
  <div class="pic">
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
  name: 'pic',
  data () {
    return {

			title:"Picture",
			bg:"#01AAED"

    }
  },
		components:{
		VHeader,
		TabBar
	}
}
</script>


<style scoped>
.pic{
	padding:1.75rem 0  2.4rem;
}
</style>
