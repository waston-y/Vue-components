<style lang="sass" src="./home.scss"></style>
<template>
	<h3>TABS控件</h3>
	<div>
		<tabs :items="items">
			<div slot="tab1">
				<p>scopeSlotsasdsadasdasdasd</p>
			</div>
			<div slot="tab2">
				<p>1231312313131232</p>
			</div>
		</tabs>
	</div>

	<kk-select :options="options"></kk-select>
</template>
<script>
    export default {
			data() {
				return {
					items: ['TAB1', 'TAB2'],
					options: [
						{text: '中心学校', value: 0},
						{text: '中心学校1', value: 1},
						{text: '中心学校2', value: 2},
						{text: '中心学校3', value: 3},
						{text: '中心学校4', value: 4}
					],
					selected: {text: '中心学校2', value: 2}
				}
			}
		}
</script>