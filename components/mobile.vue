<template>
    <div class="iphone-container">
        <!--模仿手机开始-->
        <div class="phone-shape small">
            <span class="button-one buttons"></span>
            <span class="button-two buttons"></span>
            <span class="button-three buttons"></span>
            <span class="button-four button last"></span>
            <div class="top-details">
                <span class="camera"></span>
                <span class="circle"></span>
                <span class="speaker"></span>
            </div>
            <div class="phone-screen">
                <div v-el:phone-content class="phone-content">
                    <slot>
                        如果没有内容就显示我！
                    </slot>
                </div>
            </div>
            <div class="circle-button"></div>
            <!--右侧滑动条开始 /*绝对定位 对手机形状不影响*/-->
            <div class="slider-bar" :style="{display: scrollBar}">
                <button v-el:top-btn class="circle-btn top-btn" @mousedown="buttonEvent('top')">
                    <i class="fa fa-caret-up"></i>
                </button>
                <div v-el:slider-box class="slider-box">
                    <button v-el:slider-btn class="circle-btn slider-btn" @mousedown="drag"></button>
                </div>
                <button v-el:bottom-btn class="circle-btn bottom-btn" @mousedown="buttonEvent('bottom')">
                    <i class="fa fa-caret-down"></i>
                </button>
            </div>
            <!--右侧滑动条结束-->
        </div>
    </div>
    <!--模仿手机形状结束-->
</template>
<style lang="sass" src="./mobile.scss"></style>
<script>
    export default {
        props: {
            scroll: {
                default: true
            }
        },
        data() {
            return {
                timer: null,
            }
        },
        computed: {
            scrollBar: function() {
                return (this.scroll == true) ? "inline" : "none";
            }
        },
        methods: {
            drag() {
                let component = this;
                var slider = component.$els.sliderBtn;
                var content = this.$els.phoneContent;
                var maxTop = component.$els.sliderBox.offsetHeight - slider.offsetHeight;
                var boxOffset = $(component.$els.sliderBox).offset()
                let move = function(event) {
                    var top = event.pageY - boxOffset.top;
                    if (top <= maxTop && top >= 0) {
                        slider.style.top = top + 'px';
                        var percent = (top / maxTop).toFixed(4);
                        content.style.top = "-" + percent * (content.offsetHeight - 422) + 'px';
                    }
                }
                $(document).bind("mousemove", move)
                $(document).one("mouseup", function() {
                    $(document).unbind("mousemove", move)
                })
            },
            buttonEvent(directive) {
                if (event.button == 2) return false;
                let component = this;
                var slider = component.$els.sliderBtn;
                var maxTop = component.$els.sliderBox.offsetHeight - slider.offsetHeight;
                var content = this.$els.phoneContent;
                component.timer = setInterval(function() {
                    var top = parseInt(slider.style.top) || 0;
                    if (directive == 'top') {
                        if (top > 0) top--;
                    } else {
                        if (top < maxTop) top++;
                    }
                    slider.style.top = top + 'px';
                    var percent = (top / maxTop).toFixed(4); //滚动按钮距离顶部的百分比
                    /* 往下偏移量 = 滑动条下移的百分比 × （屏幕中内容的高度 - 屏幕高度）*/
                    content.style.top = "-" + percent * (content.offsetHeight - 422) + 'px';
                }, 10);
                $(document).one("mouseup", function() {
                    clearInterval(component.timer);
                })
            }
        }
    }
</script>