import { PaginationStyled,Button} from "./style"
const MAX_ITENS=7;
const MAX_LEFT=(MAX_ITENS-1)/2
export default function Pagination({limit,total,offset,setOffset}){
    const current = offset?offset/limit +1:1;
    const pages = Math.ceil(total/limit);
    const first = Math.max(current - MAX_LEFT,1);
    function onPageChange(page){
        if(page>pages){
            return
        }
        else{
            setOffset((page-1)*limit);

        }
    }

    return(
        <PaginationStyled>
            <Button disabled={current===1} onClick={()=>onPageChange(1)}>1</Button>
            <Button disabled={current===1} onClick={()=>onPageChange(current-1)}><ion-icon name="arrow-back-outline"></ion-icon></Button>
            {Array.from({length:Math.min(MAX_ITENS,pages)})
            .map((_,i)=>i+first)
            .map((page)=>(page<pages)&&
            <Button disabled={page>=pages} key={page} active={page==current} onClick={()=>onPageChange(page)}>{page}</Button>
            )}
             <Button disabled={current===pages} onClick={()=>onPageChange(current+1)}><ion-icon name="arrow-forward-outline"></ion-icon></Button>
             <Button disabled={current===pages} onClick={()=>onPageChange(pages)}>{pages}</Button>
        </PaginationStyled>
    )
}