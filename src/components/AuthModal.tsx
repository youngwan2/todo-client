import { useState } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";


interface PropsType {
    showModal: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;

}

export default function AuthModal({ showModal, onClick }: PropsType) {
    const [toggle, setToggle] = useState(true);

    function onToggle() {
        setToggle(old => !old);
    }

    return (
        <>
            <Overlay onClick={onClick} showModal={showModal}></Overlay>
            <Container showModal={showModal}>

                {toggle ? <LoginModal onToggle={onToggle} /> : <SignUpModal onToggle={onToggle} />}
            </Container>
        </>
    )
}

const Overlay = styled.div<{ showModal?: boolean }> `
    visibility:  ${({ showModal }) => showModal ? "visible" : "hidden"};
    opacity:  ${({ showModal }) => showModal ? 1 : 0};
    transition: 0.5s opacity, 0.5s visibility;
    position: fixed;
    background-color: #0000002c;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`

const Container = styled.section<{ showModal?: boolean }>`
    visibility:  ${({ showModal }) => showModal ? "visible" : "hidden"};
    opacity:  ${({ showModal }) => showModal ? 1 : 0};
    position: fixed;
    max-width: 380px;
    padding: 16px 12px;
    width: 100%;
    height: auto;
    top: 50%;
    left: 50%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 25px 2px rgba(0, 0, 0, 0.1);
    transform: translate(-50%, -50%);
`