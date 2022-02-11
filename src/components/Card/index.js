import { StyledCard,Image,Description } from "./style"
export default function Card({name,image,id,isSelected,value,handleClick}){
return(
    <StyledCard key={id} name={isSelected.toString()} id={id} onClick={(e)=>handleClick(e)}>
        <Image src={image}></Image>
        <Description name={isSelected.toString()} id={id} >
            <h1>{name}</h1>
            <span>R$ {value}</span>
        </Description> 
    </StyledCard>
)
}