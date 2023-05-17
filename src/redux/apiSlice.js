/* eslint-disable no-unused-vars*/
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    statements: [],
    loading: 'idle',
    error: false
}

async function getAccounts()
{
    try{
        const response = await fetch('/accounts.json')
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
    },
    extraReducers: (builder) => {
        builder
          .addCase(setAccountsStatements.pending, (state) => {
            return {...state, loading : 'pending', error: false}
          })
          .addCase(setAccountsStatements.fulfilled, (state, action) => {
            return {...state, loading : 'idle', statements : action.payload}
          })
          .addCase(setAccountsStatements.rejected, (state) => {
            return {...state, loading : 'idle', error: true}
          })
      },
})

export default apiSlice.reducer