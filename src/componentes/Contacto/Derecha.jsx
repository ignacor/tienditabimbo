import React from "react";
import Stack from 'react-bootstrap/Stack';
const Derecha = () => {
    const fondo = {
        backgroundColor: '#00b8ff',
        width: '100%',
        height: '100%',
    }
    const img = {
        width: '30%',
        height: '30%',
    }
    const info ={
        backgroundColor :'white',
        border:' 2px solid grey',
        borderRadius:' 25px',
    }
    const tit ={
        textAlign:'center',

    }

    return (
        <div style={fondo}>     
             <Stack  direction="horizontal" gap={2}>
                <img style={img} src="https://media.licdn.com/dms/image/C4E12AQFukyhc9QjjBA/article-cover_image-shrink_720_1280/0/1623952516208?e=2147483647&v=beta&t=uhG1e0TzUM_pMxFj77ok9oj8xJeZqFJVfPNgc0yflCw" alt="" />
            <div style={info} bg="primary" data-bs-theme="dark" className="p-2 ms-auto ">
                <h1 style={tit}>Tiendita Bimbo!</h1>
                 <h3>Encontra todos los productos de la Marca Bimbo a un precio unico!</h3>
                 <h5>Ignacio Tel: +54 3574 40 1330</h5>
                 <h5>Fabian Tel: +54 3574 40 3082 (Consulta por precios Mayoristas)</h5>
                 <h5>G-mail: ignaciocoro07@gmail.com</h5>



            </div>
        </Stack>
        </div>
    )
}
export default Derecha