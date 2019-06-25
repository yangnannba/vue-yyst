<template>
  <ul class="movielist">
		<li class='item' v-for="item in movielist"  @click="todetails(item.id)">

       <img :src="item.images.medium" class='image' />
       <div class='right'>
         <h2 class='title'>{{item.title}}</h2>
         <div  class='genres'>
            <span v-for="(genre,index) in item.genres"  :key="index" >
            [{{genre}}]
            </span>
         </div>
          <div  class='casts'>
          <span>主演：</span><span v-for="(cast,index) in item.casts"  :key="index" >{{cast.name}} </span>
         </div>   
          <div  class='directors'>
          <span>导演：</span><span v-for="(director,index) in item.directors"  :key="index" >{{director.name}} </span>
         </div>
        <div class='original_title'><span>{{item.original_title}}</span>({{item.year}})</div>  
				<div class='average'><span>{{item.rating.average}}</span></div>         
       </div>

		</li>
    <li class="loading" v-if="loading"><img src="../../assets/img/loading.gif" /></li>
		<li class="loadfinsh" v-else>数据加载完☺</li>
  </ul>
</template>

<script>

export default {
  name: 'movielist',
  data () {
    return {
      movielist:[],
      start:0,
			loading:true
    }
  },
	methods:{
		myajax:function(){

						 			 if (this.start<250){
										
										this.$http.get("/api/v2/movie/top250?count=10&start="+this.start).then((res)=>{

											this.movielist=this.movielist.concat(res.data.subjects)
										}) 
										this.start=this.start+10;
								 }else{
									 this.loading=false
								 }
		},
		todetails:function(id){
			  this.$router.push({name:"moviedetails",params:{id:id}});
		}
	},
	mounted:function(){
		   this.myajax();
		
       window.onscroll=()=>{
				 let scrollTop=document.documentElement.scrollTop;
				 let clientHeight=document.documentElement.clientHeight;				 
				 let scrollHeight=document.documentElement.scrollHeight;				 
          if(scrollTop+clientHeight == scrollHeight){
		          this.myajax();
					 }
					}		
		
		
	}
}
</script>


<style scoped>
.movielist{
	margin:1.75rem 0  2.4rem;
  display: flex;
  flex-direction: column;

}


.image{
  width:4rem;
  height:6rem;
  margin-right:0.3rem;
	background: url(../../assets/img/loading.gif) no-repeat center;
	background-size: 40% ;
}
.item{
  padding:0.4rem;
  display: flex;
  flex-direction: row;

  border-bottom:1px solid #c3c3c3;

}
.right{
  display: flex;
  flex-direction: column;  
  flex:1;
  position: relative;
	justify-content:space-between;
}
.title{
  font-size:0.8rem;
	margin-bottom: 0.2rem;
}
.genres{
  display: flex;
  flex-direction: row;  
  font-size:0.6rem;
  color:#999;
  margin-bottom:0.4rem;
}
.casts{
  display: flex;
  flex-direction: row;  
  font-size:0.6rem;
  flex-wrap: wrap;
   margin-bottom:0.2rem; 
}
.casts span{
  margin-right:0.6rem;
  line-height: 1.4em;
}
.directors{
    display: flex;
  flex-direction: row;  
  font-size:0.6rem;
  flex-wrap: wrap;
   margin-bottom:0.2rem;   
}
.original_title{
  font-size:0.6rem;
  color:#999;
}
.average{
  color:#ff0000;
  font-size:1rem;
  font-style: italic;
  position: absolute;
  top: 0.2rem;
  right:0.2rem;
}

.loading{
	text-align: center;
	padding:0.2rem 0;
}
.loadfinsh{
	text-align: center;
	padding:0.5rem 0;
	font-size: 0.8rem;
}
</style>
