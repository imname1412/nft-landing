import styled from "styled-components";

export const ScrollContainer = styled.div`
    /* display: ${prop => prop.isScroll ? 'flex':'none'}; */
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: ${prop => prop.isScroll ? 'visble':'hidden'};
    opacity: ${prop => prop.isScroll ? '1':'0'};

    border: 3px solid transparent;
    border-radius: 3rem;
    position: fixed;
    bottom: 5%;
    right: 5%;
    width: 4rem;
    height: 4rem;
    z-index: 20;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
        ),
        linear-gradient(101deg, var(--pink), var(--orange));
    background-origin: border-box;
    background-clip: content-box , border-box;
    box-shadow: 1px 1000px 1px var(--background) inset;
    transition: 0.5s ease-in-out;

    &:hover{
        box-shadow: none;
    }

    a{
        svg{
            font-size: 2rem;
            color: var(--accent-color1);
        }
    }
`
