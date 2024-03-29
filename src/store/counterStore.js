import {defineStore} from "pinia";

const userCounter = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    getters: {
        getCount: state => state.count
    },
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    }
})

export default userCounter