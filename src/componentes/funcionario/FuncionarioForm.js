import styles from "./FuncionarioForm.module.css";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import { Formik, Form, Field } from "formik";
import styleform from "../form/Input.module.css";
import * as Yup  from "yup"

import api from "../../services/config";

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


function FuncionarioForm({ btnText }) {
    const FuncionarioSchema = Yup.object().shape({
      /*
        name: Yup.string().min(4,"Nome muito curto").required("Requirido"),
         lastname: Yup.string().min(4,"Nome muito curto").required("Requirido"),
         phone: Yup.number().min(9, "Deve ter 9 digitos").required("Requirido"),
         email: Yup.string().email("Deve ser email").required("Requirido")
         */
    })

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [phone, setPhone] = useState(0)
    const [email, setEmail] = useState("")
    
     const createPost = async(values) =>{
      //values.preventDefault();
       const post ={name, lastname, phone, email, userId: 1};
      
       await api.post("/employees", {
        body: post,
       });

     };

  return (
    <div className={styles.formcontainer}>
      <Formik
       validationSchema={FuncionarioSchema}
        onSubmit={(values) => createPost(values)}
        initialValues={{
          name: "",
          lastname: "",
          phone: 0,
          email: "",
        }}
      >
        {({ values,errors, touched }) => (
          <Form className={styles.form}>
            <div className={styleform.form_control}>
              <label>Nome: </label>
              <Field
                type="text"
                text="Nome"
                name="name"
                placeholder="Insira o seu nome"

                onChange={values=>setName(values.target.value)} value={name}
              />
              {errors.name && touched.name ? (<div className={styleform.error}> {errors.name}</div>):null}
            </div>
            <div className={styleform.form_control}>
              <label>Sobrenome:</label>
            <Field
              type="text"
              text="Sobrenome"
              name ="lastname"
           
              placeholder="Insira o seu sobrenome"
             onChange={values=>setLastname(values.target.value)} value={lastname}
            />
            {errors.lastname && touched.lastname ? (<div className={styleform.error}> {errors.lastname}</div>):null}
            </div>
             
             <div className={styleform.form_control}> 
             <label>Telefone:</label>
            <Field
              type="number"
              text="Telefone"
              name="phone"
            
              placeholder="Insira o seu telefone"

              onChange={values=>setPhone(values.target.value)} value={phone}
            
            />
             {errors.phone && touched.phone ? (<div className={styleform.error}> {errors.phone}</div>):null}
             </div>
             <div className={styleform.form_control}>
              <label>Email:</label>
            <Field
              type="text"
              text="Email"
              name="email"
             
              placeholder="Insira o seu email"

              onChange={values => setEmail(values.target.value)} value={email}
             
            />
             {errors.email && touched.email ? (<div className={styleform.error}> {errors.email}</div>):null}
             </div>
            <SubmitButton type="submit" text={btnText} />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FuncionarioForm;
