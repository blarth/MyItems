import { Container } from "./style"
export default function TopBar(){
    return(
        <Container>
        <h1>MyItems</h1>
        <div>
            <span><ion-icon name="cart"></ion-icon></span>
            <span><ion-icon name="log-out"></ion-icon></span>
        </div>
        </Container>
    )
}