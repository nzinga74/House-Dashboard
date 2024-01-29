import styles from './FuncionarioForm.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton';


function FuncionarioForm({btnText}){
    return (
        <form className={styles.form}>
            <Input
             type = "text" 
             text="Nome" 
             name = "name"
              placeholder="Insira o seu nome"
              />

            <Input
             type = "text" 
             text="Sobrenome" 
             name = "sobrenome"
              placeholder="Insira o seu sobrenome"
              />
             <Input
             type = "number" 
             text="Telefone" 
             name = "telefone"
              placeholder="Insira o seu telefone"
              />
             <Input
             type = "text" 
             text="Email" 
             name = "name"
              placeholder="Insira o seu email"
              />

             <SubmitButton text={btnText}/>

        </form>
    );

}

export default FuncionarioForm