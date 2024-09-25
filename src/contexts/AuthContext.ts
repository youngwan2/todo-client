import { createContext } from 'react'

export interface LoginUserState {
    user: { name: string , } | null
    isLoggedIn: boolean,
    login: () => void,
    logout: () => void,
}

export const AuthContext = createContext<LoginUserState>({
    user: null,
    isLoggedIn: false,
    login: () => { },
    logout: () => { },

});