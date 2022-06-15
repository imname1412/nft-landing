import styled from "styled-components";


export const HomeContainer = styled.div`
    margin-top: 6rem;
    /* border: 1px solid white; */

`

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    font-size: 32px;
    
`

export const Content = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;

    .sub-title{
        color:var(--pink);
        text-transform: uppercase;
        letter-spacing: 0.1rem;
    }
    .title{
        color: var(--accent-color1);
    }
    .description{
        color: var(--accent-color3);
    }
    button{
        cursor: pointer;
        background-color: var(--background);
        color: var(--accent-color1);
        font-weight: bold;
        padding: 1rem 3rem;
        border-radius: 2rem;
        box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
        border:3px solid transparent;
        background-image: linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0)
            ),
            linear-gradient(101deg, var(--pink), var(--orange));
        background-origin: border-box;
        background-clip: content-box , border-box;
        box-shadow: 1px 1000px 1px var(--background) inset;
        transition: 0.2s ease-in-out;
    
        &:hover{
            box-shadow: none;
        }
    }
    
`
export const ImgContainer = styled.div`
    text-align: center;
    position: relative;
    z-index: 10;
    .ellipse-container{
        .ellipse{
            z-index: -1;
            position: absolute;
            width: 15rem;
            height: 15rem;
            filter: blur(100px);
        }
        .pink{
            background-color: var(--pink);
            top: 40%;
            right: 40%;
        }
        .orange{
            bottom: 40%;
            left: 40%;
            background-color: var(--orange);
        }
    }

`
