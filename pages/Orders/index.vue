<template>
	<view class="container">
		<!-- Navigation Bar -->
		<view class="nav-bar">
			<button class="title" @click="openPopup">
				<text>{{ selectedItem || '请选择' }}</text>
			</button>
			<view class="icons">
				<text class="iconfont">&#xe61e;</text>
			</view>
		</view>

		<!-- 弹出层 -->
		<uni-popup type="bottom" ref="popup" :mask-click="true">
			<view class="popup-content">
				<view v-for="(item, index) in items" :key="index" class="popup-item" @click="selectItem(index)">
					{{ item }}
					<!-- 如果当前项被选中，显示红色对勾 -->
					<text v-if="selectedIndex === index" class="check-mark">✔</text>
				</view>
			</view>
		</uni-popup>

		<!-- Tabs -->
		<view class="tabs">
			<scroll-view class="scrollContainer" scroll-x>
				<view v-for="(tab, index) in tabs" :key="index" class="tab-item"
					:class="{ active: currentTab === index }" @click="changeTab(index)">
					<text>{{ tab }}</text>
				</view>
			</scroll-view>

		</view>

		<!-- Order List -->
		<view class="body">
			<view class="order-list">
				<view v-for="(order, index) in filteredOrders" :key="index" class="order-item">
					<view class="order-header">
						<text class="order-name">{{ order.name }}</text>
						<text class="order-type" :class="{ gray: order.type === '已完成' }">{{ order.type }}</text>
					</view>
					<view class="order-details">
						<image class="order-img" :src="order.imgUrl" />
						<view class="order-info">
							<text class="order-rooms">{{ order.rooms }}，{{ order.roomName }}</text>
							<text class="order-dates">{{ order.startDate }} ~ {{ order.endDate }}</text>
							<view class="order-price">
								<text class="order-price-symbol">¥</text>
								<text class="order-price-amount">{{ order.price }}</text>
							</view>
						</view>
					</view>
					<view class="order-footer">
						<text class="order-time">{{ order.orderTime }}</text>
						<view class="order-buttons">
							<view v-if="order.type === '待支付'" class="order-button cancel" @click="cancelOrder(order)">
								<text>取消订单</text>
							</view>
							<view v-if="order.type === '待支付'" class="order-button pay" @click="payOrder(order)">
								<text>去支付</text>
							</view>
							<view v-else-if="order.type === '待成交'" class="order-button cancel"
								@click="cancelOrder(order)">
								<text>取消订单</text>
							</view>
							<view v-else-if="order.type === '退款/售后'" class="order-button cancel"
								@click="cancelOrder(order)">
								<text>取消退款</text>
							</view>
							<view v-else-if="order.type === '待点评'" class="order-button review" @click="payOrder(order)">
								<text>去评价</text>
							</view>
							<view v-else-if="order.type === '已完成'" class="order-button reorder"
								@click="payOrder(order)">
								<text>再次预定</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script setup>
	import {
		ref,
		computed
	} from 'vue';

	const tabs = ref(['全部', '待支付', '待成交', '待出行', '退款/售后', '待点评', '已完成']);
	const currentTab = ref(0);
	const popup = ref(null);
	const items = ref(['房源', '活动', '商品', '美食', '旅游']); // 可选择项列表
	const selectedIndex = ref(null);
	const selectedItem = ref('');
	const orders = ref([{
			name: "民宿名称",
			rooms: "1间",
			roomName: "房间名称",
			startDate: "2024.07.24",
			endDate: "2024.07.24",
			price: 160.25,
			orderTime: "2024-05-05 08:33:12",
			imgUrl: "../../static/orders/example_diagram.png",
			type: "待支付",
		},
		{
			name: "民宿名称",
			rooms: "1间",
			roomName: "房间名称",
			startDate: "2024.07.24",
			endDate: "2024.07.24",
			price: 160,
			orderTime: "2024-05-05 08:33:12",
			imgUrl: "../../static/orders/example_diagram.png",
			type: "待成交",
		},
		{
			name: "民宿名称",
			rooms: "1间",
			roomName: "房间名称",
			startDate: "2024.07.24",
			endDate: "2024.07.24",
			price: 160,
			orderTime: "2024-05-05 08:33:12",
			imgUrl: "../../static/orders/example_diagram.png",
			type: "待出行",
		},
		{
			name: "民宿名称",
			rooms: "1间",
			roomName: "房间名称",
			startDate: "2024.07.24",
			endDate: "2024.07.24",
			price: 160,
			orderTime: "2024-05-05 08:33:12",
			imgUrl: "../../static/orders/example_diagram.png",
			type: "退款/售后",
		},
		{
			name: "民宿名称",
			rooms: "1间",
			roomName: "房间名称",
			startDate: "2024.07.24",
			endDate: "2024.07.24",
			price: 160,
			orderTime: "2024-05-05 08:33:12",
			imgUrl: "../../static/orders/example_diagram.png",
			type: "待点评",
		},
		{
			name: "民宿名称",
			rooms: "1间",
			roomName: "房间名称",
			startDate: "2024.07.24",
			endDate: "2024.07.24",
			price: 160,
			orderTime: "2024-05-05 08:33:12",
			imgUrl: "../../static/orders/example_diagram.png",
			type: "已完成",
		},
	]);

	// 计算属性：根据当前选中的标签筛选订单
	const filteredOrders = computed(() => {
		if (currentTab.value === 0) {
			return orders.value;
		}
		return orders.value.filter((order) => order.type === tabs.value[currentTab.value]);
	});

	function changeTab(tabIndex) {
		currentTab.value = tabIndex;
	}

	function cancelOrder(order) {
		console.log('取消订单:', order);
	}

	function payOrder(order) {
		console.log('支付订单:', order);
	}

	function openPopup() {
		popup.value.open();
	}

	function selectItem(index) {
		selectedIndex.value = index;
		selectedItem.value = items.value[index];
		popup.value.close();
	}
