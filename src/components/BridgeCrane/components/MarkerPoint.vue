<template>
  <div 
    class="marker-container " 
    :class="{'hover-effect':hoverEffect,'blink':blink}" 
    :style="dynamicStyle" 
    @click="onClick"
    @dblclick="onDbClick"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    /**是否激活状态 */
    active: {
      type: Boolean,
      default: false,
    },
    /**激活状态的背景颜色 */
    activeColor: {
      type: String,
      default: '#00b6a2',
    },
    /**边框颜色 */
    borderColor: {
      type: String,
      default: '',
    },
    top: {
      type: [String, Number],
      default: 0,
    },
    left: {
      type: [String, Number],
      default: 0,
    },
    /**鼠标悬浮效果 */
    hoverEffect:{
      type:Boolean,
      default:false
    },
    /**是否闪烁 */
    blink:{
      type: Boolean,
      default:false
    }
  },
  computed: {
    dynamicStyle() {
      return this.active ? {
        top: this.top,
        left: this.left,
        backgroundColor: this.activeColor,
        borderColor: this.borderColor || this.activeColor,
      } : {
        top: this.top,
        left: this.left,
        backgroundColor: '#fff',
        borderColor: this.borderColor || this.activeColor,
      };
    },
  },
  methods:{
    onClick(){
      this.$emit('click')
    },
    onDbClick(){
      this.$emit('dbclick')
    },
    onMouseenter(){
      this.$emit('mouseenter')
    },
    onMouseleave(){
      this.$emit('mouseleave')
    }
  }
};
</script>

<style lang="scss" scoped>
  .marker-container{
    cursor:default;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-style: solid;
    top:0;
    left:0;
    height:20px;
    width: 20px;
    border-radius: 50%;
    font-size: 12px;
    transition: all .3s linear;
    &.blink{
      animation:blink 1s infinite;
      z-index: 201;
    }
    &.hover-effect{
      cursor: pointer;
      &:hover{
        transform: scale(1.3);
        z-index: 9;
      }
    }
  }

  @keyframes blink{ 
    0%{
      opacity: 0.5;
      transform:scale(1)
    }
    50%{
      opacity: 1;
      transform:scale(1.5)
    }
    100%{
      opacity: 0.5;
      transform:scale(1)
    }
  }
</style>
