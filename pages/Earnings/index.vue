<template>
  <view class="container">
    <!-- 顶部部分 -->
	<!-- 基金池部分 -->
	<view class="top">
		<view class="top-left">
			<text class="top-left1">5365</text>
			<text class="top-left2">公益基金池</text>
		</view>
		<view class="top-right">
			<image class="top-right-img" src="../../static/earnings/基金池ic.png" mode=""></image>
		</view>
	</view>
    <view class="body">
		<view class="ranking">
		  <view class="rk1">
			  <view class="rk1l">
				  <text>排行榜</text>
			  </view>
		  </view>
		  <view class="rk2">
			  <text class="rk2-wo">我</text>
			  <view class="rk2mid">
				  <image class="rkimg" src="../../static/home/avatar.png" mode=""></image>
				  <text class="rkname">Ronronner</text>
			  </view>			  
			  <view class="rk2v">
				  <text class="pm">排名</text>
				  <text class="wpm">3</text>
			  </view>
			  
		  </view>
		  <view class="rk3">
			  <text class="rk-id">1</text>
			  <view class="rkr">
				  <image class="rkimg" src="../../static/home/avatar.png" mode=""></image>
				  <text class="rkname">aaa</text>
				  <view class="rkv">
					  <text class="rkv1">10000</text>
					  <text class="rkv2">累计收益</text>
				  </view>
			  </view>
		  </view>
		  <view class="rk4">
			  <text class="rk-id">2</text>
			  <view class="rkr">
				  <image class="rkimg" src="../../static/home/avatar.png" mode=""></image>
				  <text class="rkname">bbb</text>
				  <view class="rkv">
					  <text class="rkv1">10000</text>
					  <text class="rkv2">累计收益</text>
				  </view>
			  </view>
		  </view>
		  <view class="rk5">
			  <text class="rk-id">3</text>
			  <view class="rkr">
				  <image class="rkimg" src="../../static/home/avatar.png" mode=""></image>
				  <text class="rkname">ccc</text>
				  <view class="rkv">
					  <text class="rkv1">10000</text>
					  <text class="rkv2">累计收益</text>
				  </view>
			  </view>
		  </view>
		  <view class="rk6">
			  <text class="rk-id">4</text>
			  <view class="rkr">
				  <image class="rkimg" src="../../static/home/avatar.png" mode=""></image>
				  <text class="rkname">ddd</text>
				  <view class="rkv">
					  <text class="rkv1">10000</text>
					  <text class="rkv2">累计收益</text>
				  </view>
			  </view>
		  </view>
		</view>
		
		<!-- 今日数据 -->
		<view class="today-stats">
		  <view class="ts1">
			  <view class="ts11">
				  <text class="ts-digit">714</text>
				  <text class="ts-str">今日新增达人</text>
			  </view>
			  <view class="ts12">
				  <text class="ts-digit">986</text>
				  <text class="ts-str">今日达人佣金</text>
			  </view>
			  <view class="ts13">
				  <text class="ts-digit">42</text>
				  <text class="ts-str">团队达人总数</text>
			  </view>			  
		  </view>
		  <view class="ts2">
			  <view class="ts21">
				  <text class="ts-digit">181</text>
				  <text class="ts-str">今日收益</text>
			  </view>
			  <view class="ts22">
				  <text class="ts-digit">36</text>
				  <text class="ts-str">累计总收益</text>
			  </view>
		  </view>
		  <view class="ts-bottom">
			  <text id="tsb1">我的收益排名：3</text>
			  <text id="tsb2">第二名累计收益：561325.00</text>
		  </view>
		</view>
		<view class="xunzhang">
			<view class="xz1">
				<view class="xz11">
					<image src="../../static/earnings/Frame.png" mode=""></image>
					<text>勋章名称</text>
				</view>
				<view class="xz12">
					<text>消费等级</text>					
				</view>
			</view>
			<view class="xz2">
				<view class="xz2l">
					<text id="xz2l1">200</text>
					<text id="xz2l2">/500</text>
				</view>
				<view class="xz2r">
					<text class="xz2r1">还差300收益升级为“勋章名称”</text>
				</view>
			</view>
			<view class="xz3">
				<image src="../../static/earnings/Frame 357172.png" mode=""></image>
			</view>
			<view class="xz4">
				<view class="xz4l">
					<text class="xz4up">消费账户</text>
					<text class="xz4down">865132.00</text>
				</view>
				<view class="xz4r">
					<text class="xz4up">提现账户</text>
					<text class="xz4down">865132.00</text>
				</view>
			</view>
		</view>		
		<!-- 旅游达人权益 -->
		<view class="rights">
			<view class="rs1">
				<image class="rs1img" src="../../static/earnings/Frame 357173.png" mode=""></image>
				<text class="rights-title">旅游达人权益</text>
				<image class="rs1img" src="../../static/earnings/Frame 357172.png" mode=""></image>
			</view>
			<view class="rs2">
				<text class="rights-description">旅游达人权益说明旅游达人权益说明...</text>
			</view>
			<view class="rs3">
				<image class="promo-image" src="/static/uni.png"></image>
			</view>
			<view class="team">
				<view class="teaml">
					<image class="teamimg" src="../../static/earnings/Frame(2).png" mode=""></image>
					<text>团队订单</text>
				</view>
				<view class="teamr">
					<image class="teamimg" src="../../static/earnings/Frame(3).png" mode=""></image>
					<text>团队成员</text>
				</view>
			</view>
		</view>
		
		<!-- 收益趋势图 -->
		<view class="earnings-chart">
			<view class="ec1">
				<view class="ec11">
					<text>近七天收益趋势图</text>
				</view>
			</view>
			<view class="ec2">
				<image class="chart-image" src="/static/earnings/Frame(2).png"></image>
			</view>
		</view>
		
	</view>    
  </view>
