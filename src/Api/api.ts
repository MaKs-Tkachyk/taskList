
import axios, { AxiosResponse } from "axios";
import { user } from "../Modules/user";


export const API_URL = "https://randomuser.me/api";


const $api = axios.create({
  baseURL: API_URL,
})

type results= {
  results:user[]
} 
export default class Users {
  static async getUsers(pageNumber:number, pageSize:number): Promise<AxiosResponse<results>> {
    return  $api.get(`/?page=${pageNumber}&results=${pageSize}&inc=gender,name,location,email,id,phone,picture,dob&exc=info`);
  }
}










