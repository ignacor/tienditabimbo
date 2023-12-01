import Navbarxd from './componentes/Global/NavBar'
import Footer from './componentes/Global/Footer'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Productos from './Pages/Productos'
import Home from './Pages/Home'
import Contacto from './Pages/Contacto'

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

        <Router>
        <Navbarxd/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Productos' element={<Productos/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
        </Routes>
        <Footer/>
        </Router>
      </div>
       
    </>
  )
}

export default App
