<template>
  <ul class="e-stop-info-container" :style="containerStyle">
    <li v-for="cfg in config" :key="cfg.name">
      <span class="title">{{cfg.name}}</span>
      <div class="point-list" >
        <p class="point body-1" 
          v-for="point in cfg.points" 
          :class="{'active':active.includes(point.dataIndex), 'focus':focus === point.dataIndex}" 
          :key="point.dataIndex"
          @click="handleInfoClick(point)"
          @mouseenter="handleInfoMouseenter(point)"
          @mouseleave="handleInfoMouseleave(point)"
        >
          {{`${point.dataIndex}. ${point.desc}`}}
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
import configJson from './config.json'

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
    focus:{
      type:[String,Number],
      default: ''
    },
    active:{
      type:Array,
      default: () => []
    }
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
      config:Object.freeze(this._getPreFormatConfig(configJson))
    }
  },

  methods:{

    handleInfoClick(info){
      this.$emit('click',info)
    },

    handleInfoMouseenter(info){
      this.$emit('mouseenter',info)
    },

    handleInfoMouseleave(info){
      this.$emit('mouseleave',info)
    },

    _getPreFormatConfig(configJson){
      const resJson = []
      const parentGroup = {}
      for(let index in configJson){
        const cfg = configJson[index]
        const parentKey = cfg.parentKey || cfg.desc
        if(!parentGroup[parentKey]){
          parentGroup[parentKey] = []
        }
        parentGroup[parentKey].push({index,...cfg})
      }

      for(let parentKey in parentGroup){
        resJson.push({
          name:parentKey,
          points:parentGroup[parentKey]
        })
      }
 
      return resJson
    }
  }
};
</script>

<style lang="scss" scoped>
.e-stop-info-container{
  position: absolute;
  list-style: none;
  overflow: auto;
  p{
    margin:0 !important;
  }
  li{
    display: flex;
    &:last-child .point-list .point.space-line{
      height:0;
    }
    span.title{
      overflow: hidden;
      width:260px;
      text-align: right;
      color:#3884d3;
      padding-right: 10px;
      line-height: 24px;
    }
    div.point-list{
      border-left: 1px solid #000;
      width:calc(100% - 260px);
      padding-bottom: 8px;
      .point{
        padding-left: 28px;
        position: relative;
        line-height: 24px;
        font-size: 14px;
        cursor: pointer;
        transition: background-color .3s ease;
        &.focus{
          background-color: rgb(193, 196, 202,.6);
        }
        &:hover{
          background-color: rgb(193, 196, 202,.6);
        }
        &::before{
          content: '';
          position: absolute;
          height:14px;
          width:14px;
          top:10px;
          margin-top: -7px;
          left:10px;
          border-radius: 50%;
          border: 1px solid #000;
          background-color: #dedede;
          transition: all .3s linear;
        }
        &.active::before{
          background-color: red;
        }
      }
    }
  }
}
</style>
