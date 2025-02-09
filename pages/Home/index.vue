<template>
  <view class="container">
    <!-- Top banner with offer -->
    <view class="banner">
      <swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
        <swiper-item v-for="(item, index) in swiperItems" :key="index">
          <image class="swiper-image" :src="item.src" />
        </swiper-item>
      </swiper>
    </view>

    <!-- Tab Bar -->
    <view class="tab-bar">
      <view
        class="tab-item"
        :class="{ active: tabChange === true }"
        @click="tabChange = true"
      >
        <text id="jiudian">酒店</text>
      </view>
      <view
        class="tab-item"
        :class="{ active: tabChange === false }"
        @click="tabChange = false"
      >
        <text id="minsu">民宿</text>
      </view>
      <view class="divider"></view>
    </view>

    <!-- Tab Content -->
    <view v-if="tabChange === true" class="tab-content">
      <!-- Date Picker -->
      <view class="date-picker">
        <text class="nearBy">北京，朝阳区中国大厦附近</text>
        <image class="rightArrow1" src="../../static/home/rightArrow.png" />
        <text class="currentLoc">当前位置</text>
        <image
          class="locationImg"
          @click="getCurrentLocation"
          src="../../static/home/currpos.png"
        />
      </view>

      <!-- Dates -->
      <view class="dates">
        <!-- Start Date -->
        <picker mode="date" @change="onStartDateChange">
          <view class="picker">
            <view class="jyjr">
              <text class="month">{{ startDate.month }}</text>
              <text class="yue">月</text>
              <text class="day">{{ startDate.day }}</text>
              <text class="ri">日</text>
            </view>
          </view>
        </picker>
        <text class="tian">今天</text>

        <!-- Date Divider -->
        <view class="date-divider">
          <view class="line">-</view>
          <view class="label">
            <view class="digit-str">
              <text>1</text>
              <text class="wan">{{ labelText }}</text>
            </view>
          </view>
          <view class="line">-</view>
        </view>

        <!-- End Date -->
        <picker mode="date" :start="startDate || '1970-01-01'" @change="onEndDateChange">
          <view class="picker">
            <view class="jyjr">
              <text class="month month2">{{ endDate.month }}</text>
              <text class="yue yue2">月</text>
              <text class="day day2">{{ endDate.day }}</text>
              <text class="ri ri2">日</text>
            </view>
          </view>
        </picker>
        <text class="tian">明天</text>
        <image class="rightArrow2" src="../../static/home/rightArrow.png" />
      </view>

      <!-- Search Button -->
      <view class="searchButton">
        <button @click="search" class="btn-search">
          <text class="chaxun">查询</text>
        </button>
      </view>

      <!-- Hot Store -->
      <view class="hotStore">
        <navigator url="../../pages/foods/index">
          <image src="../../static/home/tjmd.png" class="hotStore-left" />
          <text class="hotStore-right">门店名称</text>
        </navigator>
      </view>

      <!-- Services -->
      <view class="services">
        <view class="service-item">
          <image class="services-icon" src="../../static/home/movieTicket.png" />
          <text class="services-text">特惠电影票</text>
        </view>
        <view class="service-item">
          <image class="services-icon" src="../../static/home/airTicket.png" />
          <text class="services-text">机票</text>
        </view>
        <view class="service-item">
          <image class="services-icon" src="../../static/home/trainTicket.png" />
          <text class="services-text">火车票</text>
        </view>
        <view class="service-item">
          <image class="services-icon" src="../../static/home/trip.png" />
          <text class="services-text">旅游</text>
        </view>
      </view>

      <!-- Local Recommendation -->
      <view class="localRecommend">
        <view class="lrHeader">
          <text class="lrHeaderLeft">当地推荐</text>
          <text class="lrHeaderRight">查看更多</text>
          <image class="lrHeaderLeftRightArrow3" src="../../static/home/rightArrow.png" />
        </view>
        <view class="lrBody">
          <view class="lrBody-left">
            <image class="lrBody-leftImg" src="../../static/home/hotel4.png" />
          </view>
          <view class="lrBody-right">
            <view class="lrBody-right1">
              <text class="lrBody-right1-text">民俗名称</text>
            </view>
            <view class="lrBody-right2">
              <text class="lr2-1">标签一</text>
              <text class="lr2-2">标签二</text>
              <text class="lr2-3">游记(56130)</text>
            </view>
            <view class="lrBody-right3">
              <text class="lr3-1">距您0.3km</text>
              <text class="lr3-2">美团</text>
              <text class="lr3-3">&dollar;</text>
              <text class="lr3-4">80.00</text>
              <text class="lr3-5">起</text>
            </view>
            <view class="lrBody-right4">
              <text class="lr4-1">5.0</text>
              <text class="lr4-2">分</text>
              <text class="lr4-3">5365人评价</text>
              <text class="lr4-4">佣金</text>
              <text class="lr4-5">&dollar;</text>
              <text class="lr4-6">26.32</text>
            </view>
            <view class="lrBody-right5">
              <text class="lr5-1">这是地址信息</text>
            </view>
          </view>
        </view>
      </view>

      <!-- Hotel List -->
      <view class="recommendations">
        <view class="rec_cate">
          <text
            class="cate_item"
            v-for="(cate, index) in cates"
            :key="index"
            :class="{ active: activeIndex === index }"
            @click="activeIndex = index"
          >
            {{ cate.name }}
          </text>
        </view>
        <view v-if="activeIndex === 1" class="rec_hotels">
          <view class="rec-item" v-for="hotel in hotels" :key="hotel.id">
            <view class="items">
              <image :src="hotel.image" class="hotel-img" />
              <text class="hotel-name">{{ hotel.desc }}</text>
              <view class="bottom_profile">
                <image class="bt_img" :src="hotel.pic" mode="" />
                <text class="bt_text">{{ hotel.peoplename }}</text>
                <image class="bt_mid_img" :src="hotel.sc_pic" mode="" />
                <text class="bt_sc_number">{{ hotel.sc_count }}</text>
              </view>
            </view>
            <view class="hotel-info"></view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const tabChange = ref(true);
