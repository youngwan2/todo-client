import styled from "styled-components";




interface PropsType {
    onToggle: ()=>void;
}
export default function SignUpModal({ onToggle }: PropsType) {
    return (
        <Form>
            <Title>회원가입</Title>
            <InputArea>
                <Label htmlFor="username">Username</Label>
                <Input placeholder="유저이름(닉네임)" type="text" name="username" />
            </InputArea>
            <InputArea>
                <Label htmlFor="email">Email</Label>
                <Input placeholder="이메일" type="text" name="email" />
            </InputArea>

            <InputArea>
                <Label htmlFor="password">Password</Label>
                <Input placeholder="비밀번호" type="password" name="password" />
            </InputArea>
            <InputArea>
                <Label htmlFor="password-confirm">Confirm</Label>
                <Input placeholder="비밀번호 재확인" type="password" name="password-confirm" />
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

