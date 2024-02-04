
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import Home from './componentes/pages/Home';
import Usuario from './componentes/pages/Usuario'
import Imoveis from './componentes/pages/Imoveis'
import Funcionarios from './componentes/pages/Funcionarios'
import Manutencao from './componentes/pages/Manutencao'
import Contractos from './componentes/pages/Contractos'
import Historico from './componentes/pages/Historico'
import Container from './componentes/layout/Container'
import Navbar from './componentes/layout/Navbar'
import Footer from './componentes/layout/Footer'


function App(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Container customClass="min_height" >
            <Routes>
         
                <Route exact path = "/" element={<Home/>}/>
                <Route exact path = "/usuario" element={<Usuario/>}/>
                <Route exact path = "/imoveis" element={<Imoveis/>}/>
                <Route exact path = "/funcionarios" element={<Funcionarios/>}/>
                <Route exact path = "/manutencao" element={<Manutencao/>}/>
                <Route exact path = "/contractos" element={<Contractos/>}/>
                <Route exact path = "/historico" element={<Historico/>}/>
            
            </Routes>
            </Container>

            <Footer/>
        </BrowserRouter>
    );



}

export default App