const current = ref(0);
const startDate = ref({
  year: '',
  month: '',
  day: '',
});
const endDate = ref({
  year: '',
  month: '',
  day: '',
});
const labelText = ref('晚');
const error = ref('');
const activeIndex = ref(0);
const swiperItems = ref([
  { src: '../../static/home/banner.png' },
  { src: '../../static/home/banner.png' },
  { src: '../../static/home/banner.png' },
]);
const location = ref(null);
const cates = ref([
  { id: 1, name: '民宿' },
  { id: 2, name: '酒店' },
  { id: 3, name: '旅馆' },
  { id: 4, name: '青旅' },
]);
const hotels = ref([
  {
    id: 1,
    desc: '民宿名称1',
    image: '../../static/home/hotel1.png',
    price: 80,
    peoplename: '陈先生',
    sc_count: 5365,
    pic: '../../static/home/avatar.png',
    sc_pic: '../../static/home/uncollected.png',
  },
  {
    id: 2,
    desc: '民宿名称2',
    image: '../../static/home/hotel2.png',
    price: 80,
    peoplename: '李小姐',
    sc_count: 8888,
    pic: '../../static/home/avatar.png',
    sc_pic: '../../static/home/uncollected.png',
  },
]);

onMounted(() => {
  setDefaultDates();
});

function setDefaultDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  startDate.value = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  };
  endDate.value = {
    year: tomorrow.getFullYear(),
    month: tomorrow.getMonth() + 1,
    day: tomorrow.getDate(),
  };
}

function onStartDateChange(e) {
  const selectedDate = e.detail.value;
  startDate.value = {
    year: selectedDate.split('-')[0],
    month: parseInt(selectedDate.split('-')[1], 10),
    day: parseInt(selectedDate.split('-')[2], 10),
  };

  if (endDate.value && new Date(endDate.value.year, endDate.value.month - 1, endDate.value.day) < new Date(selectedDate)) {
    endDate.value = { year: '', month: '', day: '' };
  }
}

function onEndDateChange(e) {
  const selectedDate = e.detail.value;
  endDate.value = {
    year: selectedDate.split('-')[0],
    month: parseInt(selectedDate.split('-')[1], 10),
    day: parseInt(selectedDate.split('-')[2], 10),
  };

  if (startDate.value && new Date(selectedDate) < new Date(startDate.value.year, startDate.value.month - 1, startDate.value.day)) {
    endDate.value = { year: '', month: '', day: '' };
  }
}

function search() {
  if (!startDate.value || !endDate.value) {
    error.value = '请先选择开始和结束日期';
    return;
  }
  if (new Date(endDate.value.year, endDate.value.month - 1, endDate.value.day) < new Date(startDate.value.year, startDate.value.month - 1, startDate.value.day)) {
    error.value = '结束日期不能早于开始日期';
    return;
  }
  console.log('搜索功能未实现');
}

function getCurrentLocation() {
  console.log('获取当前位置功能未实现');
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
  padding-bottom: 60px; /* 为底部导航留出空间 */
  background-color: $background-color;
}

.banner {
  position: relative;
  .swiper {
    width: 100%;
    height: 200px;
    .swiper-image {
      width: 100%;
      height: 100%;
    }
  }
}

