<template>
  <div class="home-router-container">
    <div class="banner"  v-lazy:background-image="bannerImg">
      <div class="text">
        <span>北冥</span>
        <span>鱼</span>
      </div>
      <div class="art-text">
        <span>{{ artText }}</span>
      </div>
      <div class="banner-bread">
        <span @click="$router.push('/')">首页</span>
        <span>个人中心</span>
      </div>
    </div>
    <div class="nav">
      <div
        v-for="(item, index) in navList"
        :key="index"
        @click="$router.push(item.path)"
        :class="['nav-item', {'active-item': item.path === activePath}]"
      >
        <span>{{ item.title }}</span>
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div class="blog-body">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerImg: require('../assets/imgs/dayu.jpg'), // 背景图
      artText: '但愿人长久，千里共婵娟',
      navList: [
        {
          title: '首页',
          path: '/',
        },
        {
          title: '心情随笔',
          path: '/mood',
        },
        {
          title: '韶华追忆',
          path: '/memory'
        }
      ],
      activePath: '/' // 默认活动菜单
    }
  },
  watch: {
    $route: {
      handler(v) {
        const path = v.path
        const curr = this.navList.find(item => item.path === path)
        
        if (curr) {
          this.activePath = curr.path
        } else {
          this.activePath = '/'
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
.home-router-container {
  .banner {
    position: relative;
    width: 100%;
    height: px2rem(400px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    .text {
      position: absolute;
      top: 10%;
      left: 10%;
      color: #fff;
      font-size: px2rem(50px);
      font-family: 'Courier New', Courier, monospace;
      span:last-child {
        font-size: px2rem(80px);
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      }
    }
    .art-text {
      position: absolute;
      top: px2rem(200px);
      left: 20%;
      color: #fff;
      font-size: px2rem(30px);
    }
    .banner-bread {
      position: absolute;
      top: px2rem(20px);
      right: px2rem(20px);
      font-size: px2rem(16px);
      @include flex_layout(center, flex-start);
      span {
        cursor: pointer;
        border-right: 2px solid rgba(255, 255, 255, 0.5);
        margin-right: 5px;
        padding-right: 5px;
        &:last-child {
          border-right: unset;
          padding-right: 0;
          margin-right: 0;
        }
      }
    }
  }
  .nav {
    height: 60px;
    width: 100%;
    background: rgba(247, 120, 37, 0.5);
    background: -webkit-linear-gradient(90deg , #BFAB86, rgba(247, 120, 37, 0.6) );
    @include flex_layout();
    perspective: 1000;
    -webkit-perspective: 1000;
    .nav-item {
      width: px2rem(120px);
      height: 100%;
      position: relative;
      margin-right: px2rem(10px);
      cursor: pointer;
      transform-style: preserve-3d;
      transition: all 0.5s;
      // transform: rotateX(25deg);
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        transform: translateY(30px) rotateX(90deg);
      }
      &.active-item {
        transform: translateY(30px) rotateX(90deg);
        &:hover {
          // transform: unset;
        }
      }
      span {
        position: absolute;
        width: 100%;
        height: 100%;
        line-height: 60px;
        text-align: center;
        backface-visibility: hidden;
        top: 0;
        left: 0;
        font-size: px2rem(25px);
        &:first-child {
          background: rgba(247, 120, 37, 0.5);
          background: -webkit-linear-gradient(90deg, #BFAB86, rgba(247, 120, 37, 0.6));
          z-index: 2;
        }
        &:last-child {
          background-color: rgba(247, 120, 37, 1);
          background: -webkit-linear-gradient(90deg, #9FAB86, rgba(247, 120, 37, 1));
          // transform: rotateX(180deg);
          transform-origin: bottom;
          transform: rotateX(-90deg);
          // transform: rotateX(-90deg);
        }
      }
    }
  }
  .blog-body {
    background: rgba(164, 169, 129, 1);
    height: calc(100vh - 60px);
  }
}
</style>