import Vue from 'vue'
import jQuery from 'jquery'
import VueRouter from "vue-router"
import routerMap from "./router-map"
import exts from "./components/index"
import root from "./root/root.vue"

window.$ = window.jQuery = jQuery 

Vue.use(VueRouter)	//使用VueRouter
Vue.use(exts) //载入组件模块


$(function(){
	var router = new VueRouter({
		history: true,
        saveScrollPosition: true
	})
	router.map(routerMap)
	var app = Vue.extend(root)
	router.start(app, document.body)
});

