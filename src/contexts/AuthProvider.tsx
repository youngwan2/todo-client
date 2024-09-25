import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { clearToken, getToken } from '../utils/tokenUtil';


export function AuthProvider({ children }: { children: React.ReactNode }) {


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<{ name: string } | null>({ name: '방문자' });

    function login() {
        const hasToken = getToken("accessToken")
        if (hasToken) {
            setIsLoggedIn(true);
            setUser({ name: '' });
        }
    }

    function logout() {
        clearToken("accessToken");
        setIsLoggedIn(false);
        setUser(null);
    }


    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }} >
            {children}
        </AuthContext.Provider>

    )
}

