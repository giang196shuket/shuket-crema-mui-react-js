import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { initialBackend } from "../../../@crema/constants/AppConst";

const LOGIN_API = "/auth/login";

export const Login = createAsyncThunk(
  "auth/Login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(initialBackend + LOGIN_API, {
        id: data.email,
        pw: data.password,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);


