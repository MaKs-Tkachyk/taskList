export interface user {
    gender:string,
    name:{
        title: string,
        first: string,
        last: string
    }
    location:{
        street:{
            number:number
            name:string
        }
        city:string
        state:string
        country:string
    }
    email:string
    dob:{
        date:string,
        age:string
    }
    phone:string
    id:{
        value:string
    }
    picture: {
        medium:string
    }
}