import Header from './componentes/Global/Header';
import Footer from './componentes/Global/Footer';
import ProductListContainer from './componentes/Productos/ProductListContainer';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCAEQ-2RKHAJGyQCG00Z9WIJZ75f_v-COw",
  authDomain: "tienditabimbo-71b04.firebaseapp.com",
  projectId: "tienditabimbo-71b04",
  storageBucket: "tienditabimbo-71b04.appspot.com",
  messagingSenderId: "82837482924",
  appId: "1:82837482924:web:323d97bf6b1d49b935de09"
};

const app = initializeApp(firebaseConfig);
function App() {

  return (
    <>
      <div>
        <Header/>
        <ProductListContainer/>
        <Footer/>
      </div>
       
    </>
  )
}

export default App
