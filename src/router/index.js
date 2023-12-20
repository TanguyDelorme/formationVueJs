import {createRouter, createWebHistory} from "vue-router";
const Tasks = () => import('@/components/exercices/TP/Tasks.vue')
const Home = () => import('@/pages/Home.vue')
const E404 = () => import('@/pages/E404.vue')
const ExoRouter = () => import('@/pages/ExoRouter.vue')
const HelloWorld = () => import('@/components/exercices/01/HelloWorld.vue')
const ClickComponent = () => import('@/components/exercices/02/ClickComponent.vue')
const ReactiveVarsExercice = () => import('@/components/exercices/03/ReactiveVarsExercise.vue')
const DataBinding = () => import('@/components/exercices/04/DataBinding.vue')
const DirectiveOn = () => import('@/components/exercices/05/DirectiveOn.vue')
const UserForm = () => import('@/components/exercices/06/UserForm.vue')
const ConditionnalScore = () => import('@/components/exercices/07/ConditionalScoreRendering.vue')
const ToDoList = () => import('@/components/exercices/08/ToDoList.vue')
const Computed = () => import('@/components/exercices/09/ComputedField.vue')
const MyWatch = () => import('@/components/exercices/10/MyWatch.vue')
const CounterStore = () => import('@/components/CounterUsingStore.vue')
const TPStore = () => import('@/components/exercices/TPStore/TaskList.vue')

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/task',
        component: Tasks
    },
    {
        path: '/hello-world',
        component: HelloWorld
    },
    {
        path: '/clic',
        component: ClickComponent
    },
    {
        path: '/reactive',
        component: ReactiveVarsExercice
    },
    {
        path: '/data-binding',
        component: DataBinding
    },
    {
        path: '/directive-on',
        component: DirectiveOn
    },
    {
        path: '/user-form',
        component: UserForm
    },
    {
        path: '/conditional-score',
        component: ConditionnalScore
    },
    {
        path: '/todo-list',
        component: ToDoList
    },
    {
        path: '/computed',
        component: Computed
    },
    {
        path: '/my-watch',
        component: MyWatch
    },
    {
        path: '/exo/:id',
        component: ExoRouter
    },
    {
        path: '/counter',
        component: CounterStore
    },
    {
        path: '/tp-store',
        component: TPStore
    },
    {
        path: '/404',
        component: E404
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;


