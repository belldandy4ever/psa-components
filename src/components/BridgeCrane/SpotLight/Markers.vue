<template>
  <div class="spot-light-layer-container" :style="{width:layerWidth}">
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="26.6%" left="60%">01</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="24.9%" left="64%">02</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="22.5%" left="69.1%">03</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="21%"   left="72.2%">04</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="19%"   left="76.2%">05</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="17.4%" left="80%">06</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="14.6%" left="86%">07</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="12%"   left="94.3%">08</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="17.5%" left="88.9%">09</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="20.3%" left="83%">10</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="22%"   left="79.3%">11</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="24%"   left="75.3%">12</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="25.3%" left="72.4%">13</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="28.1%" left="66.6%">14</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="30%"   left="62.7%">15</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="29.8%" left="51.9%">16</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="31.8%" left="54.3%">17</marker-point>
    <!-- start ：top 递增0.8% left递减1.6% -->
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="29.2%" left="49.4%">18</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="30%"   left="47.8%">19</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="30.8%" left="46.2%">20</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="31.6%" left="44.8%">21</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="32.4%" left="43.2%">22</marker-point>
    <!-- end -->
    <!-- start ：top 递增0.8% left递减1.6% -->
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="27.6%" left="41%">23</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="28.4%" left="39.4%">24</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="29.2%" left="37.8%">25</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="30%"   left="36.2%">26</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="30.8%" left="34.6%">27</marker-point>
    <!-- end -->
    <!-- start ：top 递增0.8% left递减1.6% -->
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="34.7%" left="54.8%">28</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="35.5%" left="53.2%">29</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="36.3%" left="51.6%">30</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="37.1%" left="50%">31</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="37.9%" left="48.4%">32</marker-point>
    <!-- end -->
    <!-- start ：top 递增0.8% left递减1.6% -->
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="35.3%" left="47.3%">33</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="36.1%" left="45.7%">34</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="36.9%" left="44.1%">35</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="37.7%" left="42.5%">36</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="38.5%" left="40.9%">37</marker-point>
    <!-- end -->
    <!-- start: top 递增1.2% left递减2.4% -->
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="43.5%" left="24.2%">38</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="44.7%" left="21.8%">39</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="45.9%" left="19.4%">40</marker-point>
    <!-- end -->
    <!-- start: top 递增1.2% left递减2.4% -->
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="45.5%" left="25.2%">41</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="46.7%" left="22.8%">42</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="47.9%" left="20.4%">43</marker-point>
    <!-- end   -->
    <!-- start：top 递增1.7% left递减3.4% -->
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="55.2%" left="45.4%">44</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="56.9%" left="42%">45</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="58.6%" left="38.6%">46</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="60.3%" left="35.2%">47</marker-point>
    <!-- end -->
    <!-- start：top 递增1.7% left递减3.4% -->
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="57.6%" left="45.8%">48</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="59.3%" left="42.4%">49</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="61%"   left="39%">50</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="62.7%" left="35.6%">51</marker-point>
    <!-- end -->
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="68%"   left="25%">52</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="72.3%" left="16.6%">53</marker-point>
    <!-- start：top 递增1.7% left递减3.4% -->
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="65.5%" left="53.5%">54</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="67.2%" left="50.1%">55</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="68.9%" left="46.7%">56</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="70.6%" left="43.3%">57</marker-point>
    <!-- end -->
    <!-- start：top 递增1.7% left递减3.4% -->
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="67.9%" left="53.9%">58</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="69.6%" left="50.5%">59</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="71.3%" left="47.1%">60</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="73%"   left="43.7%">61</marker-point>
    <!-- end -->
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="81.2%" left="29.8%">62</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="85.1%" left="23%">63</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="54.7%" left="49.1%">64</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="57.3%" left="49.1%">65</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="63.4%" left="58.3%">66</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="65.9%" left="58.3%">67</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="69.8%" left="36.2%">68</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="72.3%" left="38.3%">69</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="72.2%" left="33.1%">70</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="74.4%" left="34.7%">71</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="73.6%" left="21.1%">72</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="74.9%" left="18.6%">73</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="76.4%" left="22.5%">74</marker-point>
    <marker-point borderColor="#d7b800" activeColor="#ffff00" top="77.5%" left="20.1%">75</marker-point>
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
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
  .spot-light-layer-container{
    position: absolute;
    top:0;
    left:0;
    height:100%;
  }
</style>
