import { TopBar,Card,BottomBar,Pagination } from '../../components';
import React, { useState, useEffect } from 'react';
import {Frame,Gallery} from "./style"
import axios from "axios"
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
const MAX_ITENS_IN_PAGE=parseInt(10);
let itemAux=[]
let valueOnCart=0;

export default function HomePage(){
    const {auth,login} = useAuth();
    const {cartItems,setMyCart}= useCart();
    if(auth!==null){const {token,userId}=auth;}
    const [search,setSearch] = useState('');
    const [offset,setOffset]=useState(parseInt(0));
    const [itemsA,setItems]=useState([]);
    const [valuecart,setValueCart] = useState(0);
    const [total,setTotal]=useState(0)

    function addAndCompare(input){
        let verification=0
        if(cartItems){
            verification = cartItems.filter((item)=>item._id===input._id)
        }
      
        if(verification.length>0){
            itemAux.push({...input,isSelected:true})
        }
        else{
            itemAux.push({...input,isSelected:false})
        }
    }

    useEffect(() => {
        console.log(offset)
        const promisse=axios.get(`http://localhost:4000/items`);
        promisse.then((response)=> 
        {response.data.map((item)=>addAndCompare(item));
        setTotal(response.data.total);
        setItems(itemAux)})
        promisse.catch((e)=>console.log(e))
        cartItems&&cartItems.map((item)=>valueOnCart+=parseFloat(item.price))
        setValueCart(valueOnCart)
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
        setItems(newArr) 
        setMyCart(newArr.filter((item)=>item.isSelected==true))
        cartItems&&cartItems.map((item)=>valueOnCart+=parseFloat(item.price))
        setValueCart(sum)
    }
    
    // function filter(){
    //     let searchLowerCase = search.toLocaleLowerCase()
    //     let arrayFilter = itemAux.filter((item)=>item.name.toLocaleLowerCase().includes(searchLowerCase))
    //     console.log(cartItems)

    //     setItems(arrayFilter)
    // }

return(
    <>
    <TopBar auth={auth}></TopBar>
    <Frame>
    {/* <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search"></input> */}
    {/* <button onClick={()=>filter()}>Search</button> */}
        
        <Gallery>
            {itemsA.length>0?itemsA.map((item,i)=>
                (i<=(offset+MAX_ITENS_IN_PAGE)&&i>offset)&&
                    <Card 
                    key={i} 
                    id={item._id} 
                    name={item.name} 
                    handleClick={handleClick} 
                    value={item.price} 
                    image={item.image} 
                    isSelected={item.isSelected}
                />        
            ) :<h1>Carregando</h1>}
        </Gallery>
        {itemsA.length>0&&
        <Pagination limit={MAX_ITENS_IN_PAGE} total={itemsA.length} offset={offset} setOffset={setOffset}></Pagination>}
    </Frame>
    <BottomBar value={valuecart}></BottomBar>
    </>

)}