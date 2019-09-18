<template>
  <div class="safe-door-layer-container" :style="{width:layerWidth}">
    <marker-point activeColor="#3bffee" top="42.5%" left="24%">01</marker-point>
    <marker-point activeColor="#3bffee" top="45%" left="22%">02</marker-point>
    <marker-point activeColor="#3bffee" top="48%" left="20%">03</marker-point>
    <marker-point activeColor="#3bffee" top="12%" left="94%">04</marker-point>
    <marker-point activeColor="#3bffee" top="10.5%" left="54%">05</marker-point>
    <marker-point activeColor="#3bffee" top="53.3%" left="2%">06</marker-point>
    <marker-point activeColor="#3bffee" top="24.2%" left="50%">07</marker-point>
    <marker-point activeColor="#3bffee" top="35.4%" left="59.1%">08</marker-point>
    <marker-point activeColor="#3bffee" top="65.4%" left="48%">09</marker-point>
    <marker-point activeColor="#3bffee" top="77%" left="58%">10</marker-point>
    <marker-point activeColor="#3bffee" top="73%" left="28%">11</marker-point>
    <marker-point activeColor="#3bffee" top="88%" left="40%">12</marker-point>
    <marker-point activeColor="#3bffee" top="65.6%" left="51.6%">13</marker-point>
    <marker-point activeColor="#3bffee" top="79%" left="13%">14</marker-point>
    <marker-point activeColor="#3bffee" top="57%" left="45%">15</marker-point>
    <marker-point activeColor="#3bffee" top="73.5%" left="20.7%">16</marker-point>
    <marker-point activeColor="#3bffee" top="76%" left="18.4%">17</marker-point>
    <marker-point activeColor="#3bffee" top="69.4%" left="34.9%">18</marker-point>
    <marker-point activeColor="#3bffee" top="77.5%" left="41.6%">19</marker-point>
    <marker-point activeColor="#3bffee" top="55%" left="28%">20</marker-point>
    <marker-point activeColor="#3bffee" top="76.4%" left="15.5%">21</marker-point>
    <marker-point activeColor="#3bffee" top="78.9%" left="16.8%">22</marker-point>
    <marker-point activeColor="#3bffee" top="81.5%" left="18.4%">23</marker-point>
    <marker-point activeColor="#3bffee" top="83.9%" left="19.8%">24</marker-point>
    <marker-point activeColor="#3bffee" top="44.6%" left="18.5%">25</marker-point>
    <marker-point activeColor="#3bffee" top="45.7%" left="25.1%">26</marker-point>
    <marker-point activeColor="#3bffee" top="53.3%" left="21.3%">27</marker-point>
    <marker-point activeColor="#3bffee" top="52.4%" left="23.6%">28</marker-point>
    <marker-point activeColor="#3bffee" top="70.4%" left="53%">29</marker-point>
    <marker-point activeColor="#3bffee" top="73.6%" left="34.5%">30</marker-point>
  </div>
</template>

<script>
import MarkerPoint from '../components/MarkerPoint.vue';

export default {
  components: {
    MarkerPoint,
  },
  props: {
    layerWidth: {
      type: String,
      default: '100%',
    },
  },
  data() {
    return {};
  },
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
