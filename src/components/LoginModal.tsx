import styled from "styled-components";


interface PropsType {
    showModal: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

export default function LoginModal({ showModal, onClick }: PropsType) {
    return (
        <>
            <Overlay showModal={showModal} onClick={onClick} />
            <Form showModal={showModal}>
                {/* <Label htmlFor="username">Username</Label>
            <Input type="text" name="username" /> */}
                <InputArea>
                    <Label htmlFor="email">Email</Label>
                    <Input placeholder="이메일" type="text" name="email" />
                </InputArea>

                <InputArea>
                    <Label htmlFor="password">Password</Label>
                    <Input placeholder="비밀번호" type="password" name="password" />
                </InputArea>
                <Button>로그인</Button>
            </Form>
        </>
    )
}

const Overlay = styled.div<{showModal ?: boolean}> `
    visibility:  ${({ showModal }) => showModal ? "visible" : "hidden"};
    opacity:  ${({ showModal }) => showModal ? 1 : 0};
    position: fixed;
    background-color: #0000002c;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`

const Form = styled.form<{ showModal?: boolean }>`
    visibility:  ${({ showModal }) => showModal ? "visible" : "hidden"};
    opacity:  ${({ showModal }) => showModal ? 1 : 0};
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    background-color: white;
    padding: 24px 12px;
    transform: translate(-50%, -50%);
`

const InputArea = styled.div`
    margin-top: 1rem;
    max-width: 300px;
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


