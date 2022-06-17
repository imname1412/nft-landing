import styled from "styled-components";



export const LinkContainer = styled.div`
    /* border: 1px solid #fff; */
    padding: 5rem 0;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem
`

export const Content = styled.div`
    background-color: var(--accent-color2);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;
    border-radius: 2rem;

    .title{
        color: var(--accent-color1);
    }
    .description{
        color: var(--accent-color3);
        letter-spacing: 0.05em;
        line-height: 1.5rem;
    }
`

