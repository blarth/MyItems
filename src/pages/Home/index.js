import TopBar from "./TopBar";
import {useState} from "react";
import {Frame,Gallery,Card,Image,Bottombar} from "./style"
export default function HomePage(){
    const [state,setState] = useState("");
return(
    <>
    <TopBar></TopBar>
    <Frame>
        <h1>Olá, Fulano</h1>
        <Gallery>
            <Card selected="true" onClick={(e)=>console.log(this)}>
                <Image src="https://i.pinimg.com/236x/52/b0/97/52b097b9eef0845f6ab2f784dfb25144.jpg"></Image>
                <h1>Espada de Diamante</h1>
                <h2>Minecraft</h2>
                <footer>
                    <span>R$30,00</span>
                </footer>
            </Card>
           
        </Gallery>

    </Frame>
    <Bottombar> <ion-icon name="cart"></ion-icon> Valor Total : R$ 49</Bottombar>
    </>

)}