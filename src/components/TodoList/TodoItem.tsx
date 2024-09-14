import styled from "styled-components"
import { TodoItem as TodoType } from "../../types/todo"
import { icons } from "../../constants/icon"



interface PropsType {
  todo: TodoType
}
export default function TodoItem({ todo }: PropsType) {

  const { ContentIcon, DateIcon, IdIcon, TimeIcon } = icons
  return (
    <Item>
      <ItemId><IdIcon color="#03A356" /><Span>{todo.id}</Span></ItemId>
      <Flex>
        <ItemTitle><ContentIcon color="#03A356" /><Span>{todo.title}</Span></ItemTitle>
        <ItemTime><TimeIcon color="#03A356" /><Span>{todo.startTime}-{todo.endTime}</Span></ItemTime>
        <ItemDate><DateIcon color="#03A356" /><Span>{todo.dueDate}</Span></ItemDate>
      </Flex>
    </Item>
  )
}


const Item = styled.div`
line-height: 1.5;
  padding: 10px;
  border-bottom: 1px solid #ddd;
 `

const ItemId = styled.p`
  margin-right: 10px;
 `
const ItemTitle = styled.h4`
  display: flex;
  align-items: center;
`

const ItemTime = styled.p`
  display: flex;
  align-items: center;
 `
const ItemDate = styled.p`
  display: flex;
  align-items: center;
`

const Span = styled.span`
  padding-left: 5px;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 `