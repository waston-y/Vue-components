<style lang="sass" src="./home.scss"></style>
<template>
		<div class="col-md-3 col-xs-12 sidebar">
			<h3>Component list</h3>
			<ul>
				<li><a href="#progress-bar">progress bar</a></li>
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
		</div>

	

</template>
<script>
    export default {
        data() {
                return {
                    progress: 0,
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