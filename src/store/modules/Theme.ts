import { createStore } from 'vuex'
import {themeSetup} from '../../utils/index';

export default {
    namespaced: true,
    state: {
        theme : localStorage.getItem('theme') || 'light',
    },
    mutations: {
        setTheme(state : any, theme : string) {
            state.theme = theme
        }
    },
    getters: {
        theme(state : any) {
            return state.theme
        }
    },
    actions: {
        changeTheme(context : any, theme : string) {
            context.commit('setTheme', theme)
            themeSetup()
        }
    },
}
