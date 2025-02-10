<template>
  <view class="container">
    <!-- 顶部导航栏 -->
    <view class="header">
      <view class="back-icon" @click="goBack">
        <!-- <image src="../../static/icons/back.png" /> -->
      </view>
      <text class="header-title">行程规划</text>
    </view>

    <!-- 行程规划表单 -->
    <view class="planning-section">
      <view class="form-item">
        <text class="form-label">出发地</text>
        <input class="form-input" v-model="planning.departure" placeholder="请输入出发地" />
      </view>
      <view class="form-item">
        <text class="form-label">目的地</text>
        <input class="form-input" v-model="planning.destination" placeholder="请输入目的地" />
      </view>
      <view class="form-item">
        <text class="form-label">出发日期</text>
        <picker mode="date" v-model="planning.startDate" class="form-input">
          <view class="picker">{{ planning.startDate || '请选择日期' }}</view>
        </picker>
      </view>
      <view class="form-item">
        <text class="form-label">返回日期</text>
        <picker mode="date" v-model="planning.endDate" class="form-input">
          <view class="picker">{{ planning.endDate || '请选择日期' }}</view>
        </picker>
      </view>
      <view class="form-item">
        <text class="form-label">预算</text>
        <input class="form-input" v-model="planning.budget" placeholder="请输入预算" />
      </view>
      <view class="form-item">
        <text class="form-label">人数</text>
        <picker mode="number" v-model="planning.people" class="form-input">
          <view class="picker">{{ planning.people || '请选择人数' }}</view>
        </picker>
      </view>
      <button class="planning-button" @click="submitPlanning">提交行程</button>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

// 行程规划表单数据
const planning = ref({
  departure: '',
  destination: '',
  startDate: '',
  endDate: '',
  budget: '',
  people: ''
});

// 提交行程规划
const submitPlanning = () => {
  console.log('Planning submitted:', planning.value);
  // 这里可以添加提交行程规划的逻辑，例如发送请求到后端
};

// 返回上一页
const goBack = () => {
  uni.navigateBack({
    delta: 1 // 返回的页面数，如果 delta 大于现有页面数，则返回到首页
  });
};
</script>

<style scoped lang="scss">
$primary-color: #e60012;
$background-color: #f5f5f5;
$font-color: #000; // 添加字体颜色变量
$gray: #888888;

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

.planning-section {
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;

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

  .planning-button {
    width: 100%;
    height: 40px;
    background-color: $primary-color;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin-top: 10px;
  }
}
</style>