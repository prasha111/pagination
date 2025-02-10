const Pagination = ({totalPages, setCurrentPage, currentPage, end})=>{
return(
    <>
    <button disabled={currentPage === 0} onClick={()=>{setCurrentPage((prev)=>prev-1)}}>&lt;</button>
    {(new Array(totalPages)).fill("").map((_some, index)=>{
      return (
        <button  onClick={()=>{setCurrentPage(index)}}>{index}</button>
      )
    })}
    <button disabled={currentPage === end} onClick={()=>{setCurrentPage((prev)=>prev+1)}}>&gt;</button></>

)
}
export default Pagination