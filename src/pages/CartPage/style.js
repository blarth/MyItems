import styled from "styled-components";

export const Framed = styled.div`
min-height: 100vh;
background-color: #1D1720;
color:#fff;
padding:20px;
font-size: 20px;
padding-top:50px ;
padding-bottom:60px ;
`
export const BottomFrame = styled.div`
display: flex;
width: 100%;
justify-content: end;
button{
    background-color: black;
    color:#fff;
    font-size: 16px;
    font-weight: 900;
    border-radius: 2px;
    padding: 10px;
    border: none;
    width: auto;
    height: 60px;

}
`

export const CartStyledCard =styled.div`
ion-icon{
    color:red;
    cursor: pointer;
}
.right{
    padding:5px 0px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
}
    border-radius: 5px;
    padding-right: 10px;
    width: 100%;
    background-color: black;
    color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 10px;;
    justify-content: space-between;
    p{
        justify-self: left;
    }
   
    img{
        margin-right:8px;
        height: 100px;
        border:5px solid #ff00ac;
        border-radius: 5px;
        height: 100px;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 32%, rgba(9,255,0,1) 70%, rgba(0,0,0,1) 100%);
    }
`