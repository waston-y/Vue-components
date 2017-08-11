<style lang="sass">
html,body {
    font-size: 10px;
}
	.container {
		height: 100%;
		width: 100%;
	}
</style>
<template>
	<div class="container">
		<router-view></router-view>	
	<div>
</template>
<script>
    export default {
        replace: false,
        data() {
            return {
                msg: ''
            }
        },
    }
</script>