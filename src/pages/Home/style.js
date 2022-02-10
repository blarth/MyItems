import styled,{css} from "styled-components";

export const Frame = styled.div`
background-color: #1D1720;
min-height: 100vh;
color:#fff;
padding: 0px 10px;
font-size: 20px;
`
export const Gallery = styled.div`
width: 100%;
`
export const Card = styled.div`
 ${props => (props.selected) && css ` border:5px solid green; `}
display: flex;
flex-direction: column;
background-color:#000 ;
width: 100%;
border-radius: 7px;
color:#1D1720;

h1{
    color:#fff;
    font-weight: 900;
}
h2{
    color:#fff;
}
span{
    color:#fff;
}



`

export const Image=styled.img`
border-radius: 7px;
background-size: cover;
object-fit: cover;
`

export const Bottombar = styled.div`
background-color: #000;
position: fixed; 
bottom:0px;
width: 100%;
color:#fff;
`