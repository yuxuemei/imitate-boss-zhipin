<template>
	<div>
		<boss-header></boss-header>
		<div class="banner1_full">
			<div class="inner clearfix">
			 	<div class="figure fadeInLeft animation ">
			 		<div class="phone-tip"></div>
			 	</div>
			 	<div class="text fadeInRight animation">
			 	    <div class="text-btns">
			 	    	<div class="app-qrcode">
			 	    		<img src="http://www.zhipin.com/qrcode/common.json?content=https%3a%2f%2fm.bosszhipin.com%2fd%2fv2%2f%3ftype%3dqr%26pkn%3dintro&w=142&h=142">
			 	    	</div>
			 	    	<a href="" class="btn-iphone"></a>
			 	    	<a href="" class="btn-android"></a>
			 	    </div>	
			 	</div>
			</div>
		</div>
		<div class="banner2_full">
			<div class="inner">
				<div class="text animation fadeInDown"></div>
				<div class="figure animation fadeIn">
					<div class="figure-phone animation fadeInUp"></div>
					<div class="figure-logo animation bounceIn">
						<img v-bind:src="logo">
					</div>
					<div class="figure-user animation fadeIn">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
		<boss-footer></boss-footer>
	</div>
</template>
<script>
    import './../css/app.less'
	import bossHeader from './../components/Header'
	import bossFooter from './../components/Footer'
	export default{
		data:function(){
			return{
				baseUrl:'http://www.zhipin.com/v2/bosszhipin_home/images/home/v2/',
				logo:''
			}
		},
		components:{bossHeader,bossFooter},
		created:function(){
			this.logo = this.baseUrl + "logo.png";
		},
		mounted:function(){
			console.log(this.baseUrl);
		},
		methods:{

		}
	}
</script>