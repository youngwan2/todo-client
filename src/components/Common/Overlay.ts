import styled from "styled-components";

export const Overlay = styled.div<{ showModal?: boolean }> `
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