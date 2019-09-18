<template>
    <div class="svg-element-container">
        <v-btn absolute dark fab color="pink" style="top:0;right:0;" @click="resetViewBox">
            <v-icon>mdi-refresh</v-icon>        
        </v-btn>
        <power-distribution  
            ref="svgRef" 
            class="svg-element"
            :width="width"
            :height="height"
        />
    </div>
</template>

<script>
import PowerDistribution from './svgs/power-distribution.svg?inline';
import svgUtils from './svgUtils'
export default {
    components:{
        PowerDistribution
    },

    testBoxEl:null,

    props:{
        width:{
            type:String,
            default:'900px'
        },
        height:{
            type:String,
            default:'600px'
        },
        points:{
            test: true
        }
    },

    data(){
        return {
            defaultViewBox:{ height:0,width:0,x:0,y:0,zoom:0 },
        }
    },

    methods:{
        resetViewBox(e){
            if(!this.svgRef) return;
            this.svgRef.viewbox(this.defaultViewBox)
        },

        toggleTestBox(status=false){
            const testBoxTransfromCenters = svgUtils.getTransformCenters(this.testBoxEl)
            if(status){
                return this.testBoxEl.animate(500).rotate(360,...testBoxTransfromCenters.topRight).loop()
            }
            return this.testBoxEl.finish()
        }
    },

    watch:{
        points(cur,prev){
            if(cur.test !== prev.test){
                this.toggleTestBox(cur.test)
            }
        }
    },

    mounted(){
        this.svgRef = SVG.adopt(this.$refs.svgRef).panZoom()
        this.defaultViewBox = this.svgRef.viewbox()

        this.testBoxEl = SVG.get('#testBox')

    }
}
</script>

<style lang="scss">
.svg-element-container{
    position: relative;
    .svg-element{
        cursor:move;
        border: 1px solid #000;
    }
}
</style>

