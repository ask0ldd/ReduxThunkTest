/* eslint-disable no-unused-vars*/
import './App.css'
import store from './redux/store'
import { setAccountsStatements } from './redux/apiSlice'

function App() {

  store.dispatch(setAccountsStatements()).unwrap().then(res => console.log(res))

  return (
    <>
    </>
  )
}

export default App
