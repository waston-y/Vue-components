import pager from './pager.vue'
import slider from './slider.vue'
import progressBar from './progress-bar.vue'

export default {
    install(Vue) {
        Vue.component('pager', pager)
        Vue.component('progress-bar', progressBar)
        Vue.component('slider', slider)
    }
}