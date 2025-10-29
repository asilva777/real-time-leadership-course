import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Module0 from './pages/Module0'
import Module1 from './pages/Module1'
import Module2 from './pages/Module2'
import Module3 from './pages/Module3'
import Module4 from './pages/Module4'
import Module5 from './pages/Module5'
import Module6 from './pages/Module6'
import Module7 from './pages/Module7'
import Module8 from './pages/Module8'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module-0" element={<Module0 />} />
        <Route path="/module-1" element={<Module1 />} />
        <Route path="/module-2" element={<Module2 />} />
        <Route path="/module-3" element={<Module3 />} />
        <Route path="/module-4" element={<Module4 />} />
        <Route path="/module-5" element={<Module5 />} />
        <Route path="/module-6" element={<Module6 />} />
        <Route path="/module-7" element={<Module7 />} />
        <Route path="/module-8" element={<Module8 />} />
      </Routes>
    </div>
  )
}
