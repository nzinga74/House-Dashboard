import styles from "./FuncionarioForm.module.css";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import { Formik, Form, Field } from "formik";
import styleform from "../form/Input.module.css";
import * as Yup  from "yup"

function FuncionarioForm({ btnText }) {
    const FuncionarioSchema = Yup.object().shape({
        name: Yup.string().min(4,"Nome muito curto").required("Requirido"),
         surname: Yup.string().min(4,"Nome muito curto").required("Requirido"),
         number: Yup.number().min(9, "Deve ter 9 digitos").required("Requirido"),
         email: Yup.string().email("Deve ser email").required("Requirido")
    })
    
  return (
    <div className={styles.formcontainer}>
      <Formik
       validationSchema={FuncionarioSchema}
        onSubmit={(values) => console.log(values)}
        initialValues={{
          name: "",
          surname: "",
          email: "",
          number: 0,
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
              />
              {errors.name && touched.name ? (<div> {errors.name}</div>):null}
            </div>
            <Field
              type="text"
              text="Sobrenome"
              name="surname"
              placeholder="Insira o seu sobrenome"
              
            />
             {errors.surname && touched.surname ? (<div> {errors.surname}</div>):null}
            <Field
              type="number"
              text="Telefone"
              name="number"
              placeholder="Insira o seu telefone"
            />
             {errors.number && touched.number ? (<div> {errors.number}</div>):null}
            <Field
              type="text"
              text="Email"
              name="email"
              placeholder="Insira o seu email"
            />
             {errors.email && touched.email ? (<div> {errors.email}</div>):null}

            <SubmitButton type="submit" text={btnText} />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FuncionarioForm;
