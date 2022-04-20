import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type todoListType ={
    id:number
    isChecked:boolean,
    title:string, 
}

interface todoState {
  todoList: todoListType[]
  }
  
  const initialState: todoState = {
    todoList: []
  };


export const todoSlice = createSlice({
    name:"todoSlice",
    initialState,
    reducers:{

    }
})