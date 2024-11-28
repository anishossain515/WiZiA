import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NewEra from "./Components/NewEra";
import Partners from "./Components/Partners";
import Rest from "./Components/Rest";
import Train from "./Components/Train/Train";
import Client from "./Components/User/Client";
import Work from "./Components/Work/Work";
import WithNavbar from "./Components/WithNavbar";
import Error from "./Components/Error";
import UpComing from "./Components/UpComing";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <WithNavbar>
              <Hero />
              <Partners />
              <Work />
              <Train />
              <Client />
              <Rest />
              <NewEra />
              <Footer />
            </WithNavbar>
          }
        />

        <Route path="/UpComing" element={<WithNavbar><UpComing/></WithNavbar>}/>

         <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
