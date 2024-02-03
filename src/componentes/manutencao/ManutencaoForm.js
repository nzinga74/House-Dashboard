import styles from './ManutencaoForm.module.css'
import Input from '../form/Input'
import SubmitButton  from '../form/SubmitButton'
import { Formik, Form, Field } from "formik";
import styleform from "../form/Input.module.css";
import * as Yup  from "yup"


function Manutencao({btnText}){
    const ManutencaoSchema = Yup.object().shape({
        descricao: Yup.string().min(10,"Descrição muito curta").required("Requirido"),
         data_inicio: Yup.date().required("Requirido"),
         data_conclusao: Yup.date().required("Requirido"),
          custo: Yup.number().min(9, "Deve ter 9 digitos").required("Requirido"),
         funcionario: Yup.string().min(4, "Nome muito curto").required("Requirido")
    })

    return(
        <div className={styles.formcontainer}>
             <Formik
       validationSchema={ManutencaoSchema}
        onSubmit={(values) => console.log(values)}
        initialValues={{
          descricao: "",
          data_inicio: 0,
          data_conclusao: 0,
          custo: 0,
          funcionario: "",
        }}
      >
         {({ values,errors, touched }) => (
          <Form className={styles.form}>
            <div className={styleform.form_control}>
              <label>Descrição: </label>
              <Field
                type="text"
                text="Descrição"
                name="descricao"
                placeholder="Insira a descrição da manutenção"
              />
              {errors.descricao && touched.descricao ? (<div className={styleform.error}> {errors.descricao}</div>):null}
            </div>

            <div className={styleform.form_control}>
              <label>Data de inicio: </label>
              <Field
                type="date"
                text="Data de inicio"
                name="data_inicio"
                placeholder="Insira a data de inicio da manutenção"
              />
              {errors.data_inicio && touched.data_inicio ? (<div className={styleform.error}> {errors.data_inicio}</div>):null}
            </div>

            <div className={styleform.form_control}>
              <label>Data de conclusão: </label>
              <Field
                type="date"
                text="Data de conclusão"
                name="data_conclusão"
                placeholder="Insira a data de conclusão da manutenção"
              />
              {errors.data_conclusao && touched.data_conclusao ? (<div className={styleform.error}> {errors.data_conclusao}</div>):null}
            </div>

            <div className={styleform.form_control}>
              <label>Custo: </label>
              <Field
                type="number"
                text="Custo"
                name="custo"
                placeholder="Insira o custo da manutenção"
              />
              {errors.custo && touched.custo ? (<div className={styleform.error}> {errors.custo}</div>):null}
            </div>

            <div className={styleform.form_control}>
              <label>Funcionário: </label>
              <Field
                type="text"
                text="Funcionario"
                name="funcionario"
                placeholder="Insira o nome do funcionario"
              />
              {errors.funcionario && touched.funcionario ? (<div className={styleform.error}> {errors.funcionario}</div>):null}
            </div>

              <SubmitButton text={btnText}/>
             </Form>
              )}
              </Formik>
            
        </div>
    );

}

export default Manutencao
