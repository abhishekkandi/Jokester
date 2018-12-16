<template>
    <div id="app">
        <h3>Got jokes ?</h3>
        <button class="btn btn-primary" @click="initJokes">Add Ten Random Jokes</button>
        <button class="btn btn-primary" @click="addJoke">Add Random Joke</button>
        <br>
        <span v-for="(type, index) in types" :key="index">
            <input 
            type="checkbox"
            :value="type"
            v-model="checkedTypes"
            checked>
            <label>{{type}}&nbsp;</label>
        </span>
        <br>
        <div class="col-md-12">
            <Joke
                v-for="(joke, index) in $store.state.jokes"
                v-show="checkedTypes.includes(joke.type)"
                :joke="joke"
                :index="index"
                :key="index"
            />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './Joke.vue'

export default {
    data() {
        return {
            types: ['general','knock-knock','programming'],
            checkedTypes : ['general','knock-knock','programming']
        }
    },
    //mapActions takes one paramter(Array of actions to map)
    methods: mapActions([
        'initJokes',
        'addJoke'
    ]),
    components: {
        Joke
    }
}
</script>
