<template>
  <div class="book">
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
  name: 'book',
  data () {
    return {
			title:"Book",
			bg:"#5FB878"
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
