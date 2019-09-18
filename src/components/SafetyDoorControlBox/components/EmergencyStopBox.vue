<template>
    <indicator-container :width="75" title="Emergency Stop" shortName="E-Stop" >
        <img v-show="isActive" :src="images.btnActive" alt="" style="display:block;width:75%">
        <img v-show="!isActive" :src="images.btnInactive" alt="" style="display:block;width:75%">
    </indicator-container>
</template>

<script>
import IndicatorContainer from './common/IndicatorContainer.vue'
export default {
    components:{
        IndicatorContainer
    },
    props:{
        isActive:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            images:Object.freeze({
                btnActive:require('../assets/emergency-btn-active.png'),
                btnInactive:require('../assets/emergency-btn-inactive.png'),
            })
        }
    }
}
</script>