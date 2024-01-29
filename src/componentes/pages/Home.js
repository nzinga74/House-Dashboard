import styles from './Home.module.css'

import house from '../../img/meeting-1453895_640.png'


function Home(){
  return(
        <section className = {styles.home_container}>
          <h1>Casa<span>Eficiente</span></h1>
          <a href="/">Cadastrar Imovel</a>
          <img src = {house} alt = ""/>
        </section>

        
       
    
  );

}

export default Home