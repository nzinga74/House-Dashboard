import styles from './ManutencaoForm.module.css'
import Input from '../form/Input'
import SubmitButton  from '../form/SubmitButton'


function Manutencao({btnText}){

    return(
        <form className={styles.form}>
            <Input
             type = "text" 
             text="Descrição" 
             name = "descrição"
              placeholder="Insira a descrição da manutenção"
              />
            <Input
             type = "date" 
             text="Data de inicio" 
             name = "data_inicio"
              placeholder="Insira a data de inicio da manutenção"
              />
              <Input
             type = "date" 
             text="Data de conclusão" 
             name = "data_conclusão"
              placeholder="Insira a data de conclusão da manutenção"
              />
              <Input
             type = "number" 
             text="Custo" 
             name = "custo"
              placeholder="Insira o custo da manutenção"
              />
              <Input
             type = "name" 
             text="Nome" 
             name = "nome"
              placeholder="Insira o nome do funcionario"
              />

              <SubmitButton text={btnText}/>

              
 
             



        </form>
    )

}

export default Manutencao
