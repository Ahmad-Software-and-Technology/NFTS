import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    address:''
}
export const addressSlicer = createSlice({
    name:'walletaddress',
    initialState,
    reducers:{
        walletaddressAction(state,action){
        const address = action.payload
            state.address = address
        console.log(address)
        }
    }
})
export const {walletaddressAction} = addressSlicer.actions;
export default addressSlicer.reducer;