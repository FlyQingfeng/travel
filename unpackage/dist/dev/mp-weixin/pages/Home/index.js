"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const tabChange = common_vendor.ref(true);
    common_vendor.ref(0);
    const startDate = common_vendor.ref({
      year: "",
      month: "",
      day: ""
    });
    const endDate = common_vendor.ref({
      year: "",
      month: "",
      day: ""
    });
    common_vendor.ref(/* @__PURE__ */ new Date());
    common_vendor.ref((/* @__PURE__ */ new Date()).getDate() + 1);
    const labelText = common_vendor.ref("晚");
    const error = common_vendor.ref("");
    let activeIndex = common_vendor.ref(0);
    const swiperItems = common_vendor.ref([
      { src: "../../static/home/banner.png" },
      { src: "../../static/home/banner.png" },
      { src: "../../static/home/banner.png" }
    ]);
    const location = common_vendor.ref(null);
    const cates = common_vendor.ref([
      {
        id: 1,
        name: "民宿"
      },
      {
        id: 2,
        name: "酒店"
      },
      {
        id: 3,
        name: "旅馆"
      },
      {
        id: 4,
        name: "青旅"
      }
    ]);
    const hotels = common_vendor.ref([
      {
        id: 1,
        desc: "民宿名称1",
        image: "../../static/home/hotel1.png",
        price: 80,
        peoplename: "陈先生",
        sc_count: 5365,
        pic: "../../static/home/avatar.png",
        sc_pic: "../../static/home/未收藏.png"
      },
      {
        id: 2,
        desc: "民宿名称2",
        image: "../../static/home/hotel2.png",
        price: 80,
        peoplename: "李小姐",
        sc_count: 8888,
        pic: "../../static/home/avatar.png",
        sc_pic: "../../static/home/未收藏.png"
      }
    ]);
    common_vendor.onMounted(() => {
      setDefaultDates();
    });
    function setDefaultDates() {
      const today = /* @__PURE__ */ new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      startDate.value.year = today.getFullYear();
      startDate.value.month = today.getMonth() + 1;
      startDate.value.day = today.getDate();
      endDate.value.year = tomorrow.getFullYear();
      endDate.value.month = tomorrow.getMonth() + 1;
      endDate.value.day = tomorrow.getDate();
    }
    function onStartDateChange(e) {
      const selectedDate = e.detail.value;
      startDate.value.year = selectedDate.split("-")[0];
      startDate.value.month = selectedDate.split("-")[1][0] == 0 ? selectedDate.split("-")[1][1] : selectedDate.split("-")[1];
      startDate.value.day = selectedDate.split("-")[2];
      const starts = common_vendor.ref(/* @__PURE__ */ new Date(startDate.value.year + "-" + startDate.value.month + "-" + startDate.value.day));
      if (endDate.value && /* @__PURE__ */ new Date(endDate.value.year + "-" + endDate.value.month + "-" + endDate.value.day) < starts.value) {
        endDate.value.year = "";
        endDate.value.month = "";
        endDate.value.day = "";
      }
    }
    function onEndDateChange(e) {
      const selectedDate = e.detail.value;
      const seles = common_vendor.ref(new Date(selectedDate));
      if (startDate.value && seles.value < /* @__PURE__ */ new Date(startDate.value.year + "-" + startDate.value.month + "-" + startDate.value.day)) {
        endDate.value.year = "";
        endDate.value.month = "";
        endDate.value.day = "";
        error.value = "结束日期不能早于开始日期";
      } else {
        endDate.value.year = selectedDate.split("-")[0];
        endDate.value.month = selectedDate.split("-")[1][0] == 0 ? selectedDate.split("-")[1][1] : selectedDate.split("-")[1];
        endDate.value.day = selectedDate.split("-")[2];
      }
    }
    function search() {
      if (!startDate.value || !endDate.value) {
        error.value = "请先选择开始和结束日期";
        return;
      }
      if (eds.value < sts.value) {
        error.value = "结束日期不能早于开始日期";
        return;
      }
    }
    function getCurrentLocation() {
      common_vendor.index.getLocation({
        type: "gcj02",
        success(res) {
          location.value = {
            latitude: res.latitude,
            longitude: res.longitude,
            speed: res.speed,
            accuracy: res.accuracy
          };
          console.log(location);
        },
        fail(err) {
          console.error("获取位置失败：", err);
        }
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(swiperItems.value, (item, index, i0) => {
          return {
            a: item.src,
            b: index
          };
        }),
        b: tabChange.value === true ? 1 : "",
        c: common_vendor.o(($event) => tabChange.value = true),
        d: tabChange.value === false ? 1 : "",
        e: common_vendor.o(($event) => tabChange.value = false),
        f: tabChange.value === true
      }, tabChange.value === true ? common_vendor.e({
        g: common_assets._imports_0,
        h: common_vendor.o(getCurrentLocation),
        i: common_assets._imports_1,
        j: common_vendor.t(startDate.value.month),
        k: common_vendor.t(startDate.value.day),
        l: common_vendor.o(onStartDateChange),
        m: common_vendor.t(labelText.value),
        n: common_vendor.t(endDate.value.month),
        o: common_vendor.t(endDate.value.day),
        p: startDate.value || "1970-01-01",
        q: common_vendor.o(onEndDateChange),
        r: common_assets._imports_0,
        s: common_vendor.o(search),
        t: common_assets._imports_2,
        v: common_assets._imports_3,
        w: common_assets._imports_4,
        x: common_assets._imports_5,
        y: common_assets._imports_6,
        z: common_assets._imports_0,
        A: common_assets._imports_7,
        B: common_vendor.f(cates.value, (cate, index, i0) => {
          return {
            a: common_vendor.t(cate.name),
            b: index,
            c: common_vendor.unref(activeIndex) === index ? 1 : "",
            d: common_vendor.o(($event) => common_vendor.isRef(activeIndex) ? activeIndex.value = index : activeIndex = index, index)
          };
        }),
        C: common_vendor.unref(activeIndex) === 1
      }, common_vendor.unref(activeIndex) === 1 ? {
        D: common_vendor.f(hotels.value, (hotel, k0, i0) => {
          return {
            a: hotel.image,
            b: common_vendor.t(hotel.desc),
            c: hotel.pic,
            d: common_vendor.t(hotel.peoplename),
            e: hotel.sc_pic,
            f: common_vendor.t(hotel.sc_count),
            g: hotel.id
          };
        })
      } : {}) : tabChange.value === false ? {} : {}, {
        E: tabChange.value === false
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c8f6c59c"]]);
wx.createPage(MiniProgramPage);
