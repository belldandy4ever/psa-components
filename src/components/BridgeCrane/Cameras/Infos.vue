<template>
  <ul class="camera-layer-infos-container" :style="containerStyle">
    <li v-for="data in testData" :key="data.cameraNo" :class="{'active':data.isActive}">
      <span class="camera-no title">{{data.cameraNo}}</span>
      <span class="camera-name body-1">
        {{data.cameraName}}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    top: {
      type: String,
      default: '0%',
    },
    left: {
      type: String,
    },
    right: {
      type: String,
    },
    layerWidth: {
      type: String,
      default: '25%',
    },
    layerHeight: {
      type: String,
      dafault: 'auto',
    },
  },
  computed: {
    containerStyle() {
      const style = {
        width: this.layerWidth,
        height: this.layerHeight,
        top: this.top,
      };
      if (!this.left && !this.right) {
        style.left = 0;
      } else if (this.left) {
        style.left = this.left;
      } else {
        style.right = this.right;
      }
      return style;
    },
  },
  data() {
    return {
      testData: new Array(30).fill(undefined).map((v, i) => ({
        cameraNo: `Camera ${i < 9 ? `0${i + 1}` : i + 1}`,
        cameraName: `Test camera name ${i < 9 ? `0${i + 1}` : i + 1} `,
        isActive: i % 2 === 0,
      })),
    };
  },
};
</script>

<style lang="scss" scoped>
  .camera-layer-infos-container{
    position: absolute;
    list-style:none;
    overflow: auto;
    p{
      margin:0 !important;
    }
    li{
      display: flex;
      flex-wrap: wrap;
      span{
        height:30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span.camera-no{
        color:#3884d3;
        padding:0 5px;
        border-right: 1px solid #000;
        margin-right: 10px;
      }
      span.camera-name{
        display: flex;
        align-items: center;
        padding-left: 20px;
        position: relative;
        &:before{
          content: '';
          position: absolute;
          height:14px;
          width:14px;
          top:50%;
          margin-top: -7px;
          left:0;
          border-radius: 50%;
          border: 1px solid #000;
          background-color: #dedede;
          transition: all .3s linear;
        }
      }
    }
    li.active{
      span.camera-name:before{
        background-color: #00c7fe;
      }
    }
  }
</style>
