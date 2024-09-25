import axios from 'axios';
import { User } from '../types/user';
import { setToken } from '../utils/tokenUtil';


export const apiClient = axios.create({
    baseURL: 'http://localhost:80/',
});

apiClient.defaults.headers.post["Content-Type"] = 'application/json'

// 회원중복 확인
async function duplicateUser(username: string) {
    const result = await apiClient.post('duplicate-check', username)
    if (result.data.existedUser) {
        return true;
    } else {
        return false;
    }

}


// 회원가입
export const addUser = async (user: User) => {
    if (!user.email || !user.password || !user.username) {
        throw new Error("모든 필드를 채워야 함")
    }
    try {
        const { data } = await apiClient.post('register', user)
        const { message } = data;
        return { message }
    } catch (error) {
        throw new Error("회원가입 실패:" + error)
    }
}

// 로그인
export const login = async (user: Pick<User, 'username' | 'password'>) => {
    if (!user.username) {
        throw new Error("아이디를 입력하세요.")
    }
    if (!user.password) {
        throw new Error("비밀번호를 입력하세요.")
    }

    try {
        const response = await apiClient.post('login', user)
        if (response.status > 399) {
            throw new Error("로그인 실패:" + response.statusText)
        } else {
            setToken('accessToken', response.data.token)
            return response.data.message
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error("로그인 실패:" + error.message)
        }
    }
}