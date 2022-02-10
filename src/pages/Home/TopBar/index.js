import { Container } from "./style"
export default function TopBar(){
    return(
        <Container>
        <h1>MyItems</h1>
        <div>
            <span>Cart</span>
            <span>Logout</span>
        </div>
        </Container>
    )
}