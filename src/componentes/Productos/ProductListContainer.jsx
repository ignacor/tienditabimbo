import React, {useState, useEffect, useContext} from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ProductList from "./ProductList";
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const ProductListContainer = () =>{
const [items, setItems] = useState([])


useEffect( () => {
    const db = getFirestore();

    const tienditaBimbo = collection( db, "Productos")

   getDocs(tienditaBimbo )
        .then(snapshot => {
          const alldata =  snapshot.docs.map(document => ({id: document.id, ...document.data()}))
           setItems(alldata)
        })

}, [])



    return(
        <Container>
        <h1>Bimbo</h1>
        <Row>
            {
                items.length > 0 &&
                <ProductList items={items} />
            }
        </Row>
    </Container>
    )
}
export default ProductListContainer