</template>
<script setup>
import { ref } from 'vue';
const  rankList=ref([
        { avatar: '/static/avatar1.png', name: '齐夜', earnings: '1000.00' },
        { avatar: '/static/avatar2.png', name: 'DAYTOY', earnings: '1000.00' },
        { avatar: '/static/avatar1.png', name: 'Ronronner', earnings: '1000.00' },
        { avatar: '/static/avatar2.png', name: 'DAYTOY', earnings: '1000.00' }
      ])
</script>

<style scoped lang='scss'>
.container {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
  background: linear-gradient(to bottom right, red, transparent);
  /* background: linear-gradient(135deg, red 0%, transparent 100%); */
  .top {
	  width: 750rpx;
	  height: 600rpx;
	  background: linear-gradient( 117deg, #DD2A2D 0%, #FF8175 100%), linear-gradient( 180deg, rgba(248,248,248,0) 0%, #F8F8F8 100%);
	  border-radius: 0rpx 0rpx 0rpx 0rpx;
	  .top-left {
		  display:flex; 
		  flex-direction: column;
		  position:relative;
		  justify-content: center;
		  align-items: center;
		  width: 138rpx;
		  height: 118rpx;
		  padding-left:64rpx;
		  padding-top:172rpx;		  
		  .top-left1 {
		  		  width: 138rpx;
		  		  height: 78rpx;
		  		  font-family: DIN, DIN;
		  		  font-weight: 500;
		  		  font-size: 64rpx;
		  		  color: #FFFFFF;
		  		  line-height: 75rpx;
		  		  text-align: center;
		  		  font-style: normal;
		  		  text-transform: none;
		  };
		  .top-left2 {
		  		  width: 140rpx;
		  		  height: 40rpx;
		  		  font-family: PingFang SC, PingFang SC;
		  		  font-weight: 400;
		  		  font-size: 28rpx;
		  		  color: #FFFFFF;
		  		  line-height: 33rpx;
		  		  text-align: center;
		  		  font-style: normal;
		  		  text-transform: none;
				  padding-left:5rpx;
		  };		  
	  }
  }

}
.top-right {
			  position:absolute;
			  width:234rpx;
			  height:254rpx;
			  left:456rpx;
			  top:108rpx;
}
.body {
	display:flex;
	flex-direction: column;
	position:relative;
	width: 750rpx;
	height: 2810rpx;
	.ranking {
		display:flex;
		position:absolute;
		justify-content: space-between;
		
		width: 702rpx;
		height: 704rpx;
		background: #FFFFFF;
		margin-left:24rpx;
		flex-direction: column;
		border-radius: 12rpx 12rpx 12rpx 12rpx;
		.rkimg {
			width: 48rpx;
			height: 48rpx;			
		};
		.rkname {
			width: 138rpx;
			height: 40rpx;
			font-family: PingFang SC, PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #222222;
			line-height: 33rpx;
			text-align: left;
			font-style: normal;
			text-transform: none;
		}
		.rk-id {
			width: 48rpx;
			height: 54rpx;
			font-family: DIN, DIN;
			font-weight: 500;
			font-size: 44rpx;
			color: #222222;
			line-height: 52rpx;
			text-align: left;
			font-style: normal;
			text-transform: none;
		}
		.rkr {
			margin-left:-250rpx;
			width: 534rpx;
			height: 78rpx;
			display:flex;
			justify-content:space-between;
			align-items: center;
			.rkimg {
				margin-left:-40rpx;
			};
			.rkname {
				margin-left:-180rpx;
			};
			.rkv {
				width: 126rpx;
				height: 78rpx;	
			    display:flex;
				flex-direction: column;
				.rkv1 {
					width: 126rpx;
					height: 44rpx;
					font-family: DIN, DIN;
					font-weight: 500;
					font-size: 36rpx;
					color: #222222;
					line-height: 42rpx;
					text-align: left;
					font-style: normal;
					text-transform: none;
				};
				.rkv2 {
					width: 96rpx;
					height: 34rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					font-size: 24rpx;
					color: #888888;
					line-height: 28rpx;
					text-align: right;
					font-style: normal;
					text-transform: none;
				}
			}
			
		}
		.rk1 {
			width: 654rpx;
			height: 90rpx;
			/* position:absolute; */
			
			.rk1l {
				width: 602rpx;
				height: 58rpx;
				margin-left:24rpx;
				margin-top:24rpx;
				text {
					width: 108rpx;
					height: 50rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 600;
					font-size: 36rpx;
					color: #222222;
					line-height: 42rpx;
					text-align: left;
					font-style: normal;
					text-transform: none;
				}
			}
			
		};
		.rk2 {
			width: 654rpx;
			height: 110rpx;
			display:flex;
			justify-content:space-between;
			align-items: center;
			background: rgba(230,0,18,0.04);
			border-radius: 12rpx 12rpx 12rpx 12rpx;
			margin-left:24rpx;
			.rk2-wo {
				width: 44rpx;
				height: 62rpx;
				font-family: PingFang SC, PingFang SC;
				font-weight: 500;
				font-size: 44rpx;
				color: #222222;
				line-height: 52rpx;
				text-align: left;
				font-style: normal;
				text-transform: none;
			};
			.rk2mid {
				width: 210rpx;
				height: 48rpx;
				display:flex;
				justify-content:space-between;
				align-items: center;
				margin-left:-250rpx;
				
			};
			.rk2v {
				width: 84rpx;
				height: 62rpx;
				display:flex;
				justify-content:space-between;
				align-items: center;
				.pm {
					width: 48rpx;
					height: 34rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					font-size: 24rpx;
					color: #222222;
					line-height: 28rpx;
					text-align: left;
					font-style: normal;
					text-transform: none;
				};
				.wpm {
					width: 28rpx;
					height: 62rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 500;
					font-size: 44rpx;
					color: #E60012;
					line-height: 52rpx;
					text-align: left;
					font-style: normal;
					text-transform: none;
				}
			}
		};
		.rk3 {
			width: 654rpx;
			height: 110rpx;
			display:flex;
			justify-content:space-between;
			align-items: center;			
			border-radius: 12rpx 12rpx 12rpx 12rpx;
			margin-left:24rpx;
		};
		.rk4 {
			width: 654rpx;
			height: 110rpx;
			display:flex;
			justify-content:space-between;
			align-items: center;			
			border-radius: 12rpx 12rpx 12rpx 12rpx;
			margin-left:24rpx;
		};
		.rk5 {
			width: 654rpx;
			height: 110rpx;
			display:flex;
			justify-content:space-between;
			align-items: center;			
			border-radius: 12rpx 12rpx 12rpx 12rpx;
			margin-left:24rpx;
		};
		.rk6 {
			width: 654rpx;
			height: 110rpx;
			display:flex;
			justify-content:space-between;
			align-items: center;			
			border-radius: 12rpx 12rpx 12rpx 12rpx;
			margin-left:24rpx;
		};		
	};
	.today-stats {
		position:absolute;
		width: 702rpx;
		height: 440rpx;
		background: #FFFFFF;
		border-radius: 12rpx 12rpx 12rpx 12rpx;
		margin-left:24rpx;
		margin-top:750rpx;
		.ts1 {
			width: 654rpx;
			height: 152rpx;
			display:flex;
			justify-content: space-between;
			align-items: center;			
			border-radius: 12rpx 12rpx 12rpx 12rpx;
			border: 2rpx solid #EEEEEE;
			margin-left:24rpx;
			.ts11 {
				width: 218rpx;
				height: 152rpx;
				display:flex;
				flex-direction: column;
				justify-content: center;
				align-items: center; 
				border-radius: 12rpx 12rpx 12rpx 12rpx;
				.ts-digit {
					width: 84rpx;
					height: 62rpx;
					font-family: DIN, DIN;
					font-weight: 500;
					font-size: 52rpx;
					color: #222222;
					line-height: 61rpx;
					text-align: center;
					font-style: normal;
					text-transform: none;
				};
				.ts-str {
					width: 144rpx;
					height: 34rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					font-size: 24rpx;
					color: #888888;
					line-height: 28rpx;
					text-align: center;
					font-style: normal;
					text-transform: none;
				}
			};
			.ts12 {
				width: 218rpx;
				height: 152rpx;
				display:flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border-radius: 12rpx 12rpx 12rpx 12rpx;
				width: 144rpx;
				height: 34rpx;
				font-family: PingFang SC, PingFang SC;
				font-weight: 400;
				font-size: 24rpx;
				color: #888888;
				line-height: 28rpx;
				text-align: center;
				font-style: normal;
				text-transform: none;
				.ts-digit {
					width: 84rpx;
					height: 62rpx;
					font-family: DIN, DIN;
					font-weight: 500;
					font-size: 52rpx;
					color: #222222;
					line-height: 61rpx;
					text-align: center;
					font-style: normal;
					text-transform: none;
				};
				.ts-str {
					width: 144rpx;
					height: 34rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					font-size: 24rpx;
					color: #888888;
					line-height: 28rpx;
					text-align: center;
					font-style: normal;
					text-transform: none;
				}
			};
			.ts13 {
				width: 218rpx;
				height: 152rpx;
				display:flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border-radius: 12rpx 12rpx 12rpx 12rpx;
				.ts-digit {
					width: 84rpx;
					height: 62rpx;
					font-family: DIN, DIN;
					font-weight: 500;
					font-size: 52rpx;
					color: #222222;
					line-height: 61rpx;
					text-align: center;
					font-style: normal;
					text-transform: none;
				};
				.ts-str {
					width: 144rpx;
					height: 34rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					font-size: 24rpx;
					color: #888888;
					line-height: 28rpx;
					text-align: center;
					font-style: normal;
					text-transform: none;
				}
			}
		};
		.ts2 {
			width: 654rpx;
			height: 152rpx;
			display:flex;
			justify-content: space-between;
			align-items: center;
			border-radius: 12rpx 12rpx 12rpx 12rpx;
			border: 2rpx solid #EEEEEE;
			margin-top:15rpx;
			margin-left:24rpx;
			.ts21 {
				width: 327rpx;
				height: 152rpx;
				display:flex;
				flex-direction: column;
				justify-content: center;
				align-items: center; 
				border-radius: 12rpx 12rpx 12rpx 12rpx;
				.ts-digit {
					width: 84rpx;
					height: 62rpx;
					font-family: DIN, DIN;
					font-weight: 500;
					font-size: 52rpx;
					color: #222222;
					line-height: 61rpx;
					text-align: center;
					font-style: normal;
					text-transform: none;
				};
				.ts-str {
					width: 144rpx;
					height: 34rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					font-size: 24rpx;
					color: #888888;
					line-height: 28rpx;
					text-align:center;
					font-style: normal;
					text-transform: none;
				}
			};
			.ts22 {
				width: 327rpx;
				height: 152rpx;
				display:flex;
				flex-direction: column;
				justify-content: center;
				align-items: center; 
				border-radius: 12rpx 12rpx 12rpx 12rpx;
				.ts-digit {
					width: 84rpx;
					height: 62rpx;
					font-family: DIN, DIN;
					font-weight: 500;
					font-size: 52rpx;
					color: #222222;
					line-height: 61rpx;
					text-align: center;
					font-style: normal;
					text-transform: none;
				};
				.ts-str {
					width: 144rpx;
					height: 34rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					font-size: 24rpx;
					color: #888888;
					line-height: 28rpx;
					text-align: center;
					font-style: normal;
					text-transform: none;
				}
			}
		};
		.ts-bottom {
			width: 654rpx;
			height: 40rpx;
			margin-left:24rpx;
			padding-top:15rpx;
			justify-content:space-between;
			#tsb1 {
				width: 214rpx;
				height: 40rpx;
				font-family: PingFang SC, PingFang SC;
				font-weight: 400;
				font-size: 28rpx;
				color: #222222;
				line-height: 33rpx;
				text-align: left;
				font-style: normal;
				text-transform: none;
			};
			#tsb2 {
				padding-left:70rpx;
				width: 362rpx;
				height: 40rpx;
				font-family: PingFang SC, PingFang SC;
				font-weight: 400;
				font-size: 28rpx;
				color: #222222;
				line-height: 33rpx;
				text-align: left;
				font-style: normal;
				text-transform: none;
			}
		}
	};
}
.xunzhang {
		width: 702rpx;
		height: 372rpx;
		background: #FFFFFF;
		position:absolute;
		margin-top:1200rpx;
		margin-left:24rpx;
		border-radius: 12rpx 12rpx 12rpx 12rpx;
		.xz1 {
			width: 702rpx;
			height: 224rpx;
			background: #E60012;
			border-radius: 12rpx 12rpx 12rpx 12rpx;
			display:flex;			
			position:relative;
			justify-content: space-between;
			align-items: center;			
			
			.xz11 {
				width: 172rpx;
				height: 48rpx;
				display:flex;
				justify-content: space-between;
				align-items: center;
				margin-top:-120rpx;
				padding-left:32rpx;
			    image {
					width:48rpx;
					height:48rpx;
				};
				text {
					width: 116rpx;
					height: 42rpx;
					position:absolute;
					white-space: nowrap;
					font-family: YouSheBiaoTiYuan, YouSheBiaoTiYuan;
					font-weight: 400;
					font-size: 32rpx;
					color: #FFFFFF;
					line-height: 38rpx;
					text-align: left;
					font-style: normal;
					text-transform: none;
					margin-left:48rpx;
				}
			};
			.xz12 {
				width: 96rpx;
				height: 34rpx;
				font-family: PingFang SC, PingFang SC;
				font-weight: 400;
				font-size: 24rpx;
				color: #FFFFFF;
				line-height: 28rpx;				
				text-align: right;
				font-style: normal;
				text-transform: none;
				margin-top:-110rpx;
				margin-right:20rpx;
			}
		};
		.xz2 {
			width: 702rpx;
			height: 148rpx;
			border-radius: 12rpx 12rpx 12rpx 12rpx;
			display:flex;
			position:relative;
			justify-content: space-between;
			align-items: center;
			margin-top:-180rpx;
			margin-left:40rpx;
		    .xz2l {
				width: 102rpx;
				height: 40rpx;				
				#xz2l1 {
					width: 52rpx;
					height: 40rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 500;
					font-size: 28rpx;
					color: #FFFFFF;
					line-height: 33rpx;
					text-align: center;
					font-style: normal;
					text-transform: none;
				};
				#xz2l2 {
					width: 46rpx;
					height: 28rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					font-size: 20rpx;
					color: #FFFFFF;
					line-height: 23rpx;
					text-align: center;
					font-style: normal;
					text-transform: none;
				}
			};
			.xz2r {			
					width: 308rpx;
					height: 28rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					font-size: 20rpx;
					color: #FFFFFF;
					line-height: 23rpx;
					text-align: left;
					font-style: normal;
					text-transform: none;
					white-space: nowrap;
					padding-right:40rpx;
			}
		};
		.xz3 {
			width: 638rpx;
			height: 8rpx;
			background: #FFFFFF;
			border-radius: 1998rpx 1998rpx 1998rpx 1998rpx;
			opacity: 0.4;
			margin-left:32rpx;
			image {
				width:638rpx;
				height:8rpx;
			}
		};
		.xz4 {
			width: 702rpx;
			height: 148rpx;
			border-radius: 12rpx 12rpx 12rpx 12rpx;
			display:flex;
			position:relative;
			justify-content: space-between;
			align-items: center;
			margin-left:32rpx;
			margin-top:50rpx;
			.xz4l {
				width: 351rpx;
				height: 148rpx;
				border-radius: 12rpx 12rpx 12rpx 12rpx;
				display:flex;
				flex-direction: column;
			};
			.xz4r {
				width: 351rpx;
				height: 148rpx;
				border-radius: 12rpx 12rpx 12rpx 12rpx;
				display:flex;
				flex-direction: column;
			};
			.xz4up {
				width: 96rpx;
				height: 34rpx;
				font-family: PingFang SC, PingFang SC;
				font-weight: 400;
				font-size: 24rpx;
				color: #888888;
				line-height: 28rpx;
				text-align: left;
				font-style: normal;
				text-transform: none;
			};
			.xz4down {
				width: 220rpx;
				height: 58rpx;
				font-family: DIN, DIN;
				font-weight: 500;
				font-size: 48rpx;
				color: #222222;
				line-height: 56rpx;
				text-align: left;
				font-style: normal;
				text-transform: none;
			}
		}
		
		
	}
