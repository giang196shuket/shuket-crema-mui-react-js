import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { getListAccountSwitch, switchAccount } from "../../../modules/Redux-store/auth/thunk_auth";
import { useNavigate } from "react-router-dom";

export default function MartSelect() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { user, token, isAuthenticated } = useSelector((state) => state.auth);
  const [accountMarts, setAccountMarts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await dispatch(getListAccountSwitch());
      setAccountMarts(response.payload);
    }
    if (isAuthenticated) {
      fetchData();
    }
    return () => {};
  }, [isAuthenticated]);

  const handleSwitchAccount = async (code) =>{
     await dispatch(switchAccount(code)).then(()=>{
        // navigate(0)
     })
  }

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300, py: 3 }}
      options={accountMarts && accountMarts}
      autoHighlight
      onChange={(e, value) => handleSwitchAccount(value.user_acc)}
      getOptionLabel={(option) => option.user_name}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {option.user_name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a mart"
          inputProps={{
            ...params.inputProps,
            autoComplete: "", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
