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
	z-index: 9;
}
.vheader h1.h1{
	font-size: 0.8rem;
	height:1.75rem;
	text-align: center;
	line-height: 1.75rem;
	color:#fff;
}
</style>
