import './App.css'
import Hero from './Components/Hero';
import NavbarArea from './Components/Navbar';
import Partners from './Components/Partners';
import Work from './Components/Work';
function App() {

  return (
    <main>
      <NavbarArea/>
      <div>
        <Hero/>
        <Partners/>
        <Work/>
      </div>
    </main>
  )
}

export default App
