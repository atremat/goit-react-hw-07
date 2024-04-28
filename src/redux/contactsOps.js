import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://662e4c31a7dda1fa378c947d.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/contacts");
      // payload for fulfilled
      console.log(response.data);
      return response.data;
    } catch (error) {
      // payload for reject
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
