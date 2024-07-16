import { createAsyncThunk } from "@reduxjs/toolkit";
import apiAuth from "../../../@crema/services/axios/ApiConfig";

const LIST_ACCOUNT_SWITCH = "/auth/get_list_account_switch";
const USER_SWITCH_ACCOUNT = "/auth/user_switch_account/";

export const getListAccountSwitch = createAsyncThunk(
    LIST_ACCOUNT_SWITCH,
    async (data, { rejectWithValue }) => {
      try {
        const response = await apiAuth.get(LIST_ACCOUNT_SWITCH);
        return response.data.data;
      } catch (err) {
        return rejectWithValue(err.message);
      }
    }
  );

  export const switchAccount = createAsyncThunk(
    USER_SWITCH_ACCOUNT,
    async (data, { rejectWithValue }) => {
      try {
        const response = await apiAuth.get(USER_SWITCH_ACCOUNT + data);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.message);
      }
    }
  );