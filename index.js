import Vue from 'vue'
import jQuery from 'Jquery'
import VueRouter from "vue-router"
import routerMap from "./router-map"
import root from "./root/root.vue"

window.$ = window.jQuery = jQuery 
Vue.use(VueRouter)

(function(){
	var router = new VueRouter({
		history: true,
        saveScrollPosition: true
	})
	router.map(routerMap)
	var app = Vue.extend(root)
	Vue.start(app, document.body)
})();
