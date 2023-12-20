import { defineStore } from "pinia";


const useStore = defineStore('counter', {
    state : () => ({
        tasks : [
            { name: "Eplucher les pommes de terre", completed : false, deadline : new Date(2022, 10, 25)},
            { name: "Faire cuire les oignons", completed : true , deadline : new Date(2025, 10 ,25)},
            { name: "Ajouter les lardons aux oignons", completed : true , deadline : new Date()},
            { name: "Verser le vin blanc dans la mixture", completed : false , deadline : new Date()},
        ],
        nameToAdd : "",
        dateToAdd : new Date(),
        showCompleted : false
    }),

    getters : {
        filterCompleted () {
            return this.showCompleted ? this.tasks.filter( (t) => !t.completed ) : this.tasks
        }
    },

    actions : {
        delete(task) {
            const index = this.tasks.findIndex( (t) => t.name === task.name)
            this.tasks.splice(index , 1 )
        },
        completed(task) {
            const index = this.tasks.findIndex( (t) => t.name === task.name)
            this.tasks[index].completed = ! task.completed
        },
        add() {
            this.tasks.push({ name : this.nameToAdd, completed : false, deadline : new Date(this.dateToAdd) })



            this.nameToAdd = ""
            this.dateToAdd = new Date(2025, 10 ,25)
        },
        hide() {
            this.showCompleted = ! this.showCompleted
        }
    }
})

export default useStore;