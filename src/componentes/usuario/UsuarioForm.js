import styles from './UsuarioForm.module.css'
import Input from '../form/Input'
import SubmitButton  from '../form/SubmitButton'
import { Formik, Form, Field } from "formik";
import styleform from "../form/Input.module.css";
import * as Yup  from "yup"
import Selecionar from '../form/Selecionar';


function Usuario({btnText}){
    const UsuarioSchema = Yup.object().shape({
          email: Yup.string().email("Deve ser um email"),
          senha: Yup.string().required("Requirido"),
        
    })

    return(
        <div className={styles.formcontainer}>
             <Formik
       validationSchema={UsuarioSchema}
        onSubmit={(values) => console.log(values)}
        initialValues={{
          email: "",
          senha: "",
        }}
      >
         {({ values,errors, touched }) => (
          <Form className={styles.form}>
            <div className={styleform.form_control}>
              <label>Email: </label>
              <Field
                type="text"
                text="Email"
                name="email"
                placeholder="Insira o seu email"
              />
              {errors.email && touched.email ? (<div className={styleform.error}> {errors.email}</div>):null}
            </div>

            <div className={styleform.form_control}>
              <label>Senha: </label>
              <Field
                type="password"
                text="Senha"
                name="senha"
                placeholder="Insira a sua senha"
              />
              {errors.senha && touched.senha ? (<div className={styleform.error}> {errors.senha}</div>):null}
            </div>

          <Selecionar name="nivel_acesso" text="Nivel de acesso"/>
          <Selecionar name="estado" text="Estado"/>
              <SubmitButton text={btnText}/>
             </Form>
              )}
              </Formik>
            
        </div>
    );

}

export default Usuario
