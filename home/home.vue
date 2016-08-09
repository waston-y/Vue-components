<style lang="sass" src="./home.scss"></style>
<template>
		<div class="col-md-3 col-xs-12 sidebar">
			<h3>组件列表</h3>
			<ul>
				<li><a href="#slider">slider/简单轮播组件</a></li>
				<li><a href="#progress-bar">progress bar/进度条组件</a></li>
				<li><a href="#pager">pager/分页器组件</a></li>
				<li><a href="#phone">phone/手机效果</a></li>
			</ul>
		</div>
		<div class="col-md-9 col-xs-12" style="float: right">
			<section id="slider">
				<h4>Slider/简单轮播组件</h4>
				<div class="section-content">
					<slider :images="images" :width="732" :height="320"></slider>
				</div>
			</section>
			<section id="progress-bar">
				<h4>Progress bar/进度条组件</h4>
				<div class="section-content">
					<progress-bar :progress="progress"></progress-bar>
				</div>
				<div class="do">
					<div class="btn-group">
						<button class="btn btn-small btn-default" @click="progressBar('0')">0%</button>
						<button class="btn btn-small btn-default" @click="progressBar('0.5')">50%</button>
						<button class="btn btn-small btn-default" @click="progressBar('1')">100%</button>
					</div>
				</div>
			</section>
			<section id="pager">
				<h4>Pager/分页组件</h4>
			</section>

			<section id="phone">
				<h4>iphone/iphone外观组件</h4>
				<div class="section-content">
					<mobile>
						<slot>
							<h1>Title1</h1>
							<h2>Title1</h2>
							<h3>Title1</h3>
							<h4>Title1</h4>
							<h1>Title2</h1>
							<h2>Title2</h2>
							<h3>Title2</h3>
							<h4>Title2</h4>
							<h1>Title3</h1>
							<h2>Title3</h2>
							<h3>Title3</h3>
							<h4>Title3</h4>
							<h1>Title4</h1>
							<h2>Title4</h2>
							<h3>Title4</h3>
							<h4>Title4</h4>
						</slot>
					</mobile>
				</div>
			</section>

		</div>
</template>
<script>
    export default {
        data() {
                return {
                    progress: 0,
                    images: [{
                        src: '/images/1.jpg',
                        href: ''
                    }, {
                        src: '/images/2.jpg',
                        href: ''
                    }, {
                        src: '/images/3.jpg',
                        href: ''
                    }, {
                        src: '/images/4.jpg',
                        href: ''
                    }, ],
                }
            },

            methods: {
                progressBar(val) {
                    let component = this
                    component.progress = parseFloat(val)
                }
            },
    }
</script>