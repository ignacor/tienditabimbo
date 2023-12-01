import Stack from 'react-bootstrap/Stack';
import React from 'react'

const  Footer = () => {

  const fondo = {
    backgroundColor:'skyblue',
  }
  const imgStyle = {
    width :'5%',
    height :'5%',
  }
  const copy = {
      textAlign :'center',
      color : 'black'
  }
  const color = {
    color : 'black',
    textDecoretion :'none',
}
const redes = {
  fontSize :'30px',
  color : 'black',
    textDecoretion :'none',

}

  return (
    <footer style={fondo}>
    <Stack direction="horizontal" gap={3}>
      <img style={imgStyle}  src="https://www.bimbo.com.ar/sites/all/themes/custom/bimbo/img/submenu_moreinfo_oso02-f_0.png" alt="" />
      <div ><h1 style={color}>Tiendita Bimbo</h1></div>
      <div className="p-2 ms-auto "><h4>Contacto: +54 3574 40 1330</h4></div>
    
    </Stack>
    <Stack gap={3}>
      <div style={copy} >Todos los derechos reservados ©2023</div>
    </Stack>
    </footer>
  );
}

export default Footer;