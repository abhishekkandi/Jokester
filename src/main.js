import Vue from 'vue'
import App from './components/App.vue'

import store from './store'

// store.commit(
//     'INIT_JOKES',//State 1st parameter
//     [
//         //2nd parameter - payload
//         {test: 'test_joke'},
//         {test_2: 'test_joke_2'}
//     ]
// )

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})