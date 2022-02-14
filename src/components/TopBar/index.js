import { Container } from "./style"
import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
export default function TopBar({auth}){
    const {login} =useAuth()
    const navigate= useNavigate();
    function logout(){
        let confirm =window.confirm("Você deseja mesmo sair?")
        if(confirm){
            login([])
            alert("Até logo ;<");
            localStorage.clear();
            navigate("/sign-in");
        }
        else{return}

    }

    return(
        <Container>
        <h1>MyItems</h1>
        <div>
            {auth==null?
            <>
            <span onClick={()=>{navigate("/")}}>Home</span>
            <span onClick={()=>{navigate("/sign-in")}}>Login</span>
            <span onClick={()=>{navigate("/sign-up")}}>Register</span>
            <span onClick={()=>{navigate("/cart")}}>Cart</span>
            
            </>
            :
            <>
            <span onClick={()=>{navigate("/")}}>Home</span>
            <span onClick={()=>{navigate("/cart")}}>Cart</span>
            <span onClick={()=>logout()}>Logout</span>
            </>
            }

        </div>
        </Container>
    )
}