<template>
	<!-- 头部 -->
	<view class="header-container">
		<image src="../../static/images/logo.png" class="header-image"></image>
		
		<view class="header-input-contaniner">
			<view class="iconfont icon-sousuo"></view>
			<input type="text" value="" class="header-search" placeholder="搜索商品" placeholder-class="placeholder"/>
		</view>
		<button  class="header-button">搜索</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus">
	.header-container
		display flex
		margin 20upx 0
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
		.placeholder
			font-size 24upx
			text-align center
	.header-button
		width 144rpx
		height 60upx
		margin 0 20rpx
		flex-shrink 0
		font-size 24upx
</style>
