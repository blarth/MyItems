import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import {CartStyledCard, Framed,BottomFrame} from "./style"
import TopBar from "../../components/TopBar"
import useAuth from "../../hooks/useAuth";
import BottomBar from "../../components/BottomBar";
import api from "../../services/api";

export default function CartPage(){
    const {cartItems,setMyCart}= useCart();
    const [valueCart,setValueCart] = useState(0)
    const {auth} = useAuth();
    const navigate = useNavigate()

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
    
}
async function sendCart(){
    if(auth){
        
        try {
            
            const promisse = await api.registerTransaction(cartItems, auth)
            alert("Compra realizada com sucesso, você será redirecionado para a home")
            setTimeout(() => {
                navigate("/")
            }, 2500)
            
        } catch (error) {
            alert("Tivemos um erro com a sua compra, confira os dados")
            
        }
        
    }
    else{
        alert("Você precisa estar logado para comprar, faça login ou resgistre-se agora")
    }
}
    
return(
    <>
    <TopBar auth={auth}></TopBar>
    <Framed>
        {cartItems?.map((item,i)=>
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
            <button onClick={()=>setMyCart([])}>Clear Cart</button> 
            <button onClick={()=>sendCart()}>Finalizar Compra</button>
        </BottomFrame>
    </Framed>
    <BottomBar value={valueCart}></BottomBar>
    </>
)
}