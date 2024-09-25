import TodoItem from "./TodoItem"
import TodoList from "./TodoList"

import { TodoItem as TodoType } from "../../types/todo"

import fakeData from "../../mock/data"


// interface PropsType { }

export default function Todo() {
    return (
            <TodoList>
                {fakeData.map((todo:TodoType) => {
                    return (
                        <TodoItem todo={todo} key={todo.id}/>)
                })}

            </TodoList>
    )
}