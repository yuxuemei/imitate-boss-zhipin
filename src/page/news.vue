<template>
	<div>
		<boss-header></boss-header>
		<div class="banner">
			<h1>BOSS直聘新闻和数据实时跟踪</h1>
			<span class="btns">媒体合作</span>
		</div>
		<div class="inner">
			<div class="banner-main">
				<div>
					<h2 class="text-left">
						<a href="/article/type/1.html" ka="article-type-more1" class="more" title="更多">more</a>
						<b>数据报告</b>
					</h2>
					<p class="img-wrap">
						<a href="/article/27.html" ka="article-type-img-detail1" target="_blank" class="img" title="2016年应届生就业竞争力报告：专业与技能篇">
						    <img src="https://img.bosszhipin.com/beijin/article/cover/20161205/9175307c9fece02b618612d171d38d86082da1e423c398b034065300dda9f104_s.jpg">
					    </a>
					</p>
				</div>
				<div>
					<h2 class="text-left">
						<a href="/article/type/1.html" ka="article-type-more1" class="more" title="更多">more</a>
						<b>干货文章</b>
					</h2>
					<p class="img-wrap">
						<a href="/article/24.html" ka="article-type-img-detail2" target="_blank" class="img" title="职场人士如何利用业余时间实现自我提升">
						    <img src="https://img.bosszhipin.com/beijin/article/cover/20161010/3ebccee0e834b6370c3c0a4d441f9d45f6dbc8015734263a2ed6dc36bbf26f2b_s.jpg">
						</a>
					</p>
				</div>
				<div>
					<h2 class="text-left"> 
					    <a href="/article/type/1.html" ka="article-type-more1" class="more" title="更多">more</a>
						<b>公司动态</b>
					</h2>
					<p class="img-wrap">
						<a href="/article/25.html" ka="article-type-img-detail3" target="_blank" class="img" title="BOSS直聘启动“攻薪季”招聘周，撮合优质大厂与实力牛人">
						    <img src="https://img.bosszhipin.com/beijin/article/cover/20161022/e4c4d97f4de38f7eafe34700184f61ae86ddaee797e3840ec157a9f6941b1dc2_s.jpg">
						</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    import './../css/news.less'
	import bossHeader from './../components/Header'
	export default{
		data:function(){
			return{
				baseUrl:'./../../static/data/'
			}
		},
		components:{bossHeader},
		mounted:function(){
		},
		methods:{

		}
	}
</script>