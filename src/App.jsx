import React from 'react'
import Home from './pages/Home'
import { TracingBeam } from './components/ui/tracing-beam'
import About from './pages/About'
import Skill from './pages/Skill'
export default function App() {
  return (
    <>
      <TracingBeam>
      <Home />
      <About />
      <Skill />
      </TracingBeam>
    </>
  )
}
