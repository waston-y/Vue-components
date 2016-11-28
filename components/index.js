
import slider from './slider.vue'
import progressBar from './progress-bar.vue'
import mobile from './mobile.vue'
import pager from './pager.vue'

export default {
    install(Vue) {
        Vue.component('progress-bar', progressBar)
        Vue.component('slider', slider)
        Vue.component('mobile', mobile)
        Vue.component('pager', pager)
    }
}