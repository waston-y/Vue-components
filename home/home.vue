<style lang="sass" src="./home.scss"></style>
<template>
		<div class="col-md-3 col-xs-12 sidebar">
			<h3>Component list</h3>
			<ul>
				<li><a href="#progress-bar">progress bar</a></li>
				<li><a href="#slider">slider</a></li>
			</ul>
		</div>
		<div class="col-md-9 col-xs-12" style="float: right">
			<section id="progress-bar">
				<h4>Progress bar</h4>
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
			<section id="slider">
				<h4>slider</h4>
				<div class="section-content">
					<slider :images="images" :width="732" :height="320"></slider>
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