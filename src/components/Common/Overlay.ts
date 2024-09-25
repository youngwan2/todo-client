import styled from "styled-components";

export const Overlay = styled.div<{ $showmodal: boolean }> `
    visibility:  ${({ $showmodal }) => $showmodal ? "visible" : "hidden"};
    opacity:  ${({ $showmodal }) => $showmodal ? 1 : 0};
    transition: 0.5s opacity, 0.5s visibility;
    position: fixed;
    background-color: #0000002c;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`