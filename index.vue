<template>
	<div>122222222khan</div>
</template>
<script>
	import getOpt from './opt'

	export default {
		props: {
			chartData: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {
			}
		},
		created() {
		},
		watch: {
			chartData: {
				deep: true,
				handler(newVal) {
					if (newVal) {
						this.initChart()
					}
				}
			}
		},
		methods: {
			async getChartData() {
				this.option = getOpt(this.chartData)
			},
			initChart() {
				this.$nextTick(() => {
					const chart = echarts.init(this.$el)
					this.getChartData()
					chart.setOption(this.option)
				})
			}
		}
	}
</script>
<style lang="scss" scoped="scoped">
	div {
		width: 100%;
		height: 100%;
	}
</style>