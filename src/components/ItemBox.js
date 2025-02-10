
import "../App.css"
const ItemBox = ({title , imageSrc}) =>{
return(
    <div className='display-item-box'>
    <h1 className="center">
    {title}
    </h1>
   <img src={imageSrc}  />
    </div>
)
}
export default ItemBox;