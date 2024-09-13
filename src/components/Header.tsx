import styled from "styled-components";
import { useState } from 'react'
import { createPortal } from 'react-dom';
import LoginModal from "./LoginModal";

export default function Header() {
    const [showModal, setShowModal] = useState(false)
    
    const domNode = document.documentElement;

    function handleToggle() {
        setShowModal(prev=>!prev)
    }

    return (
        <HeaderContainer>
            <HeaderTitle>오늘의 할 일</HeaderTitle>
            <LoginButton onClick={handleToggle}>로그인</LoginButton>

            {createPortal(<LoginModal showModal={showModal} onClick={handleToggle}/> , domNode)}
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
    
    /* header hover */
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
    
    /* header active */
    &:active {
      color: #ddd;
    }
`

const LoginButton = styled.div`
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 4px 8px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    
    /* login button hover */
    &:hover {
      background-color: #ddd;
    }
`