<template>
  <ul class="spot-light-info-container" :style="containerStyle">
   <li v-for="data in testData" :key="data.title">
     <span class="title">{{data.title}}</span>
     <div class="point-list body-1">
       <span v-for="point in data.points" :key="`${data.title}-${point.name}`" class="point" :class="{active:point.isActive}">
         {{point.name}}
       </span>
       <span class="point space-line"></span>
     </div>
   </li>
  </ul>
</template>

<script>

function getPoints(size, midFix) {
  return new Array(size).fill(undefined).map((v, i) => {
    const no = i + 1 < 10 ? `0${i + 1}` : i + 1;
    return {
      name: `${no}-${midFix}${no}`,
      isActive: !!(i % 3),
    };
  });
}

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
      testData: [
        {
          title: 'BOOM',
          points: getPoints(16, 'BO'),
        },
        {
          title: 'Girder and Back Reach',
          points: [...getPoints(20, 'GO'), ...getPoints(2, 'BR')],
        },
        {
          title: 'Portal Beam and Lashplatform',
          points: [...getPoints(20, 'GO'), ...getPoints(3, 'BR')],
        },
        {
          title: 'Primary Trolley',
          points: getPoints(6, 'GO'),
        },
        {
          title: 'Secondary Trolley',
          points: getPoints(4, 'GO'),
        },
        {
          title: 'Seaside Leg',
          points: getPoints(4, 'GO'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.spot-light-info-container{
  position: absolute;
  list-style: none;
  overflow: auto;
  p{
    margin:0 !important;
  }
  li{
    display: flex;
    flex-wrap: wrap;
    &:last-child .point-list .point.space-line{
      height:0;
    }
    span.title{
      overflow: hidden;
      width:180px;
      text-align: right;
      color:#3884d3;
      margin-right: 10px;
      padding-right: 10px;
      border-right: 1px solid #000;
    }
    div.point-list{
      display: flex;
      flex-wrap: wrap;
      width:calc(100% - 200px);
      .point{
        width:45%;
        padding-left: 20px;
        position: relative;
        height:20px;
        line-height: 20px;
        &.space-line{
          height:8px;
          width:100%;
        }
        &:not(.space-line):before{
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
        &.active:not(.space-line):before{
          background-color: #ffff00;
        }
      }
    }
  }
}
</style>
