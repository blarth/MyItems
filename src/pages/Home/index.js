import TopBar from "../../components/TopBar";
import React, { useState } from 'react';
import {Frame,Gallery,Image,Bottombar,Description} from "./style"
import Card from "../../components/Card"

let items =[
    {
        id:"hsdajhdasjk",
        name:"Espada",
        value:"30",
        game:"Minecraft",
        image:"https://i.pinimg.com/236x/52/b0/97/52b097b9eef0845f6ab2f784dfb25144.jpg",
        isSelected:false
    },
    {
        id:"hsdajhdsdffsdasdfasjk",
        name:"Espada",
        value:"30",
        game:"Minecraft",
        image:"https://i.pinimg.com/236x/52/b0/97/52b097b9eef0845f6ab2f784dfb25144.jpg",
        isSelected:false
    },
    {
        id:"hsdajfdsdfhdasjk",
        name:"Espada",
        value:"30",
        game:"Minecraft",
        image:"https://i.pinimg.com/236x/52/b0/97/52b097b9eef0845f6ab2f784dfb25144.jpg",
        isSelected:false
    },

]

export default function HomePage(){
    const [cart,setCart] = useState(0);

    
    function handleClick(e){

        let newArr = items.map(obj => {
            if (obj.id === e.target.parentNode.id ){
              return {...obj, isSelected: !obj.isSelected};
            }
            return obj;
        });
        items=newArr;
        let sum=0;
        items.map((item)=>{if(item.isSelected){sum+=parseFloat(item.value)}})
        setCart(sum)
    }
    
return(
    <>
    <TopBar></TopBar>
    <Frame>
        <h1>Olá, Fulano</h1>
        <Gallery>
            {items.map((item,i)=>( 
            <Card 
                key={i} 
                id={item.id} 
                name={item.name} 
                handleClick={handleClick} 
                value={item.value} 
                image={item.image} 
                isSelected={item.isSelected}
            />
            ))}
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
        <span>R$ {cart}</span> 
    </Bottombar>}
    
    </>

)}