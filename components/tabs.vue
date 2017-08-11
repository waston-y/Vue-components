<template>
  <div class="kk-tabs">
    <div class="kk-tabs-header">
      <span v-for="item of items" :class="{active: item==active}" @click="active=item">{{item}}</span>
    </div>
    <article v-for="item of items" v-show="item==active">
      <span>{{item}}</span>
      <slot :name="item"></slot>
    </article>
  </div>
</template>
<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        active: null
      }
    },
    created() {
      this.active = this.items[0]
    },
    methods: {

    }
  }
</script>
<style lang="less">
  .kk-tabs {
    .kk-tabs-header {
      border-bottom: 1px solid #aaa;
      span {
        margin-right: 10px;
        padding: 0 25px;
        height: 30px;
        display: inline-block;
        line-height: 30px;
        border: 1px solid #aaa;
        border-bottom: none;
        border-radius: 3px 3px 0 0;
        cursor: pointer;
      }
      .active {
        color: #fff;
        background: #999;
        border-color: #999;
      }
    }
  }
</style>