<template>
  <view class="container">
    <!-- 顶部导航栏 -->
    <view class="header">
      <view class="back-icon" @click="goBack">
        <!-- <image src="../../static/icons/back.png" /> -->
      </view>
      <text class="header-title">AI 服务</text>
    </view>

    <!-- AI 陪游功能 -->
    <view class="ai-companion-section">
      <view class="companion-header">
        <text class="companion-title">AI 陪游</text>
      </view>
      <view class="chat-box">
        <view
          v-for="(message, index) in chatHistory"
          :key="index"
          :class="['chat-item', message.type]"
        >
          <text>{{ message.content }}</text>
        </view>
      </view>
      <view class="input-box">
        <input
          class="input"
          v-model="userInput"
          placeholder="请输入您的问题"
          @confirm="sendMessage"
        />
        <button class="send-button" @click="sendMessage">发送</button>
      </view>
    </view>

    <!-- AI 导游功能 -->
    <view class="ai-guide-section">
      <view class="guide-header">
        <text class="guide-title">AI 导游</text>
      </view>
      <view class="guide-items">
        <view
          v-for="(item, index) in guideItems"
          :key="index"
          class="guide-item"
          @click="showGuideInfo(item)"
        >
          <text>{{ item.name }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

// AI 陪游功能
const userInput = ref('');
const chatHistory = ref([]);

const sendMessage = () => {
  if (userInput.value.trim() === '') return;
  chatHistory.value.push({ type: 'user', content: userInput.value });
  // 模拟 AI 回答
  setTimeout(() => {
    chatHistory.value.push({
      type: 'ai',
      content: `您好，我是 AI 陪游助手。您问的是：${userInput.value}。`
    });
    userInput.value = '';
  }, 500);
};

// AI 导游功能
const guideItems = ref([
  { id: 1, name: '黄果树瀑布' },
  { id: 2, name: '西江千户苗寨' },
  { id: 3, name: '荔波小七孔' }
]);

const showGuideInfo = (item) => {
  uni.showToast({
    title: `您选择了：${item.name}`,
    icon: 'none'
  });
};

// 返回上一页
const goBack = () => {
  uni.navigateBack({
    delta: 1
  });
};
</script>

<style scoped lang="scss">
$primary-color: #e60012;
$background-color: #f5f5f5;
$font-color: #000;
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

.ai-companion-section {
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;

  .companion-header {
    .companion-title {
      font-size: 18px;
      font-weight: bold;
      color: $font-color;
      margin-bottom: 10px;
    }
  }

  .chat-box {
    height: 200px;
    overflow-y: auto;
    margin-bottom: 10px;

    .chat-item {
      margin-bottom: 10px;

      &.user {
        text-align: right;
        color: $primary-color;
      }

      &.ai {
        text-align: left;
        color: $gray;
      }
    }
  }

  .input-box {
    display: flex;
    align-items: center;

    .input {
      flex: 1;
      height: 40px;
      padding: 0 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-right: 10px;
    }

    .send-button {
      background-color: $primary-color;
      color: #fff;
      border: none;
      border-radius: 4px;
    }
  }
}

.ai-guide-section {
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;

  .guide-header {
    .guide-title {
      font-size: 18px;
      font-weight: bold;
      color: $font-color;
      margin-bottom: 10px;
    }
  }

  .guide-items {
    .guide-item {
      padding: 10px;
      border-bottom: 1px solid #ddd;
      text-align: center;
      cursor: pointer;

      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>