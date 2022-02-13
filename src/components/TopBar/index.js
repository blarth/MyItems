import { Container } from "./style"
import {useNavigate} from "react-router-dom"
export default function TopBar({auth}){
    const navigate= useNavigate();


    return(
        <Container>
        <h1>MyItems</h1>
        <div>
            {auth==null?
            <>
             <span><ion-icon onClick={()=>{navigate("/sign-in")}} name="log-in"></ion-icon></span>
             <span onClick={()=>{navigate("/sign-up")}} >Registrar-se</span>
            </>
            
            :
            <>
            <span><ion-icon name="cart"></ion-icon></span>
            <span><ion-icon name="log-out"></ion-icon></span>
            </>
            }

        </div>
        </Container>
    )
}