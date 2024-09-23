import styled from "styled-components";

import { type FormEvent, type ChangeEvent, useState } from 'react'
import { EMAIL_VALIDATION, PASSWORD_VALIDATION, USERNAME_VALIDATION } from "../../constants/signup";
import { addUser } from "../../services/authService";



interface PropsType {
    onToggle: () => void;
}

export default function SignUpModal({ onToggle }: PropsType) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState({
        username: '',
        email: '',
        password: '',
        confirm: '',
    })


    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const user = {
            username,
            email,
            password,
        }

        const message = await addUser(user)
        if(!message){
            alert("회원가입 실패")
        } else {
            alert("회원가입 성공")
            onToggle()
        }
    }

    function handleSetUsername(e: ChangeEvent<HTMLInputElement>) {
        const value = e.currentTarget.value
        setUsername(value)

        if (!e.currentTarget.checkValidity()) {
            setMessage({ ...message, username: '형식과 일치하지 않습니다.' })
        }

    }
    function handleSetEmail(e: ChangeEvent<HTMLInputElement>) {
        const value = e.currentTarget.value
        setEmail(value)

        if (!e.currentTarget.checkValidity()) {
            setMessage({ ...message, email: '형식과 일치하지 않습니다.' })
        }

    }
    function handleSetPassword(e: ChangeEvent<HTMLInputElement>) {
        const value = e.currentTarget.value
        setPassword(value)

        if (!e.currentTarget.checkValidity()) {
            setMessage({ ...message, password: '형식과 일치하지 않습니다.' })
        }
    }

    function handleConfirm(e: ChangeEvent<HTMLInputElement>) {
        const value = e.currentTarget.value
        if (value !== password) {
            setMessage({ ...message, confirm: '비밀번호와 일치하지 않습니다.' })
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Title>회원가입</Title>
            <InputArea>
                <Label htmlFor="username">Username</Label>
                <Input onChange={handleSetUsername} pattern={USERNAME_VALIDATION} placeholder="영문, 숫자 조합(3 ~ 16)" type="text" name="username" />
            </InputArea>
            <InputArea>
                <Label htmlFor="email">Email</Label>
                <Input onChange={handleSetEmail} pattern={EMAIL_VALIDATION} placeholder="이메일" type="text" name="email" />
            </InputArea>

            <InputArea>
                <Label htmlFor="password">Password</Label>
                <Input autoComplete="new-password" onChange={handleSetPassword} pattern={PASSWORD_VALIDATION} placeholder="영문, 특수문자, 숫자 조합(8자 이상)" type="password" name="password" />
            </InputArea>
            <InputArea>
                <Label htmlFor="password-confirm">Confirm</Label>
                <Input  autoComplete="new-password" onChange={handleConfirm} placeholder="비밀번호 재확인" type="password" name="password-confirm" />
            </InputArea>
            <Button>등록</Button>
            <ToggleButton onClick={onToggle}>이미 회원 이신가요?</ToggleButton>
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

