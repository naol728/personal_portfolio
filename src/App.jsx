import React from 'react'
import Home from './pages/Home'
import { TracingBeam } from './components/ui/tracing-beam'
import About from './pages/About'
export default function App() {
  return (
    <div  >
      <TracingBeam>
      <Home />
      <About />
      </TracingBeam>
    </div>
  )
}