.tab-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid $light-gray;
  padding: 10px 20px;

  .tab-item {
    flex: 1;
    text-align: center;
    padding: 10px 0;
    font-size: 16px;
    color: $gray;

    &.active {
      color: $primary-color;
      border-bottom: 2px solid $primary-color;
    }
  }
}

.tab-content {
  padding: 10px;

  .date-picker {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .nearBy {
      font-size: 14px;
      color: $font-color;
    }

    .currentLoc {
      font-size: 12px;
      color: $gray;
    }

    .locationImg {
      width: 24px;
      height: 24px;
    }

    .rightArrow1 {
      width: 24px;
      height: 24px;
    }
  }
	
  .dates {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      padding: 10px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	
	.rightArrow2 {
	  width: 24px;
	  height: 24px;
	}
    .month,
    .day {
      font-size: 16px;
      font-weight: bold;
      color: $font-color;
    }

    .yue,
    .ri {
      font-size: 14px;
      color: $gray;
    }

    .tian {
      font-size: 12px;
      color: $gray;
    }

    .date-divider {
      display: flex;
      align-items: center;
      .line {
        width: 2px;
        height: 20px;
        background-color: $light-gray;
        margin: 0 10px;
      }

      .label {
        font-size: 14px;
        color: $gray;
      }
    }
  }

  .searchButton {
    margin-top: 10px;
    .btn-search {
      width: 100%;
      background-color: $primary-color;
      color: #ffffff;
      font-size: 16px;
      padding: 10px;
      border-radius: 5px;
    }
  }

  .hotStore {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .hotStore-left {
    	width:126rpx;
    	height:44rpx;
    	padding-left:24rpx;
    }

    .hotStore-right {
      font-size: 14px;
      color: $gray;
    }
  }

  .services {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .service-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .services-icon {
        width: 40px;
        height: 40px;
      }

      .services-text {
        font-size: 14px;
        color: $font-color;
        margin-top: 5px;
      }
    }
  }

  .localRecommend {
    margin-top: 10px;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .lrHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      .lrHeaderLeft {
        font-size: 16px;
        font-weight: bold;
        color: $font-color;
      }

      .lrHeaderRight {
        font-size: 14px;
        color: $gray;
      }

      .lrHeaderLeftRightArrow3 {
        width: 24px;
        height: 24px;
      }
    }

    .lrBody {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .lrBody-left {
        .lrBody-leftImg {
          width: 80px;
          height: 80px;
          border-radius: 4px;
        }
      }

      .lrBody-right {
        flex: 1;
        margin-left: 10px;

        .lrBody-right1-text {
          font-size: 14px;
          font-weight: bold;
          color: $font-color;
        }

        .lrBody-right2 {
          display: flex;
          flex-wrap: wrap;
          margin-top: 5px;

          .lr2-1,
          .lr2-2,
          .lr2-3 {
            font-size: 12px;
            color: $gray;
            margin-right: 5px;
          }
        }

        .lrBody-right3 {
          display: flex;
          align-items: center;
          margin-top: 5px;

          .lr3-1,
          .lr3-2,
          .lr3-3,
          .lr3-4,
          .lr3-5 {
            font-size: 12px;
            color: $gray;
            margin-right: 5px;
          }
        }

        .lrBody-right4 {
          display: flex;
          align-items: center;
          margin-top: 5px;

          .lr4-1,
          .lr4-2,
          .lr4-3,
          .lr4-4,
          .lr4-5,
          .lr4-6 {
            font-size: 12px;
            color: $gray;
            margin-right: 5px;
          }
        }

        .lrBody-right5 {
          margin-top: 5px;
          font-size: 12px;
          color: $gray;
        }
      }
    }
  }

  .recommendations {
    margin-top: 10px;

    .rec_cate {
      display: flex;
      justify-content: space-around;
      margin-bottom: 10px;

      .cate_item {
        font-size: 14px;
        color: $gray;
        padding: 5px 10px;
        border-radius: 5px;

        &.active {
          background-color: $primary-color;
          color: #ffffff;
        }
      }
    }

    .rec_hotels {
      .rec-item {
        display: flex;
        margin-bottom: 10px;
        padding: 10px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        .items {
          flex: 1;

          .hotel-img {
            width: 80px;
            height: 80px;
            border-radius: 4px;
          }

          .hotel-name {
            font-size: 14px;
            font-weight: bold;
            color: $font-color;
            margin-top: 5px;
          }

          .bottom_profile {
            display: flex;
            align-items: center;
            margin-top: 5px;

            .bt_img {
              width: 24px;
              height: 24px;
              border-radius: 50%;
            }

            .bt_text {
              font-size: 12px;
              color: $gray;
              margin-left: 5px;
            }

            .bt_mid_img {
              width: 24px;
              height: 24px;
            }

            .bt_sc_number {
              font-size: 12px;
              color: $gray;
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
}
</style>