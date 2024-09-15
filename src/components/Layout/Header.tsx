import styled from "styled-components";
import { useState } from 'react'
import { createPortal } from 'react-dom';
import AuthModal from "../Modal/AuthModal";
import { icons } from "../../constants/icon"
import WriteModal from "../Modal/WriteModal";

export default function Header() {
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showWriteModal, setShowWriteModal] = useState(false)

    const { WriteIcon, LoginIcon } = icons


    const domNode = document.documentElement;

    function handleToggleLoginModal() {
        setShowLoginModal(prev => !prev)
    }
    function handleToggleWriteModal() {
        setShowWriteModal(prev => !prev)
    }


    return (
        <HeaderContainer>
            <HeaderTitle>오늘의 할 일</HeaderTitle>
            <ButtonContainer>
                <LoginButton onClick={handleToggleLoginModal}><LoginIcon /><Span>로그인</Span></LoginButton>
                <WriteButton onClick={handleToggleWriteModal}><WriteIcon /><Span>글쓰기</Span></WriteButton>
            </ButtonContainer>
            {createPortal(<AuthModal showModal={showLoginModal} onClick={handleToggleLoginModal} />, domNode)}
            {createPortal(<WriteModal showModal={showWriteModal} onClick={handleToggleWriteModal} />, domNode)}
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    background: linear-gradient(30deg, #11cf73 30%, #1cc875);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
      background-color: #222;
    }
`

const HeaderTitle = styled.h2`
    font-size: 24px;
    margin: 0;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    transition: color 0.3s ease-in-out;
    
    &:active {
      color: #ddd;
    }
`

const ButtonContainer = styled.div`
    display: flex;
`
const LoginButton = styled.button`
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 4px 8px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
      background-color: #ddd;
    }
`

const WriteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-left:3px;
    padding: 4px 8px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
      background-color: #ddd;
    }
`

const Span = styled.span`
    padding-left: 3px;

`