/* eslint-disable no-unused-vars*/
import { configureStore } from "@reduxjs/toolkit"
import apiReducer from './apiSlice.js'

const store = configureStore({
    reducer: {
      api : apiReducer,
    },
    devTools : true,
})

export default store