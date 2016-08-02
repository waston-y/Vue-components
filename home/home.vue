<style lang="sass">
	.sidebar{
		position: fixed;
		left: 0;
		top: 51px;
		bottom: 0;
		ul{
			padding-top: 40px;
			background: #FAFAFA;
			list-style: none;
			border: 1px solid #333333;
			li{
				line-height: 30px;
				border-bottom: 1px solid #333333;
			}
			li:last-child{
				border-bottom: none;
			}
		}
	}

	section{
		padding: 40px;
		h4{
			padding-bottom: 10px;
			border-bottom: 1px solid #e5e5e5;
		}
	}
</style>
<template>
	<div class="col-md-3 col-xs-12 sidebar">
		<ul>
			<li>progress bar</li>
		</ul>
	</div>
	<div class="col-md-9 col-xs-12" style="float: right">
		<section>
			<h4>Progress bar</h4>
			<progress-bar :progress="parseInt(progress)"></progress-bar>
			<div>
				<button @click="full">100%</button>

				<input type="number" v-model='progress'/>
			</div>
		</section>
	</div>

	

</template>
<script>
	export default {
		data(){
			return{
				progress: 0,
			}
		},

		methods:{
			full(){
				let component = this
				var timer = setInterval(function(){
					component.progress = component.progress + 0.1
					console.log(component.progress)
					if( component.progress - 0 >= 1) clearInterval(timer)
				}, 200)
			}
		}
	}
</script>