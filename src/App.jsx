import { useState } from 'react'
import {NumButton, FuncButton, CtrlButton} from './component/Button.jsx'
import NumBox from './component/NumBox.jsx'
import FuncBox from './component/FuncBox.jsx'
import ResultBox from './component/ResultBox.jsx'
import './styles.css'

function App() {

  return (
    <div className='container'>
      <ResultBox />
      <div className='btnHolder'>
        <NumBox />
        <FuncBox />
      </div>
    </div>
  )
}

export default App
