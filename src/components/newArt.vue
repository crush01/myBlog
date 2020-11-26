<template>
  <div class="right-new-art">
    <div class="title">最新文章</div>
    <div class="list">
      <div
        class="item"
        v-for="(art, index) in artList"
        :key="index"
      >
        {{ art.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["artList"]
};
</script>

<style lang="scss">
.right-new-art {
  .title {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: px2rem(30px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  }
  .list {
    margin-top: 15px;
    .item {
      padding-left: 10px;
      font-size: px2rem(20px);
      margin-bottom: 8px;
      cursor: pointer;
      @include flex_layout(center, flex-start);
      &::before {
        content: '';
        display: inline-block;
        background: #fff;
        width: 3px;
        height: 3px;
        margin-right: 5px;
      }
      &:hover {
        color: rgba(243, 230, 189, 1);
      }
    }
  }
}
</style>