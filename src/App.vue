<template>
  <div id="app">
		<keep-alive>
    <router-view/>
		</keep-alive>	
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
	max-width: 640px;
	margin:0 auto;
}
.mint-swipe-indicator.is-active {
    background: #5FB878 !important;
	opacity:0.8 !important;
}
</style>
