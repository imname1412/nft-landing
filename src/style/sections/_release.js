import styled from "styled-components";


export const ReleaseContainer = styled.div`
    /* border: 1px solid #fff; */
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    gap: 5rem;

    .release{
        border-radius: 0.5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        overflow: hidden;
    }
    
    .orange{
        background-color: var(--orange);
    }

    .green{
        background-color: var(--green);
    }

`
export const Content = styled.div`
    padding: 5rem 8rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .title{
        font-size: 2rem;
    }
    .description{
        font-size: 1.3rem;

        a{
            color: #000;
            font-weight: bold;
        }
    }
    .link{
        color: #000;
        font-weight: bold;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 1rem;
        transition: .2s ease-out;
        /* border: 1px solid; */
        width: max-content;
        &:hover{
            padding-left: 1rem;
            color: var(--accent-color1);
        }
        svg{
            font-size: 1.2rem;
        }
        
    }
    
`

export const ImageSection = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    /* overflow: hidden; */
    z-index: 1;
    img{
        height: 24rem;
    }

    .ellipse{
        position: absolute;
        height: 20rem;
        width: 20rem;
        filter: blur(100px);
        bottom: -40%;
        right: 0;
        z-index: -1;
    }
    .pink{
        
        background-color: var(--pink);
    }
    `

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 1;

    .card-img{
        img{
            width: 16rem;
            height: 12rem;
        }
    }

    .ellipse{
        position: absolute;
        height: 20rem;
        width: 20rem;
        filter: blur(100px);
        bottom: -40%;
        left: 0;
        z-index: -1;
    }
    .orange{
        background-color: var(--orange);
    }
`
