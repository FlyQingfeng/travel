"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      currentTab: 0,
      orders: [
        {
          name: "民宿名称",
          rooms: "1间",
          roomName: "房间名称",
          startDate: "2024.07.24",
          endDate: "2024.07.24",
          price: 160,
          orderTime: "2024-05-05 08:33:12",
          imgUrl: "/static/order-image.jpg"
        }
        // Add more order items here
      ]
    };
  },
  methods: {
    changeTab(tabIndex) {
      this.currentTab = tabIndex;
    },
    cancelOrder(order) {
    },
    payOrder(order) {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.currentTab === 0 ? 1 : "",
    b: common_vendor.o(($event) => $options.changeTab(0)),
    c: $data.currentTab === 1 ? 1 : "",
    d: common_vendor.o(($event) => $options.changeTab(1)),
    e: $data.currentTab === 2 ? 1 : "",
    f: common_vendor.o(($event) => $options.changeTab(2)),
    g: $data.currentTab === 3 ? 1 : "",
    h: common_vendor.o(($event) => $options.changeTab(3)),
    i: $data.currentTab === 4 ? 1 : "",
    j: common_vendor.o(($event) => $options.changeTab(4)),
    k: common_vendor.f($data.orders, (order, index, i0) => {
      return {
        a: order.imgUrl,
        b: common_vendor.t(order.name),
        c: common_vendor.t(order.rooms),
        d: common_vendor.t(order.roomName),
        e: common_vendor.t(order.startDate),
        f: common_vendor.t(order.endDate),
        g: common_vendor.t(order.price),
        h: common_vendor.t(order.orderTime),
        i: common_vendor.o(($event) => $options.cancelOrder(order), index),
        j: common_vendor.o(($event) => $options.payOrder(order), index),
        k: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-643a2770"]]);
wx.createPage(MiniProgramPage);
