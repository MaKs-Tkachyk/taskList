import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userProfile } from "../../Modules/userProfile";
import { initialValuesType } from "../../UI/Components/UserProfile/UseFormFrofile/UserProfileForm";
import { fetchUsers } from "./ActionCreators";

interface userListState {
  usersList: userProfile[];
  userListFilter:userProfile[]
  userProfile:userProfile,
  isLoading: boolean;
  error: string;
}

const initialState: userListState = {
  usersList: [],
  userListFilter:[],
  userProfile:{
    age:0,
    city:"",
    date:[],
    email:"",
    gender:"",
    id:"",
    name:"",
    phone:"",
    picture:"",
    street:""
  } ,
  isLoading: false,
  error: "",
};

export const userListSlice = createSlice({
  name: "userListSlice",
  initialState,
  reducers: {
    getUserProfile(state,action:PayloadAction<string>){
      let user = state.userListFilter.find(el=>el.id == action.payload)
      if(user){
        state.userProfile = user
      }else{
        console.log("User undefinded")
      }
    },
    updateUser(state,action:PayloadAction<userProfile>){
      let date = action.payload.date[0].split(".")
      let dateFull = new Date(Number(date[2]) , Number(date[1])-1,Number(date[0]) +1).toUTCString().split(" ").slice(1,4).join(" ")
      let newInformationUser = {...action.payload,...{date:[action.payload.date[0],dateFull]}}
      state.userListFilter.forEach((el,index)=>{
        if(el.id === action.payload.id){
          let firstAge = new Date().getFullYear()
          let lastAge = Number(action.payload.date[0].split(".")[2]) 
          if(firstAge == lastAge) newInformationUser= {...newInformationUser,age:newInformationUser.age}
          else if(firstAge > lastAge)  newInformationUser= {...newInformationUser,age: firstAge - lastAge}
          else newInformationUser= {...newInformationUser,age:lastAge - firstAge}
          delete state.userListFilter[index] 
          state.userListFilter[index] = newInformationUser
        }
         state.userProfile = {...action.payload,...{date:[action.payload.date[0],dateFull]}}
    })
    state.usersList.forEach((el,index)=>{
      if(el.id === action.payload.id){
        delete state.usersList[index] 
        state.usersList[index] = newInformationUser
      }
       state.userProfile = {...action.payload,...{date:[action.payload.date[0],dateFull]}}
  })
    },
    deleteUser(state,action:PayloadAction<string>){
      state.userListFilter = state.usersList.filter(el=>el.id !== action.payload)
      state.usersList = state.usersList.filter(el=>el.id !== action.payload)
    },
    filter(state,action:PayloadAction<{age:{start:number,end:number},gender?:string,name?:string}>){
      state.userListFilter = state.usersList.filter(
        el=>el.age >= action.payload.age.start && el.age <= action.payload.age.end)

        if(action.payload.gender)
        state.userListFilter = state.userListFilter.filter(el=>el.gender == action.payload.gender)
        
        if(action.payload.name){
           let name = action.payload.name?.toLocaleLowerCase()
           state.userListFilter = state.userListFilter.filter(el=>el.name.toLowerCase().includes(name))
        } 
    },
    sort(state,action:PayloadAction<string>){
        
        function dateSort(date:string){
          let arrDMY = date.split(".") 
          return new Date(Number(arrDMY[2]),Number(arrDMY[1]),Number(arrDMY[0]))
        }
        
        if(action.payload == "l-name") 
        state.userListFilter = state.userListFilter.sort((a,b)=>a.name.localeCompare(b.name))
        else if (action.payload == "l-date of birth")
        state.userListFilter = state.userListFilter.sort(
          (a,b)=> new Date(dateSort(a.date[0])).setHours(0,0,0,0) - new Date(dateSort(b.date[0])).setHours(0,0,0,0))
        else if (action.payload == "l-city") state.userListFilter.sort((a,b)=>a.city.localeCompare(b.city))
 
        if(action.payload == "m-name") 
        state.userListFilter = state.userListFilter.sort((a,b)=>b.name.localeCompare(a.name))
        else if (action.payload == "m-date of birth")
        state.userListFilter = state.userListFilter.sort(
          (a,b)=> new Date(dateSort(b.date[0])).setHours(0,0,0,0) - new Date(dateSort(a.date[0])).setHours(0,0,0,0))
        else if (action.payload == "m-city") state.userListFilter.sort((a,b)=>b.city.localeCompare(a.city))
      
     
    }

  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state,action:PayloadAction<userProfile[]>) => {
            state.isLoading = false
            state.error = ""
            state.usersList = action.payload
            state.userListFilter = action.payload
    },
    [fetchUsers.pending.type]: (state,action:PayloadAction) => {
         state.isLoading = true
},
    [fetchUsers.rejected.type]: (state,action:PayloadAction<string>) => {
         state.isLoading = false
         state.error = action.payload
   },
  },
});


