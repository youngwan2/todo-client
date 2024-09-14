import { ReactNode } from "react"
import styled from "styled-components"

interface PropsType {
  children: ReactNode
}

export default function TodoList({ children }: PropsType) {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
  margin: 2rem auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  `