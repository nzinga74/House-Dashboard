import ManutencaoForm from '../manutencao/ManutencaoForm'
import styles from './Manutencao.module.css'


function Manutencao(){
    return (
        <div className = {styles.manutencao_container}>
        <h1>Cadastrar Manutenção</h1>
        <ManutencaoForm btnText = "Cadastrar Manutenção"/>
    </div>
    )

}

export default Manutencao