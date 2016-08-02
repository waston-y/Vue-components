<style lang="sass" src="./progress-bar.scss"></style>

<template>
<div class="progress-bar">
    <div v-el:outer class="bar bar-outer">
        <div v-el:inner class="bar bar-inner" :style="{width: (progress*100) + '%'}">
        	<span v-el:show class="percent">0%</span>
        </div>
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
        }
    },
    ready(){
    	let component = this
        component.sync()
    },

    watch: {   /*watching*/
        'progress': function(newVal){
            if(newVal == undefined)
                return false;  //stop function
            let component = this
            component.sync()   
        }
    },

    methods: {
    	sync(){
			let component = this
       		component.$els.show.innerHTML = 
        		(component.progress == 0) ? '0%' : (component.progress*100).toFixed(0) + '%'
    	}
    }
}
</script>