import styled from "styled-components";


export const Rare = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

`


export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .title{
        color: var(--accent-color1);
        font-size: 2.4rem;
    }
    .description{
        color: var(--accent-color3);
        a{
            color: var(--accent-color3);
            font-weight: bold;
        }
    }
`


export const RareCards = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 5rem;

`