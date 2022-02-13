import TopBar from "../../components/TopBar";
import Pagination from "../../components/Pagination";
import React, { useState, useEffect } from 'react';
import {Frame,Gallery,Bottombar} from "./style"
import Card from "../../components/Card"
import axios from "axios"
import useAuth from "../../hooks/useAuth.js";


export default function HomePage(){
    const {auth,login} = useAuth();
    const [offset,setOffset]=useState(parseInt(0));
    const MAX_ITENS_IN_PAGE=parseInt(10);
    if(auth!==null){const {token,userId}=auth;}
    const [itemsA,setItems]=useState([]);
    const [cart,setCart] = useState(0);
    let itemAux=[]

    useEffect(() => {
        const promisse=axios.get("https://myitems-back.herokuapp.com/items");
        promisse.then((response)=> 
        {response.data.map((item)=>itemAux.push({...item,isSelected:false}));
        setItems(itemAux)

        })
        
        promisse.catch((e)=>console.log(e))
        
    }, []);
    function handleClick(e){
        console.log(auth)
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
    <TopBar auth={auth}></TopBar>
    <Frame>
        <input placeholder="Search"></input>
        
        <Gallery>
            {itemsA.length>0?itemsA.map((item,i)=>
                (i<(offset+MAX_ITENS_IN_PAGE)&&i>offset)&&
                    <Card 
                    key={i} 
                    id={item._id} 
                    name={item.name} 
                    handleClick={handleClick} 
                    value={item.price} 
                    image={item.image} 
                    isSelected={item.isSelected}
                />        
        
            

            //) 
            ) :<h1>Carregando</h1>}
        </Gallery>
        {itemsA.length>0&&
        <Pagination limit={MAX_ITENS_IN_PAGE} total={itemsA.length} offset={offset} setOffset={setOffset}></Pagination>}
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