import Vue from 'vue'
import Vuex from 'vuex'
//We have used object because we're not exporting mutations by default, but we're exporting it
import { mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
    jokes: []
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})