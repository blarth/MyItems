import styled,{css} from "styled-components";

export const Frame = styled.div`
background-color: #1D1720;
min-height: 100vh;
color:#fff;
padding:20px;
font-size: 20px;
padding-top:50px ;
padding-bottom:40px ;
`
export const Gallery = styled.div`
width: 100%;
`
export const Card = styled.div`
margin: 20px 0px;
 ${props => (props.name=="true") && css ` border:5px solid #A12F55; `}
display: flex;
flex-direction: column;
background-color:#000 ;
width: 100%;
border-radius: 7px;
color:#1D1720;
h1{
    color:#fff;
    font-weight: 900;
    font-size: 22px;
}
h2{
    color:#fff;
    font-size: 16px;
}
span{
    color:#fff;
}



`

export const Description = styled.div`
padding: 10px;
display: flex;
align-items: center;
justify-content:space-between;
aside{
    width: 70%;
}
span{
    font-size: 28px;
    font-weight: 600;
}
`
export const Image=styled.img`
border-radius: 7px;
background-size: cover;
object-fit: cover;
`

export const Bottombar = styled.div`
font-size: 20px;
padding: 10px;
background-color: #000;
position: fixed; 
bottom:0px;
width: 100%;
height: 50px;
color:#fff;
display: flex;
justify-content:space-between;
align-items: center;
div{
    display: flex;
}
span{
    font-size: 28px;
    font-weight: 600;
}
`