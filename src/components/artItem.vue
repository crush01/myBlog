<template>
  <div class="art-item-container">
    <div class="left">
      <img v-lazy="randomPic[randomNum]" alt />
    </div>
    <div class="right">
      <div class="item-title">{{ artItem.title }}</div>
      <div class="main">{{ artItem.descript }}</div>
      <div class="footer">
        <div class="item-left">
          <div class="item-tag item">
            <svg class="iconfont" aria-hidden="true">
              <use xlink:href="#icon-tag" />
            </svg>
            <span>韶华追忆</span>
          </div>
          <div class="item-date item">
            <svg class="iconfont" aria-hidden="true">
              <use xlink:href="#icon-update" />
            </svg>
            <span>{{ dataFormat(artItem.createTime) }}</span>
          </div>
        </div>
        <div class="item-right">
          <div class="item-message item">
            <svg class="iconfont" aria-hidden="true">
              <use xlink:href="#icon-message1" />
            </svg>
            <span>{{ showNum(artItem.repalyNum) }}</span>
          </div>
          <div class="item-read item">
            <svg class="iconfont" aria-hidden="true">
              <use xlink:href="#icon-cceye" />
            </svg>
            <span>{{ showNum(artItem.readNum) }}</span>
          </div>
          <div class="item-like item">
            <svg class="iconfont" aria-hidden="true">
              <use xlink:href="#icon-like" />
            </svg>
            <span>{{ showNum(artItem.likeNum) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dataFormat, showNum } from '@/utils/common.js'
export default {
  props: ["artItem"],
  data() {
    return {
      randomPic: [
        require("../assets/imgs/wenyi2.jpg"),
        require("../assets/imgs/wenyi3.jpg")
      ],
      randomNum: Math.round(Math.random())
    }
  },
  methods: {
    dataFormat,
    showNum
  }
}
</script>

<style lang="scss">
.art-item-container {
  @include flex_layout(center, space-between);
  width: 100%;
  border-bottom: 1px solid rgba(247, 120, 37, 0.4);
  padding: 20px 10px;
  .left {
    width: 25%;
    height: auto;
    img {
      width: 100%;
      height: auto;
    }
  }
  .right {
    width: 72%;
    .item-title {
      color: #fff;
      font-size: px2rem(25px);
      cursor: pointer;
      &:hover {
        color:rgba(243, 230, 189, 1);
      }
    }
    .main {
      width: 100%;
      font-size: 14px;
      @include over_text(3);
      cursor: pointer;
      &:hover {
        color:rgba(243, 230, 189, 1)
      }
    }
    .footer {
      margin-top: 10px;
      font-size: px2rem(16px);
      @include flex_layout(center, space-between);
      .item {
        margin-right: 10px;
        @include flex_layout(center, flex-start);
        &:hover {
          color:rgba(243, 230, 189, 1);
        }
        svg {
          font-size: px2rem(30px);
          color: #FF8354;
          cursor: pointer;
          margin-right: 5px;
        }
      }
      .item-left, .item-right {
        @include flex_layout(center, flex-start);
        .item-tag {
          svg {
            font-size: px2rem(25px)
          }
        }
        .item-message {
          svg {
            font-size: px2rem(25px)
          }
        }
        .item-like {
          svg {
            font-size: px2rem(35px)
          }
        }
      }
    }
  }
}
</style>