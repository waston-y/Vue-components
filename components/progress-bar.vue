<style lang="sass" src="./progress-bar.scss"></style>
<template>
<div class="pk-progress-bar">
    <div v-el:msgbox class="progress-msg">
        <span v-el:showpercent class="percent">0%</span>
        <div style="position: relative">
            <span class="triangle"></span>
        </div>
    </div>
    <div v-el:outer class="bar bar-outer">
        <div v-el:inner class="bar bar-inner" :style="{width: (progress*100) + '%'}"></div>
    </div>
</div>
</template>
<script>
export default {
    props:{
        progress:{
            required: true,
            type: Number,
            default: 0,
            validator(val){
                return val <= 1 && val >= 0;
            }
        }
    },
    data(){
        return{
            timer: null,
        }
    },
    watch: {   /*监视*/
        'progress': function(newVal, oldVal){
            if(newVal == undefined)
                return false;  //验证失败，终止函数。
            let component = this;
            var msgBox = component.$els.msgbox
            var pct = component.$els.showpercent
            if(newVal == 0) pct.innerHTML = '0%' //清空状态
            msgBox.style.marginLeft = newVal * 100 + '%'
            pct.innerHTML = (newVal * 100).toFixed(0) + '%'
        }
    },
}
</script>