<template>
  <view class="container">
    <!-- 顶部导航栏 -->
    <view class="header">
      <view class="back-icon" @click="goBack">
        <!-- <image src="../../static/icons/back.png" /> -->
      </view>
      <text class="header-title">旅游信息详情</text>
    </view>

    <!-- 旅游信息详情 -->
    <view class="info-section">
      <image class="info-image" :src="touristInfo.image" />
      <view class="info-content">
        <text class="info-title">{{ touristInfo.title }}</text>
        <text class="info-description">{{ touristInfo.description }}</text>
        <view class="info-rating">
          <text class="rating-score">{{ touristInfo.rating }}</text>
          <text class="rating-count">({{ touristInfo.reviewCount }}条评价)</text>
        </view>
      </view>
    </view>

    <!-- 预订表单 -->
    <view class="booking-section">
      <view class="booking-header">
        <text class="booking-title">预订信息</text>
      </view>
      <view class="booking-form">
        <view class="form-item">
          <text class="form-label">姓名</text>
          <input class="form-input" v-model="booking.name" placeholder="请输入您的姓名" />
        </view>
        <view class="form-item">
          <text class="form-label">联系方式</text>
          <input class="form-input" v-model="booking.contact" placeholder="请输入您的联系方式" />
        </view>
        <view class="form-item">
          <text class="form-label">预订日期</text>
          <picker mode="date" v-model="booking.date" class="form-input">
            <view class="picker">{{ booking.date || '请选择日期' }}</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="form-label">人数</text>
          <picker mode="number" v-model="booking.people" class="form-input">
            <view class="picker">{{ booking.people || '请选择人数' }}</view>
          </picker>
        </view>
        <button class="booking-button" @click="submitBooking">提交预订</button>
      </view>
    </view>

    <!-- 相关推荐 -->
    <view class="recommend-section">
      <view class="recommend-header">
        <text class="recommend-title">相关推荐</text>
      </view>
      <view class="recommend-items">
        <view
          class="recommend-item"
          v-for="(item, index) in recommendations"
          :key="index"
          @click="navigateToDetail(item.id)"
        >
          <image :src="item.image" class="recommend-image" />
          <text class="recommend-title">{{ item.title }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// 旅游信息详情
const touristInfo = ref({
  id: route.query.id,
  image: '../../static/home/recommend1.jpg',
  title: '黄果树瀑布',
  description: '黄果树瀑布是中国最大的瀑布，位于贵州省安顺市镇宁布依族苗族自治县黄果树镇。',
  rating: 4.8,
  reviewCount: 5365
});

// 预订信息
const booking = ref({
  name: '',
  contact: '',
  date: '',
  people: ''
});

// 提交预订
const submitBooking = () => {
  console.log('Booking submitted:', booking.value);
  // 这里可以添加提交预订的逻辑，例如发送请求到后端
};

// 相关推荐
const recommendations = ref([
  { id: 1, image: '../../static/home/recommend1.jpg', title: '黄果树瀑布' },
  { id: 2, image: '../../static/home/recommend2.jpg', title: '西江千户苗寨' }
]);

// 返回上一页
const goBack = () => {
  uni.navigateBack({
    delta: 1 // 返回的页面数，如果 delta 大于现有页面数，则返回到首页
  });
};

// 跳转到详情页
const navigateToDetail = (id) => {
  uni.navigateTo({
    url: `/pages/tourist-info?id=${id}`
  });
};
</script>

<style scoped lang="scss">
$primary-color: #e60012;
$background-color: #f5f5f5;
$gray: #888888;
$font-color: #000;

.container {
  padding: 10px;
  background-color: $background-color;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .back-icon {
    margin-right: 10px;
    .back-icon {
      width: 40px;
      height: 40px;
    }
  }

  .header-title {
    font-size: 18px;
    font-weight: bold;
    color: $font-color;
  }
}

.info-section {
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;

  .info-image {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .info-content {
    .info-title {
      font-size: 18px;
      font-weight: bold;
      color: $font-color;
      margin-bottom: 5px;
    }

    .info-description {
      font-size: 14px;
      color: $gray;
      margin-bottom: 10px;
    }

    .info-rating {
      .rating-score {
        font-size: 16px;
        color: $primary-color;
        margin-right: 5px;
      }

      .rating-count {
        font-size: 14px;
        color: $gray;
      }
    }
  }
}

.booking-section {
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;

  .booking-header {
    .booking-title {
      font-size: 18px;
      font-weight: bold;
      color: $font-color;
      margin-bottom: 10px;
    }
  }

  .booking-form {
    .form-item {
      margin-bottom: 10px;

      .form-label {
        font-size: 14px;
        color: $font-color;
        margin-bottom: 5px;
      }

      .form-input {
        width: 100%;
        height: 40px;
        padding: 0 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      .picker {
        width: 100%;
        height: 40px;
        padding: 0 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        display: flex;
        align-items: center;
      }
    }

    .booking-button {
      width: 100%;
      height: 40px;
      background-color: $primary-color;
      color: #fff;
      border: none;
      border-radius: 4px;
      margin-top: 10px;
    }
  }
}

.recommend-section {
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;

  .recommend-header {
    .recommend-title {
      font-size: 18px;
      font-weight: bold;
      color: $font-color;
      margin-bottom: 10px;
    }
  }

  .recommend-items {
    display: flex;
    flex-wrap: wrap;

    .recommend-item {
      width: 48%;
      margin-bottom: 10px;

      .recommend-image {
        width: 100%;
        height: 150px;
        border-radius: 8px;
        margin-bottom: 5px;
      }

      .recommend-title {
        font-size: 14px;
        font-weight: bold;
        color: $font-color;
      }
    }
  }
}
</style>