import { createAsyncThunk } from "@reduxjs/toolkit";
import Users from "../../Api/api";
import { userProfile } from "../../Modules/userProfile";

export const fetchUsers = createAsyncThunk(
  "userListSlice/fetchAll",
  async (page: number[], thuckAPI) => {
    try {
      const response = await Users.getUsers(page[0], page[1]);
      let userList:userProfile[] = response.data.results.map((elem) => {
        return {
          id: elem.dob.date,
          gender:elem.gender,
          name: `${elem.name.first} ${elem.name.last}`,
          email: elem.email,
          phone: elem.phone,
          city: elem.location.city,
          street: `${elem.location.street.name} ${elem.location.street.number}`,
          date: [
            new Date(elem.dob.date).toLocaleDateString(),
            new Date(elem.dob.date).toUTCString().split(" ").slice(1,4).join(" ")],
          age: Number(elem.dob.age),
          picture:elem.picture.medium
        };
      });
      console.log(userList);
      return userList;
    } catch (e) {
      return thuckAPI.rejectWithValue("Ошибка загрузки");
    }
  }
);
