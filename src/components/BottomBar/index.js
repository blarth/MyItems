import { Bottombar } from "./style"

export default function BottomBar({value}){
return(
    value===0?
        <Bottombar>
            <h2>Você ainda selecionou nenhum item</h2>
        </Bottombar>
        :
        <Bottombar>
            <div>
                <ion-icon name="cart"></ion-icon>
                <p>Valor do Carrinho</p> 
            </div> 
            <span>R$ {value.toFixed(2)}</span> 
        </Bottombar>

)
}