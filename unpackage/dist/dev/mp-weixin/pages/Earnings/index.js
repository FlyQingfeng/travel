"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      rankList: [
        { avatar: "/static/avatar1.png", name: "齐夜", earnings: "1000.00" },
        { avatar: "/static/avatar2.png", name: "DAYTOY", earnings: "1000.00" },
        { avatar: "/static/avatar1.png", name: "Ronronner", earnings: "1000.00" },
        { avatar: "/static/avatar2.png", name: "DAYTOY", earnings: "1000.00" }
      ]
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$2,
    b: common_assets._imports_1$2,
    c: common_assets._imports_2$2,
    d: common_vendor.f($data.rankList, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: item.avatar,
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.earnings),
        e: index
      };
    }),
    e: common_assets._imports_3$2,
    f: common_assets._imports_4$2,
    g: common_assets._imports_5$2,
    h: common_assets._imports_6$2,
    i: common_assets._imports_7$2,
    j: common_assets._imports_8$1
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
