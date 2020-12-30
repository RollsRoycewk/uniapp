<template>
	<view class="">
		<!-- 头部 -->
		<view class="header-container">
			<image src="../../static/images/logo.png" class="header-image"></image>
			<view class="header-input-contaniner">
				<view class="iconfont icon-sousuo"></view>
				<input type="text" value="" class="header-search" placeholder="搜索商品" placeholder-class="placeholder"/>
			</view>
			<button  class="header-button">搜索</button>
		</view>
		<!-- navContainer -->
		<scroll-view class="nav-container" scroll-x="">
			<view class="nav-item active" >
				推荐
			</view>
			<view class="nav-item" v-for="item in indexData.kingKongModule.kingKongList" :key="item.L1Id">
				{{item.text}}
			</view>
		</scroll-view>
	</view>

	
</template>

<script>
	export default {
		data() {
			return {
				indexData:{}
			}
		},
		methods: {
			
		},
		async mounted() {
			const indexData = await uni.request({
				url:"http://wangkai.zone:3579/index",
				// success(val) {
				// 	console.log(val)
				// }
			})
			this.indexData = indexData[1].data
		}
	}
</script>

<style lang="stylus">
	.header-container
		display flex
		margin-top 20upx
		align-items center
	.header-image
		width 140upx
		height 40upx
		margin 0 20upx
		flex-shrink 0
	.header-input-contaniner
		width 100%
		height 60upx
		background #ededed
		border-radius 10upx
		position relative
		.iconfont
			position absolute
			left 20upx
			top 50%
			transform translateY(-50%)
		.header-search
			margin-left 60upx
			font-size 24upx
			height 60upx
		.placeholder
			font-size 24upx
			text-align center
			text-indent -60upx
			
	.header-button
		width 144rpx
		height 60upx
		margin 0 20rpx
		flex-shrink 0
		font-size 24upx
	.nav-container
		white-space nowrap
		.nav-item
			display inline-block
			width 140upx
			height 80upx
			line-height 80upx
			text-align center
			font-size 28upx
			position relative
			&.active::after
				display block
				width 100%
				height 2upx
				background-color red
				content ""
				position absolute
				left 0
				bottom 2upx
			
</style>
