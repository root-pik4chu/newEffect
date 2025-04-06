import { useState } from 'react'

import './App.css'
import CircularGallery from './CircularGallery'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="w-full h-screen flex flex-col items-center justify-end bg-zinc-950">
<div className='w-full' style={{ height: '600px', position: 'relative'  }}>
  <CircularGallery bend={5} textColor="#ffffff" borderRadius={0.02} />
</div>
</div>
    </>
  )
}

export default App
