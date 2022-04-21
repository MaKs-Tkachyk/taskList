import { message } from "antd"
import { Field } from "formik"
import { FC, useContext, useEffect, useState } from "react"
import { ModalContext } from "../../ContentProvider/ContentProvider"

type inputForm = {
    type:string
    name:string 
    placeholder:string
    isSubmitting:boolean
    error:any
    resetForm:any
}

const InputForm:FC<inputForm> = ({isSubmitting,name,placeholder,type,error,resetForm})=>{
    const [title,setTitle] = useState<string>("Edit")
    const modalParamets = useContext(ModalContext);

    useEffect(()=>{
      setTitle("Edit")
      resetForm()
    },[modalParamets?.userId])

    function messageAler(){
       if(!error[name]){
        setTitle("Edit")
       } 
       error[name] && message.error(`Значений ${name} введено не коректно!`)
    }
  


    return(
          <div className={error[name]?"error user-field":"user-field"}>
            <Field  onClick={()=>setTitle("Update")}  type={type} name={name} placeholder={placeholder}/>
            <button onClick={messageAler} type="submit"
             disabled={isSubmitting}> {title} </button>
         </div> 
    )
}


export default InputForm