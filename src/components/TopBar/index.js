import { Container } from "./style"
import { useNavigate } from "react-router-dom"
export default function TopBar(){
    const navigate = useNavigate()
    function handleNavigationCart() {
        navigate("/shop-cart")
    }

    return(
        <Container>
        <h1>MyItems</h1>
        <div>
            <span onClick={handleNavigationCart}><ion-icon name="cart"></ion-icon></span>
            <span><ion-icon name="log-out"></ion-icon></span>
        </div>
        </Container>
    )
}