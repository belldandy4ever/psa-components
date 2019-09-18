<template>
    <indicator-container :title="title" :shortName="shortName">
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
        },
        title:{
            type:String,
            default:'IndicatorBtn'
        },
        shortName:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            images:Object.freeze({
                btnActive:require('../assets/btn-indicator-yellow-light.png'),
                btnInactive:require('../assets/btn-indicator-yellow-dim.png'),
            })
        }
    }
}
</script>