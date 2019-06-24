<template>
  <div class="vheader" :style="{backgroundColor:bg}">
		<h1 class="h1">
			<slot>标题</slot>
		</h1>
  </div>
</template>

<script>
export default {
	props:["bg"],
  name: 'vheader',
  data () {
    return {
      
    }
  }
}
</script>


<style scoped>
.vheader{
	position: fixed;
	top: 0;
	left:0;
	width:100%;
}
.vheader h1.h1{
	font-size: 1rem;
	height:2rem;
	text-align: center;
	line-height: 2rem;
	color:#fff;
}
</style>