.rights {
	width: 702rpx;
	height: 672rpx;
	background: #FFFFFF;
	position:absolute;
	margin-top:1600rpx;
	margin-left:24rpx;
	border-radius: 12rpx 12rpx 12rpx 12rpx;
	.rs1 {
		width: 654rpx;
		height: 44rpx;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		display:flex;
		justify-content: center;
		align-items: center;
		.rs1img {
			width:20rpx;
			height:20rpx;
		};
		text {
			width: 190rpx;
			height: 44rpx;
			font-family: PingFang SC, PingFang SC;
			font-weight: 500;
			font-size: 32rpx;
			color: #E60012;
			line-height: 38rpx;
			text-align: left;
			font-style: normal;
			text-transform: none;
			white-space: nowrap;
			padding-left:15rpx;
			padding-right:15rpx;
		}
	};
	.rs2 {
		width: 654rpx;
		height: 40rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		color: #222222;
		line-height: 33rpx;
		text-align: center;
		font-style: normal;
		text-transform: none;
	};
	.rs3 {
		width:654rpx;
		height:368rpx;
	};
	.team {
		width: 654rpx;
		height: 100rpx;
		background: #FFFFFF;
		display:flex;
		justify-content: center;
		align-items: center;
		image {
			width:52rpx;
			height:52rpx;
		};
		text {
			width: 112rpx;
			height: 40rpx;
			font-family: PingFang SC, PingFang SC;
			font-weight: 400;
			font-size: 28rpx;
			color: #222222;
			line-height: 33rpx;
			text-align: center;
			font-style: normal;
			text-transform: none;
		};
		.teaml {
			width: 327rpx;
			height: 100rpx;
			display:flex;			
			justify-content: center;
			align-items: center;
		};
		.teamr {
			width: 327rpx;
			height: 100rpx;	
			display:flex;			
			justify-content: center;
			align-items: center;
		}
	}
}
.earnings-chart {
	width: 702rpx;
	height: 478rpx;
	background: #FFFFFF;
	position:absolute;
	margin-top:2400rpx;
	margin-left:24rpx;
	border-radius: 12rpx 12rpx 12rpx 12rpx;
	.ec1 {
		width: 654rpx;
		height: 90rpx;
		.ec11 {
			width: 602rpx;
			height: 58rpx;
		    text {
				width: 288rpx;
				height: 50rpx;
				font-family: PingFang SC, PingFang SC;
				font-weight: 600;
				font-size: 36rpx;
				color: #222222;
				line-height: 42rpx;
				text-align: left;
				font-style: normal;
				text-transform: none;
			}
		}
	};
	.ec2 {
		width:654rpx;
		height:400rpx;
	}
}
.time {
  font-size: 18px;
  color: #fff;
}

.settings-icon {
  width: 24px;
  height: 24px;
}

.fund-pool {
  position: relative;
  text-align: center;
  background-color: #f44;
  padding: 20px 0;
}

.fund-amount {
  font-size: 40px;
  color: #fff;
}

.fund-label {
  font-size: 16px;
  color: #fff;
}

.fund-bg {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 80px;
  height: 80px;
}



.ranking-title {
  font-size: 18px;
  font-weight: bold;
}

.ranking-list {
  margin-top: 10px;
}

.my-rank {
  display: flex;
  justify-content: space-between;
  background-color: #fee;
  padding: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.accounts {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f8f8f8;
}

.account {
  text-align: center;
}

.rights {
  padding: 20px;
}

.rights-title {
  font-size: 16px;
  font-weight: bold;
}

.promo-image {
  width: 100%;
  margin-top: 10px;
}

.earnings-chart {
  padding: 20px;
}

.chart-image {
  width: 100%;
}

.tab-bar {
  display: flex;
  justify-content: space-around;
  padding: 10px;
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
