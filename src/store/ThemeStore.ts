import { defineStore } from 'pinia'
import { themeSetup } from '../utils/index';


// media query for dark theme
const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

export const useThemeStore = defineStore('ThemeStore', {
    state: () => ({
        theme: localStorage.getItem('theme') ?? (
            (darkThemeMediaQuery.matches)
                ? 'dark' : 'light'
        ),
    }),
    actions: {
        changeTheme(theme: string) {
            return this.theme = theme;
        }
    }
})

export default {
    namespaced: true,
    state: {
        theme: localStorage.getItem('theme') ?? 'dark',
    },
    mutations: {
        setTheme(state: any, theme: string) {
            state.theme = theme
        }
    },
    getters: {
        theme(state: any) {
            return state.theme
        }
    },
    actions: {
        changeTheme(context: any, theme: string) {
            context.commit('setTheme', theme)
            themeSetup()
        }
    },
}
