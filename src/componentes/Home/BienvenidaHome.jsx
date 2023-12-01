import React from "react";
import Stack from 'react-bootstrap/Stack';
const BienvenidaHome = () =>{
    const cont = {
       margin : '0px',
     backgroundColor : 'rgb(0, 153, 241)',
    }

    const img ={
        width:'100%',
        height :'100%',
    }
    return (
        
    <Stack style={cont} direction="horizontal" gap={3}>
    <div className="p-2"> <h1 >Tiendita Bimbo, todos los productos de Bimbo en un solo lugar!</h1>
   <h4 >Desde panes hasta budines,lo que te imagines de Bimbo,Fargo,Lactal y Valente lo podes encontrar Aqui! </h4></div>
    <div bg="primary" data-bs-theme="dark" className="p-2 ms-auto "><img style={img} src="https://static.mercadonegro.pe/wp-content/uploads/2020/03/22194444/bimbo17.jpg" alt="" /></div>
   
  </Stack>
    )
 }

 export default BienvenidaHome