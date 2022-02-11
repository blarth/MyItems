import TopBar from "../../components/TopBar";
import React, { useState, useEffect } from 'react';
import {Frame,Gallery,Bottombar} from "./style"
import Card from "../../components/Card"
import axios from "axios"



export default function HomePage(){
    const [items,setItems]=useState([]);
    const [cart,setCart] = useState(0);
    let itemAux=[]

    useEffect(() => {
        const promisse=axios.get("https://myitems-back.herokuapp.com/items");
        promisse.then((response)=> {response.data.map((item)=>itemAux.push({...item,isSelected:false}));setItems(itemAux)})
        
        promisse.catch((e)=>console.log(e))
        
    }, []);
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
            {items.length>0?items.map((item,i)=>( 
                
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
        <span>R$ {cart}</span> 
    </Bottombar>}
    
    </>

)}