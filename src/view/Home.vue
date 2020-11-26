<template>
  <div class="home-container">
    <div class="main-left">
      <div class="main-banner">
        <div class="first-line">
          <div class="pic">
            <el-carousel
              :interval="4000"
              height="340px"
              direction="vertical"
              @change="bannerChange"
            >
              <el-carousel-item v-for="(item, index) in bannerList" :key="index">
                <img :src="item.pic" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="introduct">
            <div
              v-for="(item, index) in bannerList.slice(0, 2)"
              :key="index"
              :class="['introduct-item', {'active-item': bannerIndex === index}]"
            >
              <div class="title">{{ item.title }}</div>
              <div class="intr">{{ item.introduct }}</div>
            </div>
          </div>
        </div>
        <div class="second-line">
          <div
            v-for="(item, index) in bannerList.slice(2)"
            :key="index"
            :class="['introduct-item', {'active-item': bannerIndex === index + 2}]"
          >
            <div class="title">{{ item.title }}</div>
            <div class="intr">{{ item.introduct }}</div>
          </div>
        </div>
        <div class="small-line">
          <div
            v-for="(item, index) in bannerList"
            :key="index"
            :class="['introduct-item', {'active-item': bannerIndex === index + 2}]"
          >
            <div class="title">{{ item.title }}</div>
            <div class="intr">{{ item.introduct }}</div>
          </div>
        </div>
      </div>
      <div class="main-article">
        <div class="title">
          <div class="left">最新文章</div>
          <div class="right">
            <div class="item">
              <span>心情随笔</span>
              <span>(156)</span>
            </div>
            <div class="item">
              <span>技术分享</span>
              <span>(56)</span>
            </div>
          </div>
        </div>
        <div class="article-list">
          <div
            class="article-item"
            v-for="(art, index) in artList"
            :key="index"
          >
            <art-item :art-item="art" />
          </div>
        </div>
      </div>
    </div>
    <div class="main-right">
      <div class="collect-me">联系我</div>
      <div class="account-list">
        <span v-for="(item, index) in accountList" :key="index" class="account-item">
          <svg class="iconfont" aria-hidden="true">
            <use :xlink:href="`#${item.icon}`" />
          </svg>
          <div class="title">{{ item.title }}</div>
          <div v-if="item.pic" class="detail" v-lazy:background-image="item.pic"></div>
        </span>
      </div>
      <new-art :artList="artList.slice(0, 6)" />
    </div>
  </div>
</template>

<script>
import artItem from '@/components/artItem'
import newArt from '@/components/newArt'
export default {
  components: { artItem, newArt },
  data() {
    return {
      //banner图信息列表
      bannerList: [
        {
          title: "关于博主",
          pic: require("../assets/imgs/wenyi1.jpg"),
          introduct: "个人资料：男，九零后，白羊座，时而不着调，时而不靠谱",
          path: ""
        },
        {
          title: "关于博主",
          pic: require("../assets/imgs/wenyi2.jpg"),
          introduct: "个人资料：男，九零后，白羊座，时而不着调，时而不靠谱",
          path: ""
        },
        {
          title: "关于博主",
          pic: require("../assets/imgs/wenyi3.jpg"),
          introduct: "个人资料：男，九零后，白羊座，时而不着调，时而不靠谱",
          path: ""
        },
        {
          title: "关于博主",
          pic: require("../assets/imgs/wenyi4.png"),
          introduct: "个人资料：男，九零后，白羊座，时而不着调，时而不靠谱",
          path: ""
        },
        {
          title: "关于博主",
          pic: require("../assets/imgs/wenyi1.jpg"),
          introduct: "个人资料：男，九零后，白羊座，时而不着调，时而不靠谱",
          path: ""
        },
        {
          title: "关于博主",
          pic: require("../assets/imgs/wenyi2.jpg"),
          introduct: "个人资料：男，九零后，白羊座，时而不着调，时而不靠谱",
          path: ""
        }
      ],
      // 联系账户信息列表
      accountList: [
        {
          icon: "icon-youxiang",
          title: "邮箱"
        },
        {
          icon: "icon-weixin",
          title: "微信",
          pic: require("../assets/imgs/weixin.jpg")
        },
        {
          icon: "icon-QQ1",
          title: "QQ",
          pic: require("../assets/imgs/qq.png")
        }
      ],
      bannerIndex: 0, // banner图活动下标
      artList: [] // 文章列表
    };
  },
  created() {
    this.getArtList()
  },
  methods: {
    bannerChange(v) {
      // 轮播切换调用
      this.bannerIndex = v;
    },
    getArtList() {
      // 得到文章列表
      for(let i = 0; i < 10; i++) {
        const baseItem = {
          title: '水调歌头',
          descript: '落日绣帘卷，亭下水连空。知君为我新作，窗户湿青红。长记平山堂上，欹枕江南烟雨，杳杳没孤鸿。认得醉翁语，山色有无中.一千顷，都镜净，倒碧峰。忽然浪起，掀舞一叶白头翁。堪笑兰台公子，未解庄生天籁，刚道有雌雄。一点浩然气，千里快哉风',
          createTime: '276584343',
          repalyNum: 23,
          readNum: 3400,
          likeNum: 23
        }
        let item = baseItem
        item.id = i + 1
        this.artList.push(item)
      }
    }
  }
};
</script>

