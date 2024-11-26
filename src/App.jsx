import './App.css'
import Hero from './Components/Hero';
import NavbarArea from './Components/Navbar';
import Partners from './Components/Partners';
function App() {

  return (
    <main>
      <NavbarArea/>
      <div>
        <Hero/>
        <Partners/>
      </div>
    </main>
  )
}

export default App
