<style lang="sass">
	.wy-pager {
		&>button,div {
			float: left;
			display: inline-block;
		}
		&>div{
			span{
				margin: 0 3px;
			}
		}
		button{
			margin: 0px 3px;
			padding: 5px 10px;
			background: #fff;
			border: 1px solid #e5e5e5;
			outline: none;
		}
		.pager-btn-group {
			display: inline;
			padding-left: 0;
			list-style: none;

			li.btn-item {
				float: left;
				padding: 5px 10px;
				margin: 0px 3px;
				border: 1px solid #e5e5e5;
				cursor: pointer;
				&.active {
					color: #fff;
					background: #007ACC;
				}
			}
		}
	}
</style>
<template>
	<div class="wy-pager">
		<button @click="pre">上一页</button>	
		<div v-if="showFirst" >
			<button @click="choose(1)" class="btn-item">1</button>
			<span>......</span> 
		</div>
		<ul class="pager-btn-group">
			<li v-for="item in pagerList" @click="choose(item)"  track-by="$index"
				:class="{'btn-item': true, 'active': pn == item}">{{item}}</li>
		</ul>
		<div v-if="showLast">
			<span>......<span>
			<button @click="choose(pageNum)" class="btn-item">{{pageNum}}</button>
		</div>
		<button @click="next">下一页</button>
	</div>
</template>
<script>
	export default {
		props: {
			pn: {  // 当前页
				type: Number,
				required: true
			},
			total: {  // 数据总数
				type: Number,
				required: true
			},
			size: {	  // 分页大小
				type: Number,
				default() {
					return 10
				}
			},
			cb: {
				type: Function
			}
		},
		data() {
			return {
				pageNum: 1,		  // 总页数(默认为1) = Math.ceil(数据总数 / 分页大小)
				pagerList: [],
				showFirst: false,
				showLast: false
			}
		},
		created() {
			const component = this
			component.pageNum = Math.ceil(component.total / component.size)
			component.getPagerList()
		},
		watch: {
			pn(newVal) {
				if (this.pagerList.length === 0) {
					return
				}
				if (newVal < this.pagerList[0] + 2 || newVal > this.pagerList[this.pagerList.length-1] - 2) {
					this.getPagerList()
				}
			}
		},
		methods: {
			choose(pn) {
				this.pn = pn
				if (this.cb && typeof this.cb === 'function') {
					this.cb(pn)
				}
			},
			pre() {
				this.pn = this.pn === 1 ? this.pn : this.pn - 1
				this.choose(this.pn)
			},
			next() {
				this.pn = this.pn === this.pageNum ? this.pageNum: this.pageNum + 1
				this.choose(this.pn)
			},
			getPagerList() {
				const component = this
				component.pagerList = []
				if (component.pageNum <= 10) {
					for(let i = 1; i <= 10; i++) {
						component.pagerList.push(i)
					}
				} else {
					let start = component.pn > 5 ? component.pn - 4 : 1
					let end = 0;
					if (start < 5) {
						end = start + 7
					} else if (component.pageNum - component.pn < 5) {
						start = component.pageNum - 8
						end = component.pageNum
					} else {
						end = component.pn + 4
					}
					for(let i = start; i <= end; i++) {
						component.pagerList.push(i)
					}
					component.showFirst = start > 1
					component.showLast = end < component.pageNum
				}
			}
		}
	}
</script>