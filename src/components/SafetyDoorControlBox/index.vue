<template>
    <v-row class="safety-door-control-box">
        <v-col cols="6" class="left-flex-box">
            <v-row class="row-1 center" >
                <emergency-stop-box :isActive="false"/>
            </v-row>
            <v-row class="row-2">
                <number-indicator-box  title="PRIMARY TWIN CONTAINER NUMBER"   shortName="109.M-PG3" :number="523.88"/>
                <number-indicator-box  title="PRIMARY SINGLE CONTAINER NUMBER" shortName="109.M-PG4" :number="0"/>
                <number-indicator-box  title="PRIMARY SINGLE CONTAINER NUMBER" shortName="109.M-PG4" :number="0"/>
                <number-indicator-box  title="PRIMARY SINGLE CONTAINER NUMBER" shortName="109.M-PG4" :number="0"/>
                <number-indicator-box  title="PRIMARY SINGLE CONTAINER NUMBER" shortName="109.M-PG4" :number="0"/>
                <number-indicator-box  title="PRIMARY SINGLE CONTAINER NUMBER" shortName="109.M-PG4" :number="0"/>
                <number-indicator-box  title="PRIMARY SINGLE CONTAINER NUMBER" shortName="109.M-PG4" :number="0"/>
                <number-indicator-box  title="PRIMARY SINGLE CONTAINER NUMBER" shortName="109.M-PG4" :number="0"/>
                <number-indicator-box  title="PRIMARY SINGLE CONTAINER NUMBER" shortName="109.M-PG4" :number="0"/>
                <number-indicator-box  title="PRIMARY SINGLE CONTAINER NUMBER" shortName="109.M-PG4" :number="0"/>
                <number-indicator-box  title="PRIMARY SINGLE CONTAINER NUMBER" shortName="109.M-PG4" :number="0"/>
                <number-indicator-box  title="PRIMARY SINGLE CONTAINER NUMBER" shortName="109.M-PG4" :number="0"/>
                <number-indicator-box  title="PRIMARY SINGLE CONTAINER NUMBER" shortName="109.M-PG4" :number="0"/>
                <number-indicator-box  title="PRIMARY SINGLE CONTAINER NUMBER" shortName="109.M-PG4" :number="0"/>
                <number-indicator-box  title="PRIMARY SINGLE CONTAINER NUMBER" shortName="109.M-PG4" :number="0"/>
                <number-indicator-box  title="PRIMARY SINGLE CONTAINER NUMBER" shortName="109.M-PG4" :number="0"/>
            </v-row>
            <v-row class="row-3">
                <green-indicator-box title="indicator_1"  shortName="I-1"  :isActive="true"/>
                <green-indicator-box title="indicator_2"  shortName="I-2"  :isActive="true"/>
                <green-indicator-box title="indicator_3"  shortName="I-3"  :isActive="true"/>
                <green-indicator-box title="indicator_4"  shortName="I-4"  :isActive="false"/>
                <green-indicator-box title="indicator_5"  shortName="I-5"  :isActive="false"/>
                <green-indicator-box title="indicator_6"  shortName="I-6"  :isActive="true"/>
                <green-indicator-box title="indicator_7"  shortName="I-7"  :isActive="false"/>
                <green-indicator-box title="indicator_8"  shortName="I-8"  :isActive="true"/>
                <green-indicator-box title="indicator_9"  shortName="I-9"  :isActive="false"/>
                <knob-indicator-box  title="indicator_10" shortName="I-10" :isActive="false" />
            </v-row>
        </v-col>

        <v-col cols="6" class="right-flex-box">
            <v-row class="row-1 center"></v-row>
            <v-row class="row-2">
                <knob-indicator-box   title="indicator_10"  shortName="I-10" :isActive="true" />
                <knob-indicator-box   title="indicator_10"  shortName="I-11" :isActive="true" />
                <knob-indicator-box   title="indicator_10"  shortName="I-12" :isActive="true" />
                <knob-indicator-box   title="indicator_10"  shortName="I-13" :isActive="true"/>
                <green-indicator-box  title="indicator_7"   shortName="I-14" :isActive="false"/>
                <green-indicator-box  title="indicator_7"   shortName="I-15" :isActive="true"/>
                <yellow-indicator-box title="indicator_7"   shortName="I-16" :isActive="false"/>
                <knob-indicator-box   title="indicator_10"  shortName="I-17" :isActive="true" />
                <knob-indicator-box   title="indicator_10"  shortName="I-18" :isActive="true" />
                <knob-indicator-box   title="indicator_10"  shortName="I-19" :isActive="true" />
                <green-indicator-box  title="indicator_7"   shortName="I-20" :isActive="false"/>
                <green-indicator-box  title="indicator_7"   shortName="I-21" :isActive="true"/>
                <yellow-indicator-box title="indicator_7"   shortName="I-22" :isActive="true"/>
                <yellow-indicator-box title="indicator_7"   shortName="I-23" :isActive="true"/>
            </v-row>
            <v-row class="row-3"></v-row>
        </v-col>
    </v-row>
</template>

<script>
import EmergencyStopBox from './components/EmergencyStopBox.vue'
import GreenIndicatorBox from './components/GreenIndicatorBox.vue'
import YellowIndicatorBox from './components/YellowIndicatorBox.vue'
import KnobIndicatorBox from './components/KnobIndicatorBox.vue'
import NumberIndicatorBox from './components/NumberIndicatorBox'

export default {
    components:{
        EmergencyStopBox,
        GreenIndicatorBox,
        YellowIndicatorBox,
        KnobIndicatorBox,
        NumberIndicatorBox
    }  
}
</script>

<style lang="scss" scoped>
.safety-door-control-box{
    width:1000px;
    height:670px;
    background-color: #5F7B82;
    position: relative;
    border-radius: 10px;
    box-shadow: inset #fff 0px 0px 20px;
    &::after{
        content:'';
        position: absolute;
        height:100%;
        width:8px;
        background-color: #586466;
        top:0;
        left:50%;
        margin-left: -4px;
    }
    .left-flex-box,.right-flex-box{
        padding:10px;
        height:100%;
        .row{
            margin:0;
            overflow: auto;
            &.center{
                justify-content: center;
                align-items: center;
            }
        }
    }
    .left-flex-box{
        .row-1{
            height:20%;
        }
        .row-2{
            height:50%;
        }
        .row-3{
            height:30%;
        }
    }
    .right-flex-box{
        .row-1{
            height:20%;
        }
        .row-2{
            height:50%;
        }
        .row-3{
            height:30%;
        }
    }
}
</style>