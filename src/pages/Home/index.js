import TopBar from "../../components/TopBar";
import React, { useState, useEffect } from 'react';
import {Frame,Gallery,Bottombar} from "./style"
import Card from "../../components/Card"
import axios from "axios"



export default function HomePage(){
    const [itemsA,setItems]=useState([]);
    const [cart,setCart] = useState(0);
    let itemAux=[]

    useEffect(() => {
        const promisse=axios.get("https://myitems-back.herokuapp.com/items");
        promisse.then((response)=> {response.data.map((item)=>itemAux.push({...item,isSelected:false}));setItems(itemAux)})
        
        promisse.catch((e)=>console.log(e))
        
    }, []);
    function handleClick(e){

        let newArr = itemsA.map(obj => {
            if (obj._id === e.target.parentNode.id ){
              return {...obj, isSelected: !obj.isSelected};
            }
            return obj;
        });
        let sum=0;
        newArr.map((item)=>{if(item.isSelected){sum+=parseFloat(item.price)}})
        setCart(sum)
        setItems(newArr)
        
    }
    
return(
    <>
    <TopBar></TopBar>
    <Frame>
        <h1>Olá, Fulano</h1>
        <Gallery>
            {itemsA.length>0?itemsA.map((item,i)=>( 
                
            <Card 
                key={i} 
                id={item._id} 
                name={item.name} 
                handleClick={handleClick} 
                value={item.price} 
                image={item.image} 
                isSelected={item.isSelected}
            />

            )
            ):<h1>Carregando</h1>}
        </Gallery>

    </Frame>
    {cart===0?
    <Bottombar>
        <h2>Você ainda selecionou nenhum item</h2>
    </Bottombar>
    :
    <Bottombar>
        <div>
            <ion-icon name="cart"></ion-icon>
            <p>Valor do Carrinho</p> 
        </div> 
        <span>R$ {cart.toFixed(2)}</span> 
    </Bottombar>}
    
    </>

)}