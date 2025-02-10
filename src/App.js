import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ItemBox from './components/ItemBox';
import Pagination from './components/Pagination';


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
<h1 className='center'>
  pagination
</h1>
    <div className='parent'>
    {product_data.slice(page_size*currentPage, page_size*currentPage +  page_size)?.map((some, index)=>{
      return(
       <ItemBox title={some?.title} imageSrc={some?.thumbnail}/>
      )
    })}
    </div>
    <div className='pagination'>
    <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} end={end}/>   
    </div>
      </header>
    </div>
  );
}

export default App;
