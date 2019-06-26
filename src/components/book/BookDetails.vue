<template>
  <div class="bookdetails">
	 <div class='top'>
		<div class='title'>《{{bookdetails.title}}》</div>
		<div>
		  <img class='image' :src="bookdetails.image" />
				<div class='right'>
					<span  class="languages">{{bookdetails.author[0]}} / {{bookdetails.pubdate}}</span>
					<div class='shijian'><span v-for="item in bookdetails.translator"> {{item}} </span> / {{bookdetails.pages}}</div>    
					<div>{{bookdetails.publisher}}</div>    
					<div class="rating">{{bookdetails.price}}</div>
				</div>
		</div>
	  </div>

	  <div class='summary'>
	  简介：{{bookdetails.summary}}
	  </div>

  </div>
</template>

<script>

export default {
  name: 'bookdetails',
  data () {
    return {
      bookdetails:{}
    }
  },
  methods:{
	  getbookdetails(){
		  this.$http.get("/api/v2/book/"+this.$route.params.id).then((res)=>{
			  console.log(res);
			  this.bookdetails=res.data
		  })
	  }
  },
  mounted:function(){
	  this.getbookdetails()
  }
}
</script>


<style scoped>
	.bookdetails{
	margin:1.75rem 0  2.4rem;
	}
.top{
  background: #393d49;
  width:auto;
  height:8rem;
  padding:1rem 0.9rem 0;
  clear: both;
}
.image{
  width:4rem;
  height:6rem;
  float: left;
	background: url(../../assets/img/loading.gif) no-repeat center;
	background-size: 40% ;	
}
.right{
  
  float:right;
  color:#fff;
  font-size:0.6rem;
  width:9.6rem;
  line-height: 2;
}
.title{
  font-size:1rem;
  color:#ffffff;
  margin-bottom:0.6rem;

}

.languages{
  font-size: 0.7px;
  padding:8px;
  color:#fff;
  background: rgba(0,0,0,0.3);

}
.rating{
  color:red;
  font-size: 1rem;
}
.summary{
  font-size: 0.7rem;
  line-height: 1.6em;
  text-indent: 2em;
  padding:0.8rem;
  clear:both;
  text-align: justify;
}
</style>
