<style lang="sass" src="./progress-bar.scss"></style>
<template>
<div class="progress-bar" style="border-radius: 3px; background: #e0e0e0;">
    <div v-el:outer class="bar bar-outer">
        <div v-el:inner class="bar bar-inner" :style="{width: (progress*100) + '%'}">
        	<span v-el:show class="percent" style="padding-left: 3px;">0%</span>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        props: {
            progress: {
                required: true,
                type: Number,
                default: 0,
                validator(val) {
                    return val <= 1 && val >= 0;
                }
            }
        },
        data() {
            return {}
        },
        ready() {
            this.sync()
        },

        watch: { /*watching*/
            progress(newVal) {
                if (newVal == undefined)
                    return false // stop function
                this.sync()
            }
        },

        methods: {
            sync() {
                this.$els.show.innerHTML =
                    (this.progress === 0) ? '0%' : `${(this.progress * 100).toFixed(0)}%`
            }
        }
    }
</script>