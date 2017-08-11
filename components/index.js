
import slider from './slider.vue'
import progressBar from './progress-bar.vue'
import mobile from './mobile.vue'
import pager from './pager.vue'
import pullRefresh from './pullRefresh.vue'
import tabs from './tabs.vue'
import kkSelect from './select.vue'

export default {
    install(Vue) {
        Vue.component('progress-bar', progressBar)
        Vue.component('slider', slider)
        Vue.component('mobile', mobile)
        Vue.component('pager', pager)
        Vue.component('pull-refresh', pullRefresh)
        Vue.component('tabs', tabs)
        Vue.component('kk-select', kkSelect)
    }
}