import {InputBoxnputBox} from './components'
import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState()


  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  return (
    <>
       <h1>Currency converter App</h1>
      
    </>
  )
}

export default App
