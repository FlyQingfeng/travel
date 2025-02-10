<template>
	<view class="container">
		<!-- 顶部轮播图 -->
		<view class="banner">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item, index) in swiperItems" :key="index">
					<image class="swiper-image" :src="item.src" />
				</swiper-item>
			</swiper>
		</view>

		<!-- 带动画效果的分类标签栏 -->
		<view class="category-tab">
			<view class="tab-item" v-for="(cate, index) in categories" :key="index"
				:class="{ active: activeCategory === index }" @click="switchCategory(index)">
				<transition name="tab-fade">
					{{ cate.name }}
				</transition>
			</view>
		</view>

		<!-- 酒店 -->
		<view class="content-area" v-if="activeCategory === 0">
			<!-- 搜索和日期选择器 -->
			<view class="search-date">
				<view class="search-box">
					<input type="text" placeholder="搜索景点、住宿、餐饮..." @input="onSearch" />
					<button @click="search">搜索</button>
				</view>

				<view class="date-picker">
					<picker mode="date" :value="startDate" @change="onStartDateChange">
						<view class="date-label">{{ startDateLabel }}</view>
					</picker>
					<text class="night-count"><{{ nightCount }}晚></text>
					<picker mode="date" :value="endDate" @change="onEndDateChange">
						<view class="date-label">{{ endDateLabel }}</view>
					</picker>
				</view>

				<view class="location">
					<text class="location-text">北京，朝阳区中国大厦附近</text>
					<button @click="getCurrentLocation">定位</button>
				</view>
			</view>

			<!-- 本地推荐 -->
			<view class="recommendations">
				<view class="rec-header">
					<text class="rec-title">当地热门推荐</text>
					<navigator url="/pages/all-recommendations">
						<text class="rec-more">查看全部</text>
					</navigator>
				</view>
				<scroll-view class="rec-items" scroll-x>
					<view class="rec-item" v-for="(item, index) in localRecommendations" :key="index"
						@click="navigateToDetail(item.id)">
						<view class="item">
							<image :src="item.image" class="item-image" />
							<view class="item-bottom">
								<text class="item-title">{{ item.title }}</text>
								<text class="item-price">{{ item.price }}</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>

			<!-- 酒店列表 -->
			<view class="hotel-list">
				<view class="hotel-item" v-for="(hotel, index) in hotels" :key="index">
					<view class="hotel-image">
						<image :src="hotel.image"/>
					</view>
					<view class="hotel-info">
						<text class="hotel-name">{{ hotel.name }}</text>
						<text class="hotel-address">{{ hotel.address }}</text>
						<view class="hotel-rating">
							<text class="rating-score">{{ hotel.rating }}</text>
							<text class="rating-count">({{ hotel.reviewCount }}条评价)</text>
						</view>
						<view class="hotel-price">
							<text class="price-text">￥{{ hotel.price }}</text>
							<text class="price-info">起/晚</text>
						</view>
						<button @click="bookNow(hotel.id)">立即预订</button>
					</view>
				</view>
			</view>
		</view>

		<!-- 民宿 -->
		<view class="content-area" v-if="activeCategory === 1">
			<text>民宿</text>
		</view>
		<!-- 景点 -->
		<view class="content-area" v-if="activeCategory === 2">
			<text>景点</text>
		</view>
		<!-- 餐饮 -->
		<view class="content-area" v-if="activeCategory === 3">
			<text>餐饮</text>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		computed,
		onMounted
	} from 'vue';

	// 轮播图图片
	const swiperItems = ref([{
			src: '../../static/home/banner.png'
		},
		{
			src: '../../static/home/banner.png'
		}
	]);

	// 分类标签
	const categories = ref([{
			name: '酒店'
		},
		{
			name: '民宿'
		},
		{
			name: '景点'
		},
		{
			name: '餐饮'
		}
	]);
	const activeCategory = ref(0);

	// 切换分类
	const switchCategory = (index) => {
		activeCategory.value = index;
	};

	// 日期选择器
	const startDate = ref('');
	const endDate = ref('');
	const nightCount = computed(() => {
		if (!startDate.value || !endDate.value) return 0;
		const start = new Date(startDate.value);
		const end = new Date(endDate.value);
		return Math.ceil((end - start) / (1000 * 3600 * 24));
	});

	// 日期格式化
	const onStartDateChange = (e) => {
		startDate.value = e.detail.value;
	};
	const onEndDateChange = (e) => {
		endDate.value = e.detail.value;
	};
	const startDateLabel = computed(() => {
		return startDate.value ? formatDate(new Date(startDate.value)) : '入住日期';
	});
	const endDateLabel = computed(() => {
		return endDate.value ? formatDate(new Date(endDate.value)) : '离店日期';
	});
	const formatDate = (date) => {
		return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
	};

	// 定位功能
	const getCurrentLocation = () => {
		// 实现定位功能
	};

	// 搜索功能
	const onSearch = (value) => {
		console.log('Search keyword:', value);
	};
	const search = () => {
		console.log('Searching with dates:', startDate.value, endDate.value);
	};

	// 推荐内容
	const localRecommendations = ref([{
			id: 1,
			image: 'https://ts2.cn.mm.bing.net/th?id=ODL.7a11cdec8c46e02b3da4b32dd11a61ac&w=298&h=189&c=10&rs=1&qlt=99&bgcl=fffffe&r=0&o=6&dpr=1.5&pid=AlgoBlockDebug',
			title: '黄果树瀑布',
			price: '￥80起'
		},
		{
			id: 2,
			image: 'https://ts1.cn.mm.bing.net/th/id/R-C.a3ef4b1e03269669b2b8e5af513cf497?rik=Wb%2bV4%2fRWOwOi9g&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50081%2f6913.jpg_wh860.jpg&ehk=3h9g6N5bkRVRiHP1c22MIHXTofRgBxmL%2fm6mpMQhGIw%3d&risl=&pid=ImgRaw&r=0',
			title: '西江千户苗寨',
			price: '￥120起'
		}
	]);

	// 酒店列表
	const hotels = ref([{
			id: 1,
			image: '../../static/home/hotel1.png',
			name: '豪华酒店',
			address: '北京市朝阳区...',
			rating: 4.8,
			reviewCount: 5365,
			price: 800
		},
		{
			id: 2,
			image: '../../static/home/hotel2.png',
			name: '特色民宿',
			address: '北京市海淀区...',
			rating: 4.5,
			reviewCount: 2365,
			price: 500
		}
	]);

	// 导航功能
	const navigateToDetail = (id) => {
		console.log('Navigate to detail:', id);
	};
	const bookNow = (id) => {
		console.log('Book now:', id);
	};
