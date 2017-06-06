<template>
	<div>
		<boss-header></boss-header>
		<div class="banner">
			<h1>BOSS直聘新闻和数据实时跟踪</h1>
			<span class="btns">媒体合作</span>
		</div>
		<div class="inner">
			<div class="banner-main">
				<div v-for="news in newType">
					<h2 class="text-left">
						<a href="/article/type/1.html" ka="article-type-more1" class="more" title="更多">more</a>
						<b v-text="news.title"></b>
					</h2>
					<div class="text">
						<p class="img-wrap">
							<a href="/article/27.html" ka="article-type-img-detail1" target="_blank" class="img" v-bind:title="news.introduction">
							    <img v-bind:src="news.img">
						    </a>
						</p>
						<p class="introduction text-left">
						    <a  v-text="news.introduction" href=""></a>
						</p>
						<p class="new-view text-left">查看详情</p>
					</div>
				</div>
			</div>
			<div class="news-list">
				<ul>
					<li class="clearfix"  v-for="news in newType">
						<div class="img-wrap">
						    <a href="" class="inline">
						    	<img v-bind:src="news.img">
						    </a>
						    <span class="label" v-text="news.title"></span>	
						</div>
						<div class="new-info">
							<p class="intr text-left">
							    <a  v-text="news.introduction" href=""></a>
							</p>
							<p class="detail text-left" v-text="news.detail"></p>
							<p class="new-view text-left">
							    <span v-text="news.author"></span>·
							    <span v-text="news.creatTime"></span>
							</p>
						</div>
					</li>
				</ul>
				<div class="see-more">
					<a href="">浏览更多</a>
				</div>
			</div>
		</div>
		<boss-footer></boss-footer>
	</div>
</template>
<script>
    import './../css/news.less'
	import bossHeader from './../components/Header'
	import bossFooter from './../components/Footer'
	export default{
		data:function(){
			return{
				baseUrl:'./../../static/data/',
				newType:[{
                    title:"数据报告",
                    img:"https://img.bosszhipin.com/beijin/article/cover/20161205/9175307c9fece02b618612d171d38d86082da1e423c398b034065300dda9f104_s.jpg",
                    introduction:"2016年应届生就业竞争力报告：专业与技能篇",
                    detail:"2016年应届生求职季正不断深入, 实体经济的下行与新一代大学生求职偏好的“进化”，令今年的校招市场呈现出一些不同的景象。移动互联网招聘平台BOSS直聘近日发布的《2016年应届生就业",
                    author:"常濛、谢晨",
                    creatTime:"2016-12-05"

				},{
                    title:"干货文章",
                    img:"https://img.bosszhipin.com/beijin/article/cover/20161010/3ebccee0e834b6370c3c0a4d441f9d45f6dbc8015734263a2ed6dc36bbf26f2b_s.jpg",
                    introduction:"职场人士如何利用业余时间实现自我提升",
                    detail:"导语：1KB=1024B1MB=1024KB1GB=1024MB1TB=1024GB... 简单的字节如细胞一样构建了我们丰富多样的互联网世界，也给人力资源领域带来了全新、高效的数字化招聘机会。在1",
                    author:"PR Team",
                    creatTime:"2016-12-05"
                    
				},{
                    title:"公司动态",
                    img:"https://img.bosszhipin.com/beijin/article/cover/20161022/e4c4d97f4de38f7eafe34700184f61ae86ddaee797e3840ec157a9f6941b1dc2_s.jpg",
                    introduction:"BOSS直聘启动“攻薪季”招聘周，撮合优质大厂与实力牛人",
                    detail:"本文来源于知乎，经授权发布，作者：Cher Deo职场是个靠实力说话的地方，不想被淘汰，就必须想办法持续提升自己的能力，要学会如何做事，如何搞定客户，如何与同事相处，如何拍领导马屁，如何教导下属……这",
                    author:"Cher Deo",
                    creatTime:"2016-10-15"
                    
				}]
			}
		},
		components:{bossHeader,bossFooter},
		mounted:function(){
		},
		methods:{

		}
	}
</script>