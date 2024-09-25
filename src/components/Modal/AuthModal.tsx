import styled from "styled-components";

import { useState, useContext } from "react";

import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { Overlay } from "../Common/Overlay";
import { AuthContext } from "../../contexts/AuthContext";


interface PropsType {
    showModal: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;

}

export default function AuthModal({ showModal, onClick }: PropsType) {
    const [toggle, setToggle] = useState(true);
    const {isLoggedIn} = useContext(AuthContext)

    function onToggle() {
        setToggle(old => !old);
    }

    if(isLoggedIn){
        return <></>;
    }
    return (
        <>
            <Overlay onClick={onClick} $showmodal={showModal}></Overlay>
            <Container showModal={showModal}>
                {toggle ? <LoginModal onToggle={onToggle} /> : <SignUpModal onToggle={onToggle} />}
            </Container>
        </>
    )
}



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