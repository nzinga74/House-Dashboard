import FuncionarioForm from '../funcionario/FuncionarioForm';
import styles from './Funcionario.module.css'


function Funcionarios(){

    return (
        <div className = {styles.funcionario_container}>
            <h1>Cadastrar Funcionarios</h1>
            <FuncionarioForm btnText = "Cadastrar Funcionario" />
        </div>
    );


    

}

export default Funcionarios;