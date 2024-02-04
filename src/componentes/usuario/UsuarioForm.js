import styles from './UsuarioForm.module.css'
import Input from '../form/Input'
import SubmitButton  from '../form/SubmitButton'
import { Formik, Form, Field } from "formik";
import styleform from "../form/Input.module.css";
import * as Yup  from "yup"
import Selecionar from '../form/Selecionar';
import styleForm from '../form/Selecionar.module.css'


function Usuario({btnText}){
    const UsuarioSchema = Yup.object().shape({
          email: Yup.string().email("Deve ser um email"),
          senha: Yup.string().required("Requirido"),
          nivel_acesso: Yup.string().required("Requirido"),
          estado: Yup.string().required("Requirido"),
          provincia: Yup.string().required("Requirido"),
          municipio: Yup.string().min(5, "muito curto").required("Requirido"),
          distrito: Yup.string().min(5, "muito curto").required("Requirido"),
          bairro: Yup.string().min(5, "muito curto").required("Requirido"),
          Numero_residencia: Yup.number().required("Requirido"),
    })

    return(
        <div className={styles.formcontainer}>
             <Formik
       validationSchema={UsuarioSchema}
        onSubmit={(values) => console.log(values)}
        initialValues={{
          email: "",
          senha: "",
          nivel_acesso: "",
          estado: "",
          provincia: "",
          municipio: "",
          distrito: "",
          bairro: "",
          Numero_residencia: 0,

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
                placeholder="Insira o email"
              />
              {errors.email && touched.email ? (<div className={styleform.error}> {errors.email}</div>):null}
            </div>

            <div className={styleform.form_control}>
              <label>Senha: </label>
              <Field
                type="password"
                text="Senha"
                name="senha"
                placeholder="Insira a senha"
              />
              {errors.senha && touched.senha ? (<div className={styleform.error}> {errors.senha}</div>):null}
            </div>

            <div className={styleform.form_control}>
              <label>Nivel de acesso: </label>
              <Field as ="select" name ="nivel_acesso">
              <option value="">Escolha o nivel</option>
              <option value="admin">Admin</option>
            </Field>
              {errors.nivel_acesso && touched.nivel_acesso ? (<div className={styleform.error}> {errors.nivel_acesso}</div>):null}
            </div>

            <div className={styleform.form_control}>
              <label>Estado: </label>
              <Field as ="select" name ="estado">
              <option value="">Escolha o estado</option>
              <option value="ativo">Ativo</option>
            </Field>
              {errors.estado && touched.estado ? (<div className={styleform.error}> {errors.estado}</div>):null}
            </div>

            <div className={styleform.form_control}>
              <label>Provincia: </label>
              <Field as ="select" name ="provincia">
              <option value="">Escolha a provincia</option>
              <option value="ativo">Luanda</option>
              <option value="ativo">Malanje</option>
            </Field>
              {errors.provincia && touched.provincia ? (<div className={styleform.error}> {errors.provincia}</div>):null}
            </div>

            <div className={styleform.form_control}>
              <label>Municipio: </label>
              <Field
                type="text"
                text="Municipio"
                name="municipio"
                placeholder="Insira o municipio"
              />
              {errors.municipio && touched.municipio ? (<div className={styleform.error}> {errors.municipio}</div>):null}
            </div>

            <div className={styleform.form_control}>
              <label>Distrito: </label>
              <Field
                type="text"
                text="Distrito"
                name="distrito"
                placeholder="Insira o distrito"
              />
              {errors.distrito && touched.distrito ? (<div className={styleform.error}> {errors.distrito}</div>):null}
            </div>

            <div className={styleform.form_control}>
              <label>Bairro: </label>
              <Field
                type="text"
                text="Bairro"
                name="bairro"
                placeholder="Insira o bairro"
              />
              {errors.bairro && touched.bairro ? (<div className={styleform.error}> {errors.bairro}</div>):null}
            </div>

            <div className={styleform.form_control}>
              <label>Número da residência: </label>
              <Field
                type="number"
                text="Numero da residência"
                name="Numero_residencia"
                placeholder="Insira o número da residência"
              />
              {errors.Numero_residencia && touched.Numero_residencia ? (<div className={styleform.error}> {errors.Numero_residencia}</div>):null}
            </div>


        
              <SubmitButton text={btnText}/>
             </Form>
              )}
              </Formik>
            
        </div>
    );

}

export default Usuario
