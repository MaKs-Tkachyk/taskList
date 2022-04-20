import { useState } from "react"


export const useInput = (startValue:string | undefined)=>{
    const [value,setValue] = useState<string | undefined>(startValue)
   return {value,setValue}
}