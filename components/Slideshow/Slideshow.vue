<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular class="banner-container">
			<swiper-item>
				<view class="swiper-item">
					<image class="banner-img" src="https://yanxuan.nosdn.127.net/e49d52e0267cb8fabc44fb94ffa225ee.jpg?quality=75&type=webp&imageView" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="banner-img" src="https://yanxuan.nosdn.127.net/3bedc8ad18ea3008aa4d0ab4ba9416b4.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="banner-img" src="https://yanxuan.nosdn.127.net/62eb32884c1571a6ddf43ca9035ba8d9.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
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
	.banner-container
		.swiper-item
			.banner-img
				width 100%
				height 350upx
</style>
