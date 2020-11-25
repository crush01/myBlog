<template>
  <div class="home-container">
    <div class="main-left">
      <div class="main-banner">
        <div class="first-line">
          <div class="pic">
            <el-carousel :interval="4000" height="300px" direction="vertical">
              <el-carousel-item v-for="(item, index) in bannerList" :key="index">
                <img :src="item.pic" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="introduct">
            <div v-for="(item, index) in bannerList.slice(0, 2)" :key="index" class="introduct-item">
              <div class="title">{{ item.title }}</div>
              <div class="intr">{{ item.introduct }}</div>
            </div>
          </div>
        </div>
        <div class="second-line">
          <div v-for="(item, index) in bannerList.slice(2)" :key="index" class="introduct-item">
              <div class="title">{{ item.title }}</div>
              <div class="intr">{{ item.introduct }}</div>
            </div>
        </div>
      </div>
    </div>
    <div class="main-right"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [
        {
          title: '关于博主',
          pic: require('../assets/imgs/wenyi1.jpg'),
          introduct: '个人资料：男，九零后，白羊座，时而不着调，时而不靠谱',
          path: ''
        },
        {
          title: '关于博主',
          pic: require('../assets/imgs/wenyi2.jpg'),
          introduct: '个人资料：男，九零后，白羊座，时而不着调，时而不靠谱',
          path: ''
        },
        {
          title: '关于博主',
          pic: require('../assets/imgs/wenyi3.jpg'),
          introduct: '个人资料：男，九零后，白羊座，时而不着调，时而不靠谱',
          path: ''
        },
        {
          title: '关于博主',
          pic: require('../assets/imgs/wenyi4.png'),
          introduct: '个人资料：男，九零后，白羊座，时而不着调，时而不靠谱',
          path: ''
        }
      ]
    };
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
    .first-line {
      .pic {
        width: 530px;
        img {
          width: 100%;
          height: 100%;
        }
        .el-carousel__indicators {
          right: 50%;
          top: 80%;
          transform: translateX(50%);
          @include flex_layout();
          li> .el-carousel__button {
            width: 10px;
            height: 10px;
            padding: 0;
            border-radius: 50%;
            background: rgb(247, 120, 37);
          }
        }
      }
      .introduct {
        width: 150px;
        @include flex_layout();
        flex-direction: column;
        .introduct-item {
          height: 150px;
          width: 100%;
          cursor: pointer;
          border: 1px solid transparent;
          border-bottom-color: #fff;;
          background-color: #f3e6bd;
          padding: 10px;
          &:last-child {
            border-bottom-color: transparent;
          }
          &:hover {
            border: 1px solid rgba(247, 120, 37, 0.6);
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
      }
    }
    .second-line {
      @include flex_layout(center, flex-start);
      .introduct-item {
          height: 150px;
          width: 150px;
          cursor: pointer;
          border: 1px solid transparent;
          border-right-color: #fff;
          background-color: #f3e6bd;
          padding: 10px;
          &:last-child {
            border-right-color: transparent;
          }
          &:hover {
            border: 1px solid rgba(247, 120, 37, 0.6);
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
    }
  }
  .main-right {
    width: 280px;
  }
}
</style>