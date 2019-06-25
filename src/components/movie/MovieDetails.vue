<template>

<div class='moviedetails'>

 <div class='top'>
    <div class='title'>《{{moviedetails.title}}》</div>
    <div>
      <img class='image' :src="moviedetails.images.small" />
			<div class='right'>
				<span  class="languages">{{moviedetails.genres[0]}} / {{moviedetails.tags[0]}}</span>
				<div class='shijian'><span v-for="country in moviedetails.countries">{{country}} </span>/ {{moviedetails.durations[0]}}</div>    
				<div v-for="pubdate in moviedetails.pubdates">{{pubdate}}</div>    
				<div class="rating">{{moviedetails.rating.average}}分</div>
			</div>
    </div>
  </div>

  <div class='summary'>
  简介：{{moviedetails.summary}}
  </div>

</div>
	
</template>

<script>

export default {
  name: 'moviedetailst',
  data () {
    return {
       moviedetails:{}
    }
  },
	methods:{
    myajax:function(){
			this.$http.get("/api/v2/movie/subject/"+this.$route.params.id).then((res)=>{
				console.log(res.data)
				this.moviedetails=res.data
			})
		}
	},
	mounted:function(){
		this.myajax()
	}
	
}
</script>


<style scoped>
.moviedetails{
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
