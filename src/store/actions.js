import * as types from './mutation-types'

//Commit function takes two parameters: Name of the mutation & Payload that we intend to send to mutation
//Here commit is a Vuex object
export const initJokes = ({commit}) => {
    fetch('https://official-joke-api.herokuapp.com/random_ten'/*End point */,{
        method: 'GET'
    })
    .then(response => response.json())
    .then(json => commit(types.INIT_JOKES, json))
}

export const addJoke = ({commit}) => {
    fetch('https://official-joke-api.herokuapp.com/random_joke',{
        method: 'GET'
    })
    .then(response => response.json())
    .then(json => commit(types.ADD_JOKE, json))
}

export const removeJoke = ({commit}, index) => {
    commit(types.REMOVE_JOKE, index)
}

// There’s three items to the Vuex Recipe:

// The store centralizes all state in one global store object. That way, all components have access to the same state. As a result, updating state happens in a very controlled and predictable manner.

// Mutations represent the only way to update state. By having very specific function names, these mutations can be committed from actions anywhere in the application in order to modify the state.

// Actions commit mutations. These actions signal a mutation to fire from anywhere in the application.