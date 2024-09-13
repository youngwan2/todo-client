import styled from "styled-components";
import Header from "./components/Header";


const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: 2em;
  background-color: #f9f9f9;
  border-radius: 0.5em;
`
export default function Root() {
  return (
    <Section>
      <Header />
    </Section>

  )
}
