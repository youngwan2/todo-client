import axios from 'axios';
import type { TodoItem } from '../types/todo';

const apiClient = axios.create({
    baseURL: 'http://localhost:80/api/v1/',
    headers: {
        'Content-Type': 'application/json',
    },
});



// 투두 추가
export async function addTodo(todo: Omit<TodoItem, 'id'>) {

    if (!todo.title || !todo.description) {
        throw new Error("제목과 세부 설명이 비어있음")
    } else {
        const response = await apiClient.post('/todos', todo);
        if (response.status > 399) throw new Error("투두 추가 실패:" + response.statusText)
        return response.data
    }
}


// 투두 수정
export async function updateTodo(todo: TodoItem) {

    if (!todo.id) {
        throw new Error("ID가 없음")
    } else {
        const response = await apiClient.put('/todos', todo);
        if (response.status > 399) throw new Error("투두 수정 실패:" + response.statusText)
        return response.data
    }

}

// 투두 삭제
export async function deleteTodo(todoId: number) {

    if (!todoId) {
        throw new Error("ID가 없음")
    } else {
        const response = await apiClient.delete(`/todos/${todoId}`);
        if (response.status > 399) throw new Error("투두 삭제 실패:" + response.statusText)
        return response.data;
    }
}
