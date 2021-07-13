const {sum} =require('./a')
import { arg } from './info'
sum(1,2)
import './style.css'
import './less.less'
import './img/img2.png'
import './img/img1.png'
console.log(arg)

import Vue from 'vue'

import App from './vue/app.vue'

const app = new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }
})