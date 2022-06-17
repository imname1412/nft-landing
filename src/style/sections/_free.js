import styled from "styled-components";


export const FreeContainer = styled.div`
    /* border: 1px solid white; */
    margin: 5rem 0;
    position: relative;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 25rem;
    border-radius: 1rem;
    position: relative;
    background-color: var(--orange);
    
    overflow: hidden;

    z-index: 1;
`
export const BackGround = styled.div`

    z-index: -1;

    .ellipse{
        position: absolute;
        height: 100%;
        width: 28rem;
        border-radius: 100%;
        filter: blur(100px);
    }
    .pink{
        top: -10%;
        left: -15%;
        background-color: var(--pink);
    }
    .green{
        top: -10%;
        right: -15%;
        background-color: var(--green);
    }
`
export const Content = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 3rem;
    padding-left: 5rem;
    font-size: 1.3rem;

    .title{
        font-size: 2rem;
    }
`

// ? relative with FreeContainer not Container bg
export const Cards = styled.div`
    display: flex;
    position: absolute;
    top: -2rem;
    right: 40%;

    .card1{
        position: absolute;
        top: 0;
        z-index: 3;
        transform: rotate(-10deg);
        font-size: 0.6rem;

        .card-img{
            img{
                width: 12rem;
                height: 10rem;
            }
        }
    }

    .card2{
        position: absolute;
        top: 0;
        left: 10rem;
        z-index: 2;
        transform: rotate(5deg);
        font-size: 0.7rem;

        .card-img{
            img{
                height: 10rem;
                width: 12rem;
            }
        }
    }
`