<style lang="scss">
.home-container {
  width: 980px;
  margin: 0 auto;
  padding-top: 20px;
  @include flex_layout(flex-start, space-between);
  .main-left {
    width: 680px;
    .first-line,
    .second-line {
      @include flex_layout();
    }
    .introduct-item {
      height: 170px;
      width: 170px;
      cursor: pointer;
      background-color: rgba(220, 229, 196, 1);
      padding: 10px;
      &:nth-child(1) {
        background-color: rgba(243, 230, 189, 0.2)
      }&:nth-child(2) {
        background-color: rgba(243, 230, 189, 0.7)
      }&:nth-child(3) {
        background-color: rgba(243, 230, 189, 0.3)
      }&:nth-child(4) {
        background-color: rgba(243, 230, 189, 0.6)
      }&:nth-child(5) {
        background-color: rgba(243, 230, 189, 0.4)
      }&:nth-child(6) {
        background-color: rgba(243, 230, 189, 0.5)
      }
      &.active-item, &:hover {
        background-color: rgba(243, 230, 189, 1);
      }
      .title {
        font-size: px2rem(30px);
        font-weight: bold;
        color: #000;
        margin-bottom: 10px;
      }
      .intr {
        color: #232323;
        font-size: px2rem(20px);
      }
    }
    .first-line {
      .pic {
        width: 510px;
        img {
          width: 100%;
          height: 100%;
        }
        .el-carousel__indicators {
          right: 50%;
          top: 80%;
          transform: translateX(50%);
          @include flex_layout();
          li > .el-carousel__button {
            width: 10px;
            height: 10px;
            padding: 0;
            border-radius: 50%;
            background: rgb(247, 120, 37);
          }
        }
      }
      .introduct {
        width: 170px;
        @include flex_layout();
        flex-wrap: wrap;
        // flex-direction: column;
      }
    }
    .small-line {
      display: none;
    }
    .second-line {
      @include flex_layout(center, flex-start);
      .introduct-item {
        width: 170px;
        border-right-color: #fff;
        border-bottom-color: transparent;
        &.active-item, &:hover {
          // border: 1px solid rgba(247, 120, 37, 0.6);
          background-color: rgba(243, 230, 189, 1);
        }
        // &:last-child {
        //   border-right-color: transparent;
        // }
      }
    }
    // 文章
    .main-article {
      width: 100%;
      .title {
        padding: 10px;
        @include flex_layout(center, space-between);
        border-bottom: 3px solid rgb(247, 120, 37);
        .left {
          font-size: px2rem(30px);
          color: #fff;
        }
        .right {
          @include flex_layout(center, flex-start);
          .item {
            margin-right: 10px;
            cursor: pointer;
            &:hover {
              color:rgba(243, 230, 189, 1);
            }
          }
        }
      }
    }
  }
  .main-right {
    width: 280px;
    .collect-me {
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: px2rem(30px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    }
    .account-list {
      @include flex_layout(center, space-between);
      padding: 20px 10px;
      .account-item {
        cursor: pointer;
        flex: 1;
        font-size: px2rem(70px);
        @include flex_layout(center, space-between);
        flex-direction: column;
        position: relative;
        .title {
          margin-top: 5px;
          font-size: px2rem(25px);
        }
        &:hover {
          .detail {
            display: block;
          }
        }
        .detail {
          display: none;
          position: absolute;
          width: 100px;
          height: 100px;
          background-color: #fff;
          background-repeat: no-repeat;
          background-position: center;
          background-size: auto 100%;
          bottom: 0;
          transform: translateY(100%);
        }
      }
    }
  }
}
@media screen and (max-width: 981px) and (min-width: 600px) {
  .home-container {
    width: 100%;
    .main-left {
      width: 60%;
      .first-line, .second-line {
        display: none;
      }
      .small-line {
        @include flex_layout(center, center);
        flex-wrap: wrap;
      }
    }
    .main-right {
      width: 35%;
    }
  }
}
@media screen and (max-width: 600px) {
  .home-container {
    width: 100%;
    .main-left {
      width: 100%;
      .first-line, .second-line {
        display: none;
      }
      .small-line {
        @include flex_layout(center, center);
        flex-wrap: wrap;
      }
    }
    .main-right {
      // width: 35%;
      display: none;
    }
  }
}
</style>