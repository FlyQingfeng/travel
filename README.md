
# Travel App - 一站式旅游电商平台

## 项目简介

​`Travel App`​ 是一个基于 uni-app 框架开发的旅游电商平台，支持多平台运行（H5、小程序、App）。它提供了丰富的旅游产品展示、预订功能，并支持用户管理、订单管理等核心功能。通过 uni-app 的跨平台特性，开发者可以一次编写代码，同时部署到多个平台。

## 开发环境准备

### 1. 安装 HBuilder X

HBuilder X 是 uni-app 官方推荐的开发工具，支持 uni-app 项目的开发和调试。请按照以下步骤安装 HBuilder X：

1. 访问 [DCloud 官方网站](https://www.dcloud.io/hbuilderx.html)。
2. 下载并安装 HBuilder X。
3. 启动 HBuilder X。

### 2. 安装 Node.js 和 npm

uni-app 项目依赖 Node.js 和 npm 来管理项目依赖。请确保已安装 Node.js 和 npm：

1. 访问 [Node.js 官方网站](https://nodejs.org/)。
2. 下载并安装 Node.js（推荐安装 LTS 版本）。
3. 打开终端或命令行工具，运行以下命令以验证安装：  
    bash复制

    ```bash
    node -v
    npm -v
    ```

### 3. 安装 uni-app CLI

uni-app 提供了一个命令行工具，用于快速初始化和管理项目。运行以下命令安装 uni-app CLI：

bash复制

```bash
npm install -g @dcloudio/uni-cli
```

## 项目导入与运行

### 1. 克隆项目

通过 Git 克隆项目到本地：

bash复制

```bash
git clone https://github.com/FlyQingfeng/travel.git
cd travel
```

### 2. 安装项目依赖

在项目根目录下运行以下命令安装项目依赖：

bash复制

```bash
npm install
```

### 3. 启动开发服务器

运行以下命令启动开发服务器：

bash复制

```bash
npm run dev
```

HBuilder X 会自动打开一个浏览器窗口，访问 `http://localhost:8080`​，您将看到项目的运行效果。

## 开发指南

### 1. 项目结构

以下是项目的目录结构说明：

复制

```
travel/
├── pages/                # 页面组件目录
├── components/           # 可复用的 Vue 组件目录
├── static/               # 静态资源目录（图片、字体等）
├── App.vue               # 应用的全局配置文件
├── main.js               # Vue 的初始化入口文件
├── manifest.json         # 应用基本信息配置文件
├── pages.json            # 页面路由配置文件
├── package.json          # 项目依赖配置文件
├── README.md             # 项目说明文件
```

### 2. 页面开发

在 `pages`​ 目录下创建新的页面文件（`.vue`​ 文件），并按照 Vue.js 的语法编写页面逻辑。

### 3. 组件开发

在 `components`​ 目录下创建新的组件文件（`.vue`​ 文件），并按照 Vue.js 的语法编写组件逻辑。

### 4. 静态资源管理

将图片、字体等静态资源放在 `static`​ 目录下，通过相对路径引用这些资源。

### 5. 调试与测试

使用 HBuilder X 的调试工具进行页面调试和测试。uni-app 支持在浏览器、小程序模拟器和真实设备上进行调试。

## 常见问题

### 1. 端口冲突

如果开发服务器默认端口（8080）被占用，可以通过修改 `manifest.json`​ 中的 `h5`​ 配置来指定其他端口：

JSON复制

```json
"h5": {
  "devServer": {
    "proxy": {
      "/api": {
        "target": "http://localhost:8080",
        "changeOrigin": true
      }
    },
    "port": 8081
  }
}
```

### 2. 依赖安装失败

如果在安装依赖时遇到问题，请尝试以下方法：

* 清除 `node_modules`​ 目录和 `package-lock.json`​ 文件，重新运行 `npm install`​。
* 使用淘宝镜像安装依赖：  
  bash复制

  ```bash
  npm install --registry=https://registry.npm.taobao.org
  ```

## 联系方式

如果在开发过程中遇到任何问题，欢迎通过以下方式联系开发者：

* **GitHub Issues**：在项目页面提交 Issues。
* **邮箱**：2758534648@qq.com

感谢您使用 `Travel App`​ 模板，祝您开发愉快！
