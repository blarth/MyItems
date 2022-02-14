import { useState,useEffect } from "react";
import useCart from "../../hooks/useCart";
import {CartStyledCard, Framed,BottomFrame} from "./style"
import TopBar from "../../components/TopBar"
import useAuth from "../../hooks/useAuth";
import BottomBar from "../../components/BottomBar";

export default function CartPage(){
    const {cartItems,setMyCart}= useCart();
    const [valueCart,setValueCart] = useState(0)
    const {auth} = useAuth();

    useEffect(() => {
        let sum=0;
        cartItems.map((item)=>{sum+=parseFloat(item.price)})
        setValueCart(sum);
        console.log(sum)
    }, []);

function deleteItem(e){
    let newArray = cartItems.filter((item) => item._id !== e.target.parentNode.id);
    let sum=0;
    newArray.map((item)=>{sum+=parseFloat(item.price)})
    setValueCart(sum);
    setMyCart(newArray)
    console.log(newArray)
}
function sendCArt(){
    if(auth){
        alert("Logado")
    }
    else{
        alert("Você precisa estar logado para comprar, faça login ou resgistre-se agora")
    }
}
    
return(
    <>
    <TopBar auth={auth}></TopBar>
    <Framed>
        {cartItems.map((item,i)=>
            <CartStyledCard key={i} id={item._id} >
            <img src={item.image}></img>
            
            <p>{item.name}</p>
            
            <div id={item._id}className="right">
            <ion-icon onClick={(e)=>deleteItem(e)} name="trash-bin-outline"></ion-icon>
            <p>R$ {item.price}</p>
            </div>
            
            </CartStyledCard>
        )}
        <BottomFrame>
            {/* <button onClick={()=>setMyCart([])}>Clear Cart</button> */}
            <button onClick={()=>sendCArt()}>Finalizar Compra</button>
        </BottomFrame>
    </Framed>
    <BottomBar value={valueCart}></BottomBar>
    </>
)
}