<template>
	<div class="footer">
	     <div class="inner clearfix">
	     	<div class="left text-left">
	     		<p>
	     			<img class="boss-logo" src="http://www.zhipin.com/v2/web/geek/images/logo-footer.png">
	     		</p>
                <p>Copyright © 2017 zhipin.com 北京华品博睿网络技术有限公司 京ICP备14013441号-5</p>
                <p class="footer-info">联系地址：北京朝阳区太阳宫中路冠捷大厦3层302 联系电话：010-84150633 
                <span>京公网安备11010502032801</span>
                <img src="http://www.zhipin.com/v2/web/geek/images/icon-beian.png">
                </p>
	     	</div>
	     	<div class="right footer-right">
	     		<p>
	     			<a class="icon-weibo" href=""></a>
	     			<a class="icon-wechat" href=""></a>
	     			<a class="icon-app" href=""></a>
	     		</p>
	     		<p>
	     			<a href="" style="color:#fff;">关于我们</a>
	     			<span>企业服务热线</span>
	     			<b>400 065 5799</b>	
	     		</p>
	     	</div>
	     </div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
			}
		}
	}
</script>
<style scoped >
	.footer{
		background: #A8ACB7;
	    padding: 20px 0 25px;
	    margin-top: 45px;
	}
	.boss-logo{
		padding: 12px 0;
	}
	.footer p{
        color: #EEEFF3;
	}
	p span{
		margin-left: 40px;
	}
	.footer-info img{
		width: 16px;
	    height: 16px;
	    vertical-align: middle;
	    margin: -5px 0 0 3px;
	}
	.icon-weibo,.icon-wechat,.icon-app{
		display: inline-block;
	    background-image: url(https://www.zhipin.com/v2/web/geek/images/icons.png);
	    background-repeat: no-repeat;
	    width: 42px;
	    height: 42px;
	    line-height: 42px;
	    border: 1px #DDDFE5 solid;
	    border-radius: 100%;
	    margin-left: 23px;
	    vertical-align: top;
	}
	.icon-weibo{
        background-position: 10px -190px;
	}
	.icon-wechat{
		background-position: 10px -254px;
	}
	.icon-app{
		background-position: 6px -313px;
	}
	.footer-right p{
		color: #EEEFF3;
	    text-align: right;
	    padding: 10px 0;
	}
	.footer-right b{
		font-size: 17px;
	    padding-left: 5px;
	    color: #fff;
	}
</style>