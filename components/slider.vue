<style lang="sass">
    .slider {
        overflow: hidden;
        position: relative;
        ul {
            list-style: none;
            position: absolute;
            padding-left: 0px;
            transition: all 0.5s;
            li {
                float: left;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .slider-btns {
            list-style: none;
            .circle-span {
                span {
                    width: 20px;
                    height: 20px;
                    border-radius: 100%;
                    color: #f0f0f0;
                }
            }
        }
    }
</style>
<template>
    <div class="slider" v-bind:style="{width: width + 'px', height: height +'px'}">
        <ul v-bind:style="{left: 0, height: height+'px', width: width*images.length +'px'}" v-el:ul-imgs>
            <li class="item" v-for="image in images">
               <img :src="image.src" :alt="image.name" v-bind:style="{width: width + 'px', height: height +'px'}">
            </li>
        </ul>
        <ul class="slider-btns" v-bind:style="{bottom: '20px', left: ((20*images.length)/2)+'px'}">
            <li class="circle-span" v-for="img in images">
                <span @click="switchImage($index)" class="fa fa-circle"></span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: {
            images: {
                type: Array,
                default: [],
            },
            height: {
                type: Number,
                default: 290,
            },
            width: {
                type: Number,
                default: 1200,
            }
        },
        data() {
            return {
                timer: null
            }
        },
        ready() {
            let component = this
            component.init()
        },
        methods: {
            init() {
                let component = this
                let imgs = component.$els.ulImgs
                let length = component.images.length
                component.timer = setInterval(function() {
                    let left = Math.abs(parseInt(imgs.style.left))
                    if (left < component.width * (length - 1)) {
                        imgs.style.left = '-' + (left + component.width) + 'px'
                    } else {
                        imgs.style.left = 0
                    }
                }, 5000)
            },

            switchImage(val) {

            },
        }
    }
</script>