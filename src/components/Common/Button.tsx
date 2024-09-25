import styled from "styled-components";

interface PropsType {
    children: React.ReactNode
    onClick: () => void;
}

export default function Button({ children, onClick }: PropsType) {
    return (
        <DefaultButton onClick={onClick}>
            {children}
        </DefaultButton>
    )
}


const DefaultButton = styled.button`
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