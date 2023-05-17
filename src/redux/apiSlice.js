/* eslint-disable no-unused-vars*/
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    statements: [],
    loading: 'idle',
}

async function getAccounts()
{
    try{
        const response = await fetch('../assets/accounts.json')
        if(response.ok){
            const accountDatas = await response.json()
            return accountDatas
        }
    }
    catch(error){
        console.log(error)
    }
}

export const setAccountsStatements = createAsyncThunk('api/setAccountsStatements', async () => {
    return await getAccounts()
})

export const apiSlice = createSlice({
    name : 'api',
    initialState,
    reducers: {
        // getSt : (state) => state,
    },
    extraReducers: (builder) => {
        builder
          .addCase(setAccountsStatements.pending, (state) => {
            return {...state, loading : 'pending'}
          })
          .addCase(setAccountsStatements.fulfilled, (state, action) => {
            return {...state, loading : 'idle', statements : action.payload}
          })
          .addCase(setAccountsStatements.rejected, (state) => {
            return {...state, loading : 'idle'}
          })
      },
})

//export const {getSt} = apiSlice.actions

export default apiSlice.reducer