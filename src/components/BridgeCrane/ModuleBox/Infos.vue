<template>
  <ul class="module-box-layer-infos-container" :style="containerStyle">
    <li 
      v-for="(cfg,index) in config" 
      :key="cfg.dataIndex" 
      :class="{'active':active.includes(cfg.dataIndex), 'focus':focus === cfg.dataIndex}" 
      @click="handleInfoClick({index,...cfg})"
      @mouseenter="handleInfoMouseenter({index,...cfg})"
      @mouseleave="handleInfoMouseleave({index,...cfg})"
    >
      <span class="module-box-no title">{{` ${index + 1}. ${cfg.name}`}}</span>
      <span class="module-box-name body-1">
        {{`${cfg.desc}`}}
      </span>
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
      type:String,
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
      config:Object.freeze(configJson),
    };
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
  }
};
</script>

<style lang="scss" scoped>
  .module-box-layer-infos-container{
    position: absolute;
    list-style:none;
    overflow: auto;
    p{
      margin:0 !important;
    }
    li{
      display: flex;
      cursor: pointer;
      transition: background-color .3s ease;
      &.focus{
        background-color: rgb(193, 196, 202,.6);
      }
      &:hover{
        background-color: rgb(193, 196, 202,.6);
      }
      span{
        height:30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span.module-box-no{
        color:#3884d3;
        padding:0 5px;
        margin-right: 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width:120px;
      }
      span.module-box-name{
        border-left: 1px solid #000;
        padding: 2px 0 2px 30px;
        display: flex;
        flex-wrap: wrap;
        width:calc(100% - 120px);
        align-items: center;
        height:auto;
        position: relative;
        justify-content: flex-start;
        &:before{
          content: '';
          position: absolute;
          height:14px;
          width:14px;
          top:50%;
          margin-top: -7px;
          left:10px;
          border-radius: 50%;
          border: 1px solid #000;
          background-color: #dedede;
          transition: all .3s linear;
        }
      }
    }
    li.active{
      span.module-box-name::before{
        background-color: #00c7fe;
      }
    }
  }
</style>
