import styled from "styled-components";

export const Frame = styled.div`
background-color: #1D1720;
min-height: 100vh;
color:#fff;
padding:20px;
font-size: 20px;
padding-top:50px ;
padding-bottom:60px ;
`
export const Gallery = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;

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