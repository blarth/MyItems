import { PaginationStyled,Button} from "./style"
const MAX_ITENS=7;
const MAX_LEFT=(MAX_ITENS-1)/2
export default function Pagination({limit,total,offset,setOffset}){
    const current = offset?offset/limit +1:1;
    const pages = Math.ceil(total/limit);
    const first = Math.max(current - MAX_LEFT,1);
    return(
        <PaginationStyled>
            {Array.from({length:Math.min(MAX_ITENS,pages)}).map((_,i)=>i+first).map((page)=>
            <Button key={page} active={page==current} onClick={()=>setOffset((page-1)*limit)}>{page}</Button>
            )}
        </PaginationStyled>
    )
}