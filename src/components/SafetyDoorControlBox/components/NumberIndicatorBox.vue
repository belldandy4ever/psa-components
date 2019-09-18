<template>
    <div class="number-indicator-container"  :title="title">
        <div class="number-label">{{shortName || title}}</div>
        <div class="number-scope">{{numberText}}</div>
    </div>
</template>

<script>
export default {
    props:{
        number:{
            type:Number,
            default: 0
        },
        title:{
            type:String,
            default:''
        },
        shortName:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            numberText:this.prefixInteger(this.number)
        }
    },
    watch:{
        number(cur,prev){
            this.setNumber(cur)
        }
    },
    methods:{

        setNumber(targetNumber){
            this.numChangeIntervalTimer && clearTimeout(this.numChangeIntervalTimer)
            if(targetNumber > 99999.99 || targetNumber < -9999.99){
                return this.numberText = '------'
            }
            const prevNumber = parseFloat(this.numberText === '------' ? '0' : this.numberText) 
            const difference = targetNumber - prevNumber
            const step = difference / (500/16)
            let currentNumber = prevNumber
            if(targetNumber >= 0) {
                this.numChangeIntervalTimer = setInterval(()=>{
                    currentNumber === targetNumber && clearInterval(this.numChangeIntervalTimer)
                    currentNumber = currentNumber + step > targetNumber ? targetNumber : currentNumber + step
                    this.numberText = this.prefixInteger(currentNumber)
                },16)
            }else{
                this.numChangeIntervalTimer = setInterval(()=>{
                    currentNumber === targetNumber && clearInterval(this.numChangeIntervalTimer)
                    currentNumber = currentNumber + step < targetNumber ? targetNumber : currentNumber + step
                    this.numberText = this.prefixInteger(currentNumber)
                },16)
            }
        },

        prefixInteger(num, numLength=8, toFixed=2) {
            const isMinus = num < 0
            const targetLength = isMinus ? numLength - 1 : numLength
            let originNumStr = isMinus ? num.toFixed(toFixed).slice(1) : num.toFixed(toFixed)
            let resNumStr = ''

            if(originNumStr.length >= targetLength){
                resNumStr =  originNumStr.slice(originNumStr.length - targetLength)
            }else{
                const preFix = new Array(targetLength - originNumStr.length).fill('0').join('')
                resNumStr = `${preFix}${originNumStr}`
            }
     
            return isMinus ? `-${resNumStr}` : resNumStr
        }
    }
}
</script>

<style lang="scss" scoped>
.number-indicator-container{
    width:85px;
    height: 60px;
    margin:5px 15px;
    border-radius: 4px;
    background-image: linear-gradient(to top, #626467, #747577, #939598);
    position: relative;
    .number-label{
        font-size: 12px;
        line-height: 24px;
        height:24px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .number-scope{
        width:85%;
        height:26px;
        line-height: 26px;
        text-align: center;
        border: 1px solid #c1d1dc;
        border-radius: 4px;
        background-color: #7aa597;
        font-size: 14px;
        margin: 0 auto;
    }
}
</style>