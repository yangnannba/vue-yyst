<template>
  <div class="music">
		<v-header :bg="bg">
			{{title}}
		</v-header>
		<tab-bar :bg="bg">
		</tab-bar>	
  </div>
</template>

<script>
	import VHeader from "../VHeader.vue"
	import TabBar from "../TabBar.vue"
export default {
  name: 'music',
  data () {
    return {
			title:"Music",
			bg:"#FF5722"
      
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
