import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <p className='text-red-600'>Hello Everyone!</p>
      <MyComponent name = 'Surya'/>
    </div>
  )
}

export default App
