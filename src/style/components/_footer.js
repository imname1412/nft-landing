import styled from "styled-components";


export const FooterContainer = styled.div`
    /* border: 1px solid #fff; */
    margin: 6rem 0;
    display: flex;
    flex-direction: column;
    gap: 5rem;
`
export const Upper = styled.div`
    display: flex;
    justify-content: space-between;
    color: var(--accent-color3);

    .brand-container{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;


        ul{
            list-style: none;
            display: flex;
            gap: 1rem;
        }
    }
    .links{
        display: flex;
        gap: 8rem;

        .link{
            display: flex;
            flex-direction: column;
            gap: 2rem;


            h4{
                color: var(--accent-color1);
            }
            ul{
                list-style-type: none;
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
        }
    }

`
export const Lower = styled.div`
    display: flex;
    justify-content: space-between;
    span{
        color: var(--accent-color3);
    }
`


