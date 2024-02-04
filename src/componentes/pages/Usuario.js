import UsuarioForm from '../usuario/UsuarioForm';
import styles from './Usuario.module.css';


function Usuario(){

    return (
        <div className = {styles.usuario_container}>
            <h1>Cadastrar Usuário</h1>
            <UsuarioForm btnText = "Cadastrar Usuário" />
        </div>
    );


    

}

export default Usuario;