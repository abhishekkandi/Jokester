import * as types from './mutation-types'

export const mutations = {
    //Mutations in Vuex takes two parameters
    //First State
    //Second Payload - represents data objects that mutation receives inorder to actually modify the state
    //In this example, we can expect payload to be array of jokes
    //ES6 Spread operator(Function with name INIT_JOKes)
    [types.INIT_JOKES] (state, payload){
        state.jokes.push(...payload)
    },
    [types.ADD_JOKE] (state, payload){
        state.jokes.push(payload) // Here we will be adding only one joke at a time so no ...
    },
    [types.REMOVE_JOKE] (state, index){
        state.jokes.splice(index, 1)
    }
}