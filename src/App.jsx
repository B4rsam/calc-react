import { useState } from 'react'
import {NumButton, FuncButton, CtrlButton} from './component/Button.jsx'
import NumBox from './component/NumBox.jsx'
import FuncBox from './component/FuncBox.jsx'
import ResultBox from './component/ResultBox.jsx'

function App() {

  return (
    <div className='container'>
      <ResultBox className="resbox"/>
      <div className='btnHolder'>
        <NumBox />
        <FuncBox />
      </div>
    </div>
  )
}

export default App
