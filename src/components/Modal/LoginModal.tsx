import styled from "styled-components";
import { login } from "../../services/authService";
import { FormEvent, useState } from "react";


interface PropsType {
    onToggle: () => void;
}
export default function LoginModal({ onToggle }: PropsType) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    async function handleSummit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const user = {
            username,
            password,
        }
        try {
            const message = await login(user)
            alert(message)
            onToggle()
        } catch (error) {
            if (error instanceof Error)
                alert(error.message)
        }
    }


    return (
        <Form onSubmit={handleSummit}>
            <Title>로그인</Title>
            <InputArea>
                <Label htmlFor="username">Username</Label>
                <Input onChange={(e) => setUsername(e.currentTarget.value)} placeholder="아이디" type="text" name="username" />
            </InputArea>

            <InputArea>
                <Label htmlFor="password">Password</Label>
                <Input onChange={(e) => setPassword(e.currentTarget.value)} placeholder="비밀번호" type="password" name="password" />
            </InputArea>
            <Button>로그인</Button>
            <ToggleButton onClick={onToggle}>회원이 아니신가요?</ToggleButton>
        </Form>
    )
}


const Form = styled.form``

const Title = styled.h2`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 600;
    color: #333;
`

const InputArea = styled.div`
    margin-top: 1rem;
    min-width: 280px;
    width: 100%;

`

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: #999;
    font-weight: 500;
    transition: color 0.3s ease;
    
    &:hover {
        color: #333;
    }
`

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

const Button = styled.button`
    display: inline-block;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    width: 100%;
    margin-top: 2rem;
    background:#1fcc67 ;
    color: #fff;
    transition: 0.5s background ;
    cursor: pointer;

    &:hover {
        background:#1cb95e ;
    }
`

const ToggleButton = styled.button`
    border:none;
    width: 100%;
    margin-top: 1.15rem;
    background: transparent;
    text-decoration: 1px underline solid;
    padding: 5px;
    cursor: pointer;
    &:hover{
        color: #1cb95e ;
        text-decoration: 2px underline solid;
    }

`
