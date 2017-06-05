<template>
	<div>
	    <boss-header></boss-header>
	    <div class="inner" id="main">
	        <div class="left-nav">
	        	<dl v-for="(t,index) in jobType" v-on:mouseover="showHideSub(index,true)"  v-on:mouseout="showHideSub(index,false)"v-bind:class="{'cur':t.typeClicked}">
	        		<dt class="text-left">
	        			<i class="icon-arrow-right"></i>
	        			{{t.name}}
	        		</dt>
	        		<dd class="text-left" >
	        		    <a href="" v-for="hotType in t.hotName" v-text="hotType"></a>
	        		</dd>
	        		<div class="menu-line"></div>
	        		<div class="menu-sub">
	        			<ul>              
	                        <li v-for="sub in t.child" class="clearfix">
	                            <h4 v-text="sub.name"></h4>
	                            <div class="text text-left">
	                                <a href="" v-for="type in sub.child" v-text="type.name"></a>
	                            </div>
	                        </li>
	                    </ul>
	        		</div>
	        	</dl>
	        </div>
	        <div class="right-main">
	        	<div class="search-box paddT20">
	        		<div class="search-input"><input type="text" placeholder="搜索职位，公司"></div>
	        		<div class="search-sel text-left">
	        			<span class="label-text">
	        			    <b>成都</b><i class="icon-arrow-down"></i>
	        			</span>
	        		</div>
	        		<div class="btn btn-search">搜索</div>
	        	</div>
	        	<div class="search-hot text-left">
	        		<b>热门职位：</b>
	        		<a href="" v-for="hot in jobHot" v-text="hot.name"></a>
	        	</div>
	        	<div class="slider">
	        		<img src="http://www.zhipin.com/v2/web/geek/images/promotion/banner-20170508.jpg">
	        	</div>
	        	<div class="job-list">
	        		<ul class="text-left">
	        			<li v-for="job in jobList">
	        				<a v-bind:href="'/#/job-detail?jobId=' + job.jobId" target="_blank">
	        					<div class="over-hidden">
	        						<div class="info-primary left">
	        							<h3 v-text="job.jobName"></h3>
	        							<p class="saraly red" ve-text="job.salary"></p>
	        							<p>
	        							<span v-text="job.locationName"></span><em class="vline"></em>
	        							<span v-text="job.experienceName"></span><em class="vline"></em>
	        							<span v-text="job.degreeName"></span>
	        							</p>
	        						</div>
	        						<div class="info-company right">
	        							<h3 v-text="job.companyName"></h3>
	        							<p>
	        							<span>互联网</span><em class="vline"></em>
	        							<span>D轮</span>
	        							</p>
	        						</div>
	        					</div>
	        				</a>
	        			</li>
	        		</ul>
	        		<div class="all-list">
	        			<a href="/job">全部职位</a>
	        		</div>
	        	</div>	
	        </div>
	    </div>
	</div>
</template>
<script>
    import './../css/home.less'
    import bossHeader from './../components/Header'
	export default{
		data:function(){
			return{
				baseUrl:'./../../static/data/',
				jobList:[],
				jobType:[],
				jobHot:[{
						name:"java"
					},{
						name:"PHP"
					},{
						name:"C++"
					},{
						name:"Web前端"
					},{
						name:"IOS"
					},{
						name:"Android"
					},{
						name:"产品经理"
					},{
						name:"UI设计师"
					},{
						name:"产品运营"
				}]
			}
		},
		components:{bossHeader},
		mounted:function(){
            this.getJobList();
            this.getJobType();
		},
		methods:{
            getJobList(){
            	this.$http.get(this.baseUrl+'job-list.json').then(
            		respose=>{
            			this.jobList = respose.data.data;
            		}
                );
            },
            getJobType(){
            	this.$http.get(this.baseUrl+'job-type.json').then(
            		result=>{
            			var data = eval(result.data);
            			var length = data.length;
            			for(var i = 0;i<length;i++){
            				data[i].typeClicked = false;
            			}
            			this.jobType = data;
            		}
            	)
            },
            showHideSub(index,state){
                this.jobType[index].typeClicked = state;
            }
		}
	}
</script>