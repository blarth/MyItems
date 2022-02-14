import styled,{css} from "styled-components";

export const PaginationStyled=styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;


button+button{
    margin-left: 5px;
}
`

export const Button=styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 2px 5px;
font-size: 16px;
${props => (props.active) && css ` 
:focus{
    outline:none;
}
color:#fff;
background: none; 
font-weight: 900;

`}
    border-radius: 2px;
    width: auto;
    height: 25px;
    border:none;
`