</script>
<style scoped lang="scss">
	$primary-color: #e60012;
	$secondary-color: #222222;
	$background-color: #f5f5f5;
	$font-color: #333333;
	$light-gray: #dddddd;
	$gray: #888888;

	.container {
		padding-bottom: 60px;
		/* 为底部导航留出空间 */
		background-color: $background-color;
	}

	.nav-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 20px;
		background-color: #ffffff;
		border-bottom: 1px solid $light-gray;

		.title {
			font-size: 16px;
			font-weight: bold;
			color: $font-color;
		}

		.icons {
			font-size: 20px;
			color: $gray;
		}
	}

	.popup-content {
		padding: 10px;
		background-color: #ffffff;
		border-radius: 10px 10px 0 0;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

		.popup-item {
			padding: 15px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid $light-gray;

			&:last-child {
				border-bottom: none;
			}

			.check-mark {
				color: $primary-color;
				font-size: 20px;
			}
		}
	}

	.tabs {
		display: flex;
		justify-content: space-around;
		padding: 10px 0;
		background-color: #ffffff;
		border-bottom: 1px solid $light-gray;

		.scrollContainer {
			width: 666rpx;
			height: 90rpx;
			white-space: nowrap;
		}

		.tab-item {
			flex: 1;
			text-align: center;
			display: inline-block;
			margin-left: 10rpx;
			padding: 10px 10px;
			font-size: 14px;
			color: $gray;

			&.active {
				color: $primary-color;
				border-bottom: 2px solid $primary-color;
			}
		}
	}

	.body {
		padding: 10px;

		.order-list {
			.order-item {
				background-color: #ffffff;
				border-radius: 8px;
				padding: 15px;
				margin-bottom: 10px;
				box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

				.order-header {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 10px;

					.order-name {
						font-size: 16px;
						font-weight: bold;
						color: $font-color;
					}

					.order-type {
						font-size: 14px;
						color: $primary-color;

						&.gray {
							color: $gray;
						}
					}
				}

				.order-details {
					display: flex;
					align-items: center;

					.order-img {
						width: 80px;
						height: 80px;
						border-radius: 4px;
						margin-right: 10px;
					}

					.order-info {
						flex: 1;

						.order-rooms {
							font-size: 14px;
							color: $font-color;
							margin-bottom: 5px;
						}

						.order-dates {
							font-size: 12px;
							color: $gray;
							margin-bottom: 5px;
						}

						.order-price {
							display: flex;
							align-items: baseline;

							.order-price-symbol {
								font-size: 14px;
								color: $primary-color;
							}

							.order-price-amount {
								font-size: 18px;
								font-weight: bold;
								color: $primary-color;
							}
						}
					}
				}

				.order-footer {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 10px;

					.order-time {
						font-size: 12px;
						color: $gray;
					}

					.order-buttons {
						display: flex;
						gap: 10px;

						.order-button {
							padding: 8px 12px;
							border-radius: 4px;
							font-size: 14px;
							text-align: center;

							&.cancel {
								background-color: #f5f5f5;
								color: $font-color;
							}

							&.pay {
								background-color: $primary-color;
								color: #ffffff;
							}

							&.review {
								background-color: #f5f5f5;
								color: $primary-color;
							}

							&.reorder {
								background-color: #f5f5f5;
								color: $primary-color;
							}
						}
					}
				}
			}
		}
	}
</style>