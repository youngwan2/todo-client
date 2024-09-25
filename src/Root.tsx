import styled from "styled-components";
import Header from "./components/Layout/Header";
import Body from "./components/Layout/Body";
import { AuthProvider } from "./contexts/AuthProvider";


const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: 1em;
  background-color: #f9f9f9;
  border-radius: 0.5em;
`
export default function Root() {
  return (
    <AuthProvider>
      <Section>
        <Header />
        <Body />
      </Section>
    </AuthProvider>
  )
}
