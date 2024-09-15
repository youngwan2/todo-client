import axios from 'axios';
import { User } from '../types/user';

const apiClient = axios.create({
    baseURL: 'http://localhost:80/',
    headers: {
        'Content-Type': 'application/json',
    },
});


// 회원가입
export const addUser = async (user: User) => {
    if (!user.email || !user.password || !user.username) {
        throw new Error("모든 필드를 채워야 함")
    }

    // const existingUser = await apiClient.post('user', user.email)
    // if (existingUser.data.users.length > 0) {
    //     throw new Error("이미 존재하는 이메일")
    // }

    try {
        const { data } = await apiClient.post('register', user)
        return data.user
    } catch (error) {
        throw new Error("회원가입 실패:" + error)
    }
}
