
import { FC } from 'react';
import { Formik, Form,  } from 'formik';
import "../UserProfile.scss"
import { userProfile } from '../../../../Modules/userProfile';
import { useAppDispatch } from '../../../../hooks/redux';
import { userListSlice } from '../../../../Redux/reducers/userListSlice';
import InputForm from './InputForm';


export type initialValuesType= {
    name: string,
    email:string,
    phone: string,
    city: string,
    street: string,
    born: string,
 
}


const UserProfileForm:FC<userProfile> = ({name,email,street,city,date,phone,...props}) =>{
   

  const dispatch = useAppDispatch()
  const {updateUser} = userListSlice.actions


  const update = (object:initialValuesType)=>{
    let newValue = {
      name: object.name || name,
      email:object.email || email,
      street: object.street || street,
      city: object.city || city,
      date: [object.born || date[0],date[1]],
      phone: object.phone || phone
    }

   dispatch(updateUser({...newValue,...props}))
  
  }

 let user ={
 name: name,
  email: email,
  phone: phone,
  city:city,
  street: street,
  born: date[0]
 }

 return(

    <Formik 
      initialValues={{...user}}
      validate={(values:initialValuesType) => {    
        const errors:any = {};
       
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email || email)) {
            errors.email = "Неверно введено значение"
        }
      
        if(!/^[0-9-()" "]{6,13}/i.test(values.phone || phone))errors.phone = "Неверно введено значение"

        let bornDate = (values.born || date[0]).split(".")
        if(!/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/.test(values.born || date[0])) {errors.born = "Неверно введено значение"} 
        if(Number(bornDate[0])>31 || Number(bornDate[1])>12) errors.born = "Неверно введено значение"

        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        update(values)
        for(let elem in values){
            //@ts-ignore
            values[elem] =""
          }
           setSubmitting(false);
      }}
    >
      {({ isSubmitting,errors,resetForm}) => (
        <Form action='#' className='user-form' autoComplete="off">
            <InputForm key={1} name='name' type='text'  placeholder={name} 
             error={errors} isSubmitting={isSubmitting} resetForm={resetForm} />
            <InputForm key={2} name="email" type='text'  placeholder={email} 
            error={errors} isSubmitting={isSubmitting} resetForm={resetForm}/>
            <InputForm key={3} name='phone' type='text'  placeholder={phone}
            error={errors} isSubmitting={isSubmitting} resetForm={resetForm}/>
            <InputForm key={4} name='city' type='text'  placeholder={city} 
            error={errors} isSubmitting={isSubmitting} resetForm={resetForm}/>
            <InputForm key={5} name='street' type='text'  placeholder={street}
            error={errors} isSubmitting={isSubmitting} resetForm={resetForm}/>
            <InputForm key={6} name='born' type='text'  placeholder={date[0]} 
            error={errors} isSubmitting={isSubmitting} resetForm={resetForm}/>
        </Form>
      )}
    </Formik>
);
      }

export default UserProfileForm;



