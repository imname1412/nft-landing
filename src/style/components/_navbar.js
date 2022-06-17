import styled from "styled-components";


export const NavContainer = styled.nav`
    /* border: 1px solid white; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BrandContainer = styled.div`
    .brand{
        img{
            height: 100%;
        }
    }


    .toggle-container{
        display: none;
    }
`



export const LinkContainer = styled.div`
    .links{
        list-style-type: none;
        display: flex;
        gap: 4rem;

        li{
            a{
                color: var(--accent-color1);
                text-decoration: none;
            }
            
        }
        li:last-child{
            a{
                color: var(--pink);
            }
        }
        
    }
`


