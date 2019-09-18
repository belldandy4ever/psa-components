<template>
  <div class="control-box-indicator-container" :style="{...boxSize}" :title="title">
    <div class="control-box-indicator-title" >
      <p  class="control-box-indicator-title-text" >{{shortName || title}}</p>
    </div>
    <div class="control-box-indicator-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 54
    },
    title: {
      type: String,
      default: ""
    },
    shortName:{
      type:String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    }
  },
  computed: {
    boxSize() {
      return {
        width: this.width + "px",
        height: this.width * 1.3 + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
$background-color: #cddfe5;
$border-color: #666f72;

.control-box-indicator-container {
  p{
    margin:0;
  }
  display: flex;
  flex-direction: column;
  margin: 10px;
  width:80px;
  .control-box-indicator-title {
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: $background-color;
    border: 1px solid $border-color;
    border-bottom: none;
    font-size: 12px;
    cursor: default;
    .control-box-indicator-title-text {
      width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
    }
  }
  .control-box-indicator-body {
    flex: 3;
    border: 1px solid $border-color;
    background-color: $background-color;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
  }
}
</style>