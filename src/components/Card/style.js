import styled,{css} from "styled-components"

export const StyledCard = styled.div`
margin: 20px 0px;
 ${props => (props.name=="true") && css ` border:5px solid #A12F55; `}
display: flex;
flex-direction: column;
background-color:#000 ;
max-width: 240px;
width: auto;
height: auto;
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
max-width: 240px;
max-height:240px;
width: auto;
height: auto;
`