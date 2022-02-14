import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
z-index: 10;
padding:10px;
font-size: 25px;
color:#fff;
background-color:#060507;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
width: 100%;
top: 0px;
span{
    cursor: pointer;
    font-size: 16px;
    font-weight: 800;
    margin-left:10px;
}
h1{
    font-family: 'Orbitron', sans-serif;
    font-weight: 900;
    letter-spacing: 2px;
}

`