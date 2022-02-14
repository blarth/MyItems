import styled,{css} from "styled-components"

export const StyledCard = styled.div`
background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 22%, rgba(154,0,104,1) 73%, rgba(83,0,71,1) 100%);
margin: 20px 0px;
 ${props => (props.name=="true") && css ` 
 border:5px solid #ff00ac; 
 background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 32%, rgba(9,255,0,1) 70%, rgba(0,0,0,1) 100%);
 `}
display: flex;
flex-direction: column;
max-width: 240px;
width: auto;
height: auto;
min-height: 250px;
border-radius: 7px;
color:#1D1720;
h1{
    color:#fff;
    font-weight: 900;
    font-size: 16px;
    width: 60%;
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
span{
  
    font-size: 16px;
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