// src/App.jsx
import Menu from './components/menu/menu'
import logo from './assets/images/logo.jpeg'
import './App.css'

function App() {
  return (
    <>
      <header className="app-header">
        <img src={logo} alt="Logo" className="app-logo" />
      </header>
      <div>
        <Menu />
      </div>
    </>
  )
}

export default App