</script>

<style scoped lang="scss">
	
	$font-color: #000;
	$primary-color: #e60012;
	$background-color: #f5f5f5;
	$gray: #888888;

	.container {
		padding-bottom: 60px;
		background-color: $background-color;
	}

	.banner {
		.swiper {
			height: 200px;

			.swiper-image {
				width: 100%;
				height: 100%;
			}
		}
	}

	// 带动画效果的分类标签栏
	.category-tab {
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		padding: 10px 0;

		.tab-item {
			flex: 1;
			text-align: center;
			padding: 10px;
			color: $gray;
			transition: transform 0.3s, color 0.3s; // 添加过渡效果

			&.active {
				color: $primary-color;
				transform: scale(1.1); // 点击时放大
			}

			.tab-text {
				font-size: 16px;
			}
		}
	}

	// 定义动画
	.tab-fade-enter-active,
	.tab-fade-leave-active {
		transition: opacity 0.3s, transform 0.3s;
	}

	.tab-fade-enter-from,
	.tab-fade-leave-to {
		opacity: 0;
		transform: scale(0.8); // 缩小效果
	}

	.content-area {
		padding: 10px;

		.search-date {
			background-color: #fff;
			padding: 10px;
			border-radius: 8px;
			margin-bottom: 10px;

			.search-box {
				display: flex;
				align-items: center;
				margin-bottom: 10px;

				input {
					flex: 1;
					height: 40px;
					padding: 0 10px;
					border: 1px solid #ddd;
					border-radius: 4px;
				}

				button {
					margin-left: 10px;
					padding: 0 20px;
					background-color: $primary-color;
					color: #fff;
					border: none;
					border-radius: 4px;
				}
			}

			.date-picker {
				display: flex;
				align-items: center;

				.date-label {
					padding: 5px 10px;
					background-color: #f5f5f5;
					border-radius: 4px;
					margin: 0 5px;
				}

				.date-divider {
					margin: 0 5px;
				}

				.night-count {
					color: $gray;
				}
			}

			.location {
				display: flex;
				align-items: center;
				margin-top: 10px;

				.location-text {
					flex: 1;
					color: $gray;
				}

				button {
					padding: 5px 10px;
					background-color: #007aff;
					color: #fff;
					border: none;
					border-radius: 4px;
				}
			}
		}

		.recommendations {
			background-color: #fff;
			padding: 10px;
			margin-top: 10px;
			border-radius: 8px;

			.rec-header {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.rec-title {
					font-size: 16px;
					font-weight: bold;
					color: $font-color;
				}

				.rec-more {
					color: $primary-color;
				}
			}

			.rec-items {
				white-space: nowrap;
				margin-top: 10px;

				.rec-item {
					display: inline-block;
					width: 220px;
					margin-right: 10px;
					
					.item{
						// background-color: #ddd;
						text-align: center;
						flex-direction: column;
						margin-bottom: 5px;
						.item-image {
							width: 100%;
							height: 120px;
							border-radius: 4px;
						}
						.item-bottom{
							.item-title {
								margin-top: 5px;
								font-weight: bold;
							}
							
							.item-price {
								color: $primary-color;
							}
						}
						
					}
					
				}
			}
		}

		.hotel-list {
			.hotel-item {
				$hotel-item-height:280rpx;
				display: flex;
				flex-direction: row;
				margin-top: 10rpx;
				background-color: #fff;
				padding: 10rpx;
				border-radius: 8rpx;
				height: $hotel-item-height;
				.hotel-image {
					width: $hotel-item-height;
					height: $hotel-item-height;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					display: flex;
					image{
						width: 80%;
						height: 80%;
						border-radius: 4px;
					}
				}
				
				.hotel-info {
					flex: 1;
					.hotel-name {
						font-size: 14px;
						font-weight: bold;
					}

					.hotel-address {
						color: $gray;
					}

					.hotel-rating {
						margin-top: 5px;

						.rating-score {
							color: $primary-color;
						}
					}

					.hotel-price {
						margin-top: 5px;

						.price-text {
							color: $primary-color;
							font-weight: bold;
						}
					}

					button {
						margin-top: 10px;
						background-color: $primary-color;
						color: #fff;
						border: none;
						border-radius: 4px;
					}
				}
			}
		}
	}
</style>