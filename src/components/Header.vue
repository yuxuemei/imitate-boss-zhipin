<template>
	<div class="header">
	    <div class="header-center">
			<div class="boss-menu">
			    <span class="boss-logo"></span>
				<router-link v-bind:to="nav.to" v-for="(nav,index) in menuList"  v-text="nav.name">  
		        </router-link>
			</div>
			<div class="boss-sign">
				<span>Boss扫码登录</span>
				<a href="javascript:;">注册</a>
				<a href="javascript:;">登录</a>
			</div>
	    </div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
				menuList:[{
					to:"/home",
	                name:"首页"
				},{
					to:"/job",
	                name:"求职"
				},{
					to:"/app",
	                name:"APP"
				},{
					to:"/news",
	                name:"新闻"
				}]
			}
		}
	}
</script>
<style scoped >
	.header{
		width:100%;
		height: 60px;
		line-height: 60px;
		background: #fff;
		box-shadow: 0 1px 8px rgba(0,0,0,.06);
	}
	.header-center{
		width:1170px;
		margin:0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.boss-logo{
		width: 173px;
		height: 36px;
		display: inline-block;
		margin-bottom: -13px;
	    background: url(http://www.zhipin.com/v2/web/geek/images/logo-x.png) 3px 7px no-repeat;
	}
	.boss-menu{
        margin-left: 15px;
	}
	.boss-menu a{
		margin:0 12px;
	}
	.boss-sign a{
		display: inline-block;
        border:1px solid #5dd5c8;
        height: 24px;
        line-height: 24px;
        border-radius: 15px;
        padding: 0 9px 0 11px;
        margin-left: 17px;
        color: #9fa3b0;
	}
	.boss-sign a:hover{
		background-color: #5dd5c8;
		color: #fff;
	}
</style>