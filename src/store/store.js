import Vue from 'vue'
import Vuex from 'vuex'
import { instance as http } from '@/utils/http'
Vue.use(Vuex)
let store = new Vuex.Store({
    state:{
        menu:[],
        group:[],
        table:[]
    },
    mutations:{
        updateMenu(state,data) {
            state.menu = data.data
        },
        updateGroup(state,data) {
            state.group = data
        },
        updateTable(state,data) {
            console.log(data)
            state.table = data
        }
    },
    actions:{
        fetchMenu({commit}) {
            http.get('/servers/menus.json')
            .then(res=> {
                console.log(res)
                commit('updateMenu',res)
            })
        },
        fetchGroup({commit}) {
            http.get('/servers/group.json')
            .then(res=> {
                console.log(res)
                commit('updateGroup',res.orgs)
            })
        },
        fetchTable({commit,state}){
            http.get('/servers/user.json')
            .then(res=> {
                commit('updateTable',res.userList)
            })
        }
    },
    getters:{
        filterGroup(state) {
            return (filter) => {
                if(filter){
                    let res = state.group.filter((item) => {
                        return item.ORGNAME.indexOf(filter)>-1 || item.FORGNAME.indexOf(filter)>-1
                    })
                    return res
                } else {
                    return state.group
                }
                
            }
        }
    },
    modules:{}
})
export default store