
import React, { FC, useEffect, useMemo, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./UserProfile.scss"
import { message } from 'antd';
import { Value } from 'sass';

type initialValuesType= {
    name: string,
    email:string,
    phone: string,
    city: string,
    street: string,
    born: string,
}


const UserProfileForm = () =>{



 return(

    <Formik
      initialValues={{ name: '', email: '', phone: '',city: '',street: '',born: ''}}
      validate={(values:initialValuesType) => {

        const errors:any = {};

        if (!values.email) { errors.email = "Не введено значение" } 
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Не введено значение"
        }
        if (!values.name) {  errors.name = "Не введено значение"} 
        if (!values.phone) { errors.phone = "Не введено значение"} 
        else if(!/^\+38[0-9]{9,11}/i.test(values.phone)){ errors.phone = "Неверно введено значение"} 
        if (!values.city) { errors.city = "Не введено значение"} 
        if (!values.street) {errors.street = "Не введено значение"} 
        if (!values.born) {errors.born = "Не введено значение"} 
        else if (!/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}/i.test(values.born)) {errors.born = "Неверно введено значение"} 


        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {

            alert(JSON.stringify(values, null, 2));

           setSubmitting(false);
      }}
    >
      {({ isSubmitting,errors,values }) => (
        <Form action='#' className='user-form' autoComplete="off">
            <InputForm key={1} name='name' type='text'  placeholder='email'
             error={errors} isSubmitting={isSubmitting} value={values.name}/>
            <InputForm key={2} name="email" type='text'  placeholder='email' 
            error={errors} isSubmitting={isSubmitting} value={values.email}/>
            <InputForm key={3} name='phone' type='text'  placeholder='email' 
            error={errors} isSubmitting={isSubmitting} value={values.phone}/>
            <InputForm key={4} name='city' type='text'  placeholder='email' 
            error={errors} isSubmitting={isSubmitting} value={values.city}/>
            <InputForm key={5} name='street' type='text'  placeholder='email' 
            error={errors} isSubmitting={isSubmitting} value={values.street}/>
            <InputForm key={6} name='born' type='text'  placeholder='email' 
            error={errors} isSubmitting={isSubmitting} value={values.born}/>
        </Form>
      )}
    </Formik>
);
      }

export default UserProfileForm;



type inputForm = {
    type:string
    name:string 
    placeholder:string
    isSubmitting:boolean
    error:any
    value:string
}

const InputForm:FC<inputForm> = ({isSubmitting,name,placeholder,type,error,value})=>{

    const [title,setTitle] = useState<string>("Edit")

    function messageAler(){
       if(!error[name]){
        setTitle("Edit")
       } 
       error[name] && message.error(`Значений ${name} введено не коректно!`)
    }

  
  


    return(
          <div className={error[name]?"error user-field":"user-field"}>
            <Field onClick={()=>setTitle("Update")} type={type} name={name} placeholder={placeholder}/>
            <button onClick={messageAler} type="submit"
             disabled={isSubmitting}> {title} </button>
         </div> 
    )
}