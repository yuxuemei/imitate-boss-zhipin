<template>
	<div>
		<boss-header></boss-header>
	</div>
</template>
<script>
    import bossHeader from './../components/Header'
	export default{
		data:function(){
			return{
				baseUrl:'./../../static/data/',
			}
		},
		components:{bossHeader},
		mounted:function(){
			
		},
		methods:{
           
		}
	}
</script>