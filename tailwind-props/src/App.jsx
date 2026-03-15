import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <h1 className="bg-blue-400 text-red-900 p-4 rounded-xl mb-4">
    Hello world!
    </h1>
    <Card name="sheep" btnText="Know more" desc="Sheep are highly social, intelligent animals capable of recognizing and remembering up to 50 human and sheep faces for two years, and even preferring a smile to a frown."/>
    <Card name="also sheep" desc="They possess rectangular pupils, giving them almost 360 degrees of vision and allowing them to see behind themselves without moving their heads. "/>
    </>
  )
}

export default App
