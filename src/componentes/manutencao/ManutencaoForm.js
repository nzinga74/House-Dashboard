import styles from './ManutencaoForm.module.css'
import Input from '../form/Input'
import SubmitButton  from '../form/SubmitButton'
import { Formik, Form, Field } from "formik";
import styleform from "../form/Input.module.css";
import * as Yup  from "yup"
import Selecionar from '../form/Selecionar';

import api from "../../services/config";

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


function Manutencao({btnText}){
    const ManutencaoSchema = Yup.object().shape({
      /*
        descricao: Yup.string().min(10,"Descrição muito curta").required("Requirido"),
         data_inicio: Yup.date().required("Requirido"),
         data_conclusao: Yup.date().required("Requirido"),
          custo: Yup.number().min(9, "Deve ter 9 digitos").required("Requirido"),
         funcionario: Yup.string().required("Requirido"),
         imovel: Yup.string().required("Requirido")
         */
    })  

    const navigate = useNavigate()

    const [description, setDescription] = useState()
    const [openingDate, setOpeningDate] = useState()
    const [closingDate, setClosingDate] = useState()
    const [cost, setCost] = useState()
    const [employeeId, setEmployeeId] = useState()
    const [propertyId, setPropertyId] = useState()

    const createPost = async(values) =>{
      //values.preventDefault();
       const post ={description, openingDate, closingDate, cost, employeeId, propertyId, userId: 1};
      
       await api.post("/maintenances", {
        body: post,
       });

     };

    return(
        <div className={styles.formcontainer}>
             <Formik
       validationSchema={ManutencaoSchema}
        onSubmit={(values) => createPost(values)}
        initialValues={{
          descricao: "",
          data_inicio: 0,
          data_conclusao: 0,
          custo: 0,
          funcionario: "",
          imovel:"",
        }}
      >
         {({ values,errors, touched }) => (
          <Form className={styles.form}>
            <div className={styleform.form_control}>
              <label>Descrição: </label>
              <Field as="textarea" name="descricao" cols="30" rows="6"
               onChange={values=>setDescription(values.target.value)} value={description}
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

                onChange={values=>setOpeningDate(values.target.value)} value={openingDate}
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
                onChange={values=>setClosingDate(values.target.value)} value={closingDate}
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

                onChange={values=>setCost(values.target.value)} value={cost}
              />
              {errors.custo && touched.custo ? (<div className={styleform.error}> {errors.custo}</div>):null}
            </div>

            <div className={styleform.form_control}>
              <label>Funcionario: </label>
              <Field as ="select" name ="funcionario"  onChange={values=>setEmployeeId(values.target.value)} value={employeeId}>
              <option value="">Escolha o funcionario</option>
              <option value="A">A</option>
            
            </Field>
            
              {errors.funcionario && touched.funcionario ? (<div className={styleform.error}> {errors.funcionario}</div>):null}
            </div>

            <div className={styleform.form_control}>
              <label>Imovel: </label>
              <Field as ="select" name ="imovel" onChange={values=>setPropertyId(values.target.value)} value={propertyId}>
              <option value="">Escolha o Imovel</option>
              <option value="B">B</option>
              
            </Field>
              {errors.imovel && touched.imovel ? (<div className={styleform.error}> {errors.imovel}</div>):null}
            </div>
              <SubmitButton text={btnText}/>
             </Form>
              )}
              </Formik>
            
        </div>
    );

}

export default Manutencao
