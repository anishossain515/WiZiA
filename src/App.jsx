import './App.css'
import Hero from './Components/Hero';
import NavbarArea from './Components/Navbar';
import NewEra from './Components/NewEra';
import Partners from './Components/Partners';
import Rest from './Components/Rest';
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
        <Rest/>
        <NewEra/>
      </div>
    </main>
  )
}

export default App
