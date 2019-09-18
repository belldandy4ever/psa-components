<template>
    <indicator-container  :title="title" :shortName="shortName" >
        <span style="font-size:12px;position:absolute; left:5px; top:0">on</span>
        <span style="font-size:12px;position:absolute; right:5px; top:0">off</span>
        <img 
            :src="require('../assets/knob.png')" 
            alt="" 
            style="transition: all .3s ease; transform-origin:center;width:60%;margin-top:10px"
            :style="{transform:isActive ? 'rotate(-30deg)' : 'rotate(30deg)'}"
        >
    </indicator-container>
</template>

<script>
    import IndicatorContainer from './common/IndicatorContainer.vue'
    export default {
        components:{
            IndicatorContainer
        },
        props:{
            title:{
                type:String,
                default:'IndicatorBtn'
            },
            isActive:{
                type:Boolean,
                default:false
            },
            shortName:{
                type:String,
                default:''
            }
        }
    }
</script>
