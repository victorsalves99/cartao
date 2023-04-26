import './App.css'
import Cartao from './components/Cartao/Cartao'
import { useState } from 'react'
import Formulario from './components/formulario/Formulario'

function App() {
  const [name,setName] = useState("VICTOR ALVES")
  const [numero,setNumero] = useState("0000000000000000")
  const [mes,setMes] = useState("11")
  const [ano,setAno] = useState("30")
  const [cod,setCod] = useState("387")



  return (
    <div className="App">
      <Cartao nome={name} numero={numero} mes={mes} ano={ano} cod={cod}/>
      <Formulario setName={setName} setNumero={setNumero} setMes={setMes} setAno={setAno} setCod={setCod}/>
    </div>
  )
}

export default App
