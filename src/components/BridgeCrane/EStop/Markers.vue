<template>
  <div class="safe-door-layer-container" :style="{width:layerWidth}">
    <marker-point 
      activeColor="#fe0100" 
      v-for="(cfg,index) in config"
      :key="cfg.dataIndex"
      :top="cfg.marker.top" 
      :left="cfg.marker.left" 
      :blink="focus === cfg.dataIndex"
      :active="active.includes(cfg.dataIndex)"
      hoverEffect
      @click="handleClick({index,...cfg})"
      @mouseenter="handleMouseenter({index,...cfg})"
    >
      {{getMarkerNo(index + 1)}}
    </marker-point>
  </div>
</template>

<script>
import MarkerPoint from '../components/MarkerPoint.vue';
import configJson from './config.json';

export default {
  components: {
    MarkerPoint,
  },
  props: {
    layerWidth: {
      type: String,
      default: '100%',
    },
    active:{
      type: Array,
      default: () => []
    },
    focus:{
      type: [String, Number],
      default: ''
    },
  },
  data() {
    return {
      config:Object.freeze(configJson)
    };
  },
  methods:{
    handleClick(info){
      this.$emit('click',info)
    },
    handleMouseenter(info){
      this.$emit('mouseenter',info)
    },
    getMarkerNo(no){
      return (no < 10) ? `0${no}` : no 
    }
  }
};
</script>

<style lang="scss" scoped>
  .safe-door-layer-container{
    position: absolute;
    top:0;
    left:0;
    height:100%;
  }
</style>
