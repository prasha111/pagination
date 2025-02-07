import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


const page_size = 10;


function App() {
  const [ product_data, setProduct_data] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const data = async ()=>{ 
     let data =  await fetch('https://dummyjson.com/products?limit=500');
      let  re = await data.json();
      setProduct_data((prev)=>re.products)

      return re;

      }
      useEffect(()=>{
         data()
        console.log(totalPages)
      
      //setProduct_data(data())
      }, [])
      const page = product_data.length;
      const totalPages = Math.ceil(page/page_size);
      const start = currentPage*page_size;
      const end  = totalPages-1
      const setPage = (page) =>{
        setCurrentPage(page)
      }
      console.log(currentPage*page_size, currentPage*page_size+page_size)
  return (
    <div className="">
      <header className="">
        <img src={logo} className="App-logo" alt="logo" />
<h1>
  pagination
</h1>
    <div className='parent'>
    {product_data.slice(page_size*currentPage, page_size*currentPage +  page_size)?.map((some, index)=>{
      return(
        <div className='display-item-box'>
        <h1>
        {some.title}
        </h1>
       <img src={some?.thumbnail}  />
        </div>
      )
    })}
    </div>
    <div className='pagination'>
       
 
    <button disabled={currentPage === 0} onClick={()=>{setCurrentPage((prev)=>prev-1)}}>&lt;</button>
    {(new Array(totalPages)).fill("").map((some, index)=>{
      return (
        <button  onClick={()=>{setCurrentPage(index)}}>{index}</button>
      )
    })}
    <button disabled={currentPage === end} onClick={()=>{setCurrentPage((prev)=>prev+1)}}>&gt;</button>
    </div>
      </header>
    </div>
  );
}

export default App;
