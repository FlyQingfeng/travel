<template>
  <view class="container">
    <!-- 顶部设置和时间 -->
    <view class="header">      
      <image class="settings-icon" src="/static/mine/setting.png"></image>
    </view>
    <view class="body">
		<!-- 头像和用户名 -->
		<view class="profile">
		  <image class="avatar" src="/static/mine/avatar.png"></image>
		  <view class="user-info">
		    <text class="username">小吴爱吃甜食</text>
		    <view class="user-status">
		      <image class="vip-badge" src="/static/mine/vip.png"></image>
		      <image class="vip-badge" src="/static/mine/vip.png"></image>
		    </view>
		  </view>
		</view>
		
		<!-- 功能菜单 -->
		<view class="menu">
		  <view class="menu-item">
		    <image class="menu-icon" src="/static/mine/Frame.png"></image>
		    <text class="menu-text">旅游达人</text>
		  </view>
		  <view class="menu-item">
		    <image class="menu-icon" src="/static/mine/store.png"></image>
		    <text class="menu-text">门店入驻</text>
		  </view>
		  <view class="menu-item">
		    <image class="menu-icon" src="/static/mine/pocket.png"></image>
		    <text class="menu-text">钱包</text>
		  </view>
		  <view class="menu-item">
		    <image class="menu-icon" src="/static/mine/coupon.png"></image>
		    <text class="menu-text">优惠券</text>
		  </view>
		</view>
		
		<!-- 列表项 -->
		<view class="list">
		  <navigator class="list-item" url="#">
			  <view class="list-wrapper">
				<image class="arrow-icon" src="/static/mine/jifen.png"></image>
			  	<text class="text-icon">我的积分</text>
				<image class="arrowqs" src="../../static/home/linkArrow.png" mode=""></image>
			  </view>		    
		  </navigator>
		  <navigator class="list-item" url="#">
		    <view class="list-wrapper">
				<image class="arrow-icon" src="/static/mine/onlineSerice.png"></image>
				<text class="text-icon">联系客服</text>
				<image class="arrowqs" src="../../static/home/linkArrow.png" mode=""></image>
			</view>
		  </navigator>
		  <navigator class="list-item" url="#">
		    <view class="list-wrapper">
				<image class="arrow-icon" src="/static/mine/aboutUs.png"></image>
				<text class="text-icon">关于我们</text>
				<image class="arrowqs" src="../../static/home/linkArrow.png" mode=""></image>
			</view>
		  </navigator>
		  <navigator class="list-item" url="#">
		    <view class="list-wrapper">
				<image class="arrow-icon" src="/static/mine/feedback.png"></image>
				<text class="text-icon">意见反馈</text>
				<image class="arrowqs" src="../../static/home/linkArrow.png" mode=""></image>
			</view>
		  </navigator>
		  <navigator class="list-item" url="#">
		    <view class="list-wrapper">
				<image class="arrow-icon" src="/static/mine/youji.png"></image>
				<text class="text-icon">达人游记</text>
				<image class="arrowqs" src="../../static/home/linkArrow.png" mode=""></image>
			</view>
		  </navigator>
		</view>
		
		<!-- 底部导航栏 -->
	</view>
    
    
      
  </view>
</template>

<script setup>

</script>

<style scoped lang="scss">
/* 容器 */
.container {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
}

/* 顶部设置和时间 */
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.body {
	width: 748rpx;
	height: 974rpx;
	.profile {
		width: 700rpx;
		height: 128rpx;
		.avatar {
			width:128rpx;
			height:128rpx;
		}		
	}
}
.settings-icon {
  width: 52rpx;
  height: 52rpx;
  padding-left:24rpx;
  padding-top:18rpx;
}

/* 头像和用户名 */
.profile {
  display: flex;
  align-items: center;
  padding: 20px;
}



.user-info {
  width: 238rpx;
  height: 108rpx;
  margin-left: 15px;
  .username {
	  width: 238rpx;
	  height: 56rpx;
	  font-family: PingFang SC, PingFang SC;
	  font-weight: 500;
	  font-size: 38rpx;
	  color: #222222;
	  line-height: 47rpx;
	  text-align: center;
	  font-style: normal;
	  text-transform: none;
  };
  .vip-badge {
	  width:104rpx;
	  height:42rpx;
	  padding-left:1rpx;
  }
}

.menu {
	width: 746rpx;
	height: 166rpx;
	background: #FFFFFF;
		.menu-item {
			width: 187rpx;
			height: 166rpx;
			.menu-icon {
				width: 52rpx;
				height: 52rpx;				
			};
			.menu-text {
				width: 96rpx;
				height: 34rpx;
				font-family: PingFang SC, PingFang SC;
				font-weight: 400;
				font-size: 24rpx;
				color: #222222;
				line-height: 28rpx;
				text-align: center;
				font-style: normal;
				text-transform: none;
			}
		}
}

.list {
	width: 700rpx;
	height: 520rpx;
	.list-item {
		width: 700rpx;
		height: 104rpx;
		background: #FFFFFF;
		box-shadow: inset 1rpx 1rpx 2rpx 0rpx #FFFFFF;	
		.list-wrapper {
			display:flex;
			position:relative;
			align-items: center;
			width: 371rpx;
			height: 44rpx;
			.arrow-icon {
				width:40rpx;
				height:40rpx;
			};
			.text-icon {
				width: 128rpx;
				height: 44rpx;
				font-family: PingFang SC, PingFang SC;
				font-weight: 400;
				font-size: 32rpx;
				color: #222222;
				line-height: 38rpx;
				text-align: left;
				font-style: normal;
				text-transform: none;
			};
			.arrowqs {
				position:absolute;
				width:52rpx;
				height:52rpx;
				padding-left:640rpx;
			}
		    
		}
	}	
}

.user-status {
  display: flex;
  align-items: center;
}

.vip-badge {
  
  color: white;
  padding: 2px 5px;
  border-radius: 5px;
  margin-right: 10px;
}

.like-icon {
  width: 20px;
  height: 20px;
}

/* 功能菜单 */
.menu {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-icon {
  width: 30px;
  height: 30px;
}

/* 列表项 */
.list {
  background-color: #fff;
  padding: 10px 0;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.arrow-icon {
  width: 16px;
  height: 16px;
}

/* 底部导航栏 */
.tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #eee;
  background-color: #fff;
}

.tab-icon {
  width: 24px;
  height: 24px;
}

.tab-icon.active {
  color: red;
}
</style>
