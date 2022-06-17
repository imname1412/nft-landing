import styled from "styled-components";


export const CardContainer = styled.div`
    background-color: var(--card-color);
    width: max-content;
    border-radius: 1rem;


    /* img{
        height: 10rem;
        width: 12rem;
    } */
`
export const CardImage = styled.div`

    /* img{
        height: 10rem;
        width: 12rem;
    } */

`
export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;

    

    .heading{
        /* border: 1px solid #fff; */
        display: flex;
        justify-content: space-between;

        .series{
            color: var(--orange);
            text-transform: uppercase;
            font-size: 0.7rem;
        }
        .top{
            color: var(--accent-color3);
            text-transform: uppercase;
            font-size: 0.7rem;
        }
    }

    .details{
        /* border: 1px solid #fff; */
        display: flex;
        justify-content: space-between;
        color: var(--accent-color1);
        .price{
            display: flex;
            gap: 1rem;


            /* img{
                width: max-content;
                height: max-content;
            } */
        }

        
    }

    .sub-detail{
        /* border: 1px solid #fff; */
        display: flex;
        justify-content: space-between;

        span{
            color: var(--accent-color3);
            font-size: 0.9rem;
        }
    }
`


