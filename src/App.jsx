import './App.css'
import Hero from './Components/Hero';
import NavbarArea from './Components/Navbar';
import Partners from './Components/Partners';
import Train from './Components/Train/Train';
import Client from './Components/User/Client';
import Work from './Components/Work/Work'
function App() {

  return (
    <main>
      <NavbarArea/>
      <div>
        <Hero/>
        <Partners/>
        <Work/>
        <Train/>
        <Client/>
      </div>
    </main>
  )
}

export default App
