const { add } = require('./mathUtils.js')

console.log(add(10, 20))

import Vue from 'vue'
import App from '../src/vue/App.vue'
new Vue({
    el: '#app',
    template: '<App />',
    components: {
        App
    }
})