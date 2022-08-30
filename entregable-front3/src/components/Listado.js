import Item from './Item';
import data from "./data.json";


const list = data;
export default function Listado({aumentarUno}){
  return (
    <div className='container'>
      {
      list.map(item => {
        return(  
          <Item 
          key={item.id}
          aumentarUno ={aumentarUno}
        
         nombre={item.producto.nombre}
          descripcion={item.producto.descripcion}
          itemStock={item.stock}>
          </Item>
   
  )
})
}

</div>

)
}