import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/icons8-home-64.png'


function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to = "/">
                    <img src = {logo} alt = "house" />
                </Link>
                <ul class={styles.list}>
                    <li className = {styles.item}><Link to = "/">Home</Link></li>
                    <li className = {styles.item}><Link to = "/imoveis">Imoveis</Link></li>
                    <li className = {styles.item}><Link to = "/funcionarios">Funcionarios</Link></li>
                    <li className = {styles.item}><Link to = "/manutencao">Manutenção</Link></li>
                    <li className = {styles.item}><Link to = "/contractos">Contractos</Link></li>
                    <li className = {styles.item}><Link to = "/historico">Historico</Link></li>
              </ul>
            </Container>
        </nav>

        
    )

}

export default Navbar 