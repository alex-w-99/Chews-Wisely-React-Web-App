import {createSlice} from "@reduxjs/toolkit";
import {findBusinessesThunk} from "../services/business-thunks";

const initialState = {
    businesses: [],
    loading: false,
}

console.log("INITIAL STATE FOR JSON PURPOSES:" + JSON.stringify(initialState));

const businessesSlice = createSlice({
 name: 'queryResults',
 initialState,
 extraReducers: {
    [findBusinessesThunk.fulfilled]:
      (state, action) => {
        state.loading = false;
        var payload = JSON.parse(JSON.parse(JSON.stringify(action)).payload);
//        const businesses = payload.businesses;
//        console.log("BUSINESSES ARE: " + JSON.stringify(businesses));
        console.log("PAYLOAD BUSINESSES:" + JSON.stringify(payload.businesses));
//        console.log("STATE IS " + JSON.stringify(state));
        state.businesses = payload.businesses;
      },
    [findBusinessesThunk.pending]:
       (state) => {
         state.loading = true;
         state.businesses = [];
       },
    [findBusinessesThunk.rejected]:
       (state, action) => {
          state.loading = false;
          state.error = action.error;
       }
 }
})
export default businessesSlice.reducer;