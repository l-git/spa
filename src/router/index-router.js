
import Index from '@/components/Index.vue'

//import C1 from '@/components/C1.vue'
const C1 = () => import('@/components/C1.vue')
import C2 from '@/components/C2.vue'

const Switch =()=> import('@/components/ele/switch.vue')

export default [
    { path: '/', 
    component: Index,
        children:[
            {
                path:'c1',
                component:C1
            },
            {
                path:'c2',
                component:C2
            },
            {
                path:'Switch',
                component:Switch
            },
        ]
    }
  ]