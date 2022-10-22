import {Route, BrowserRouter, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LearnPage from "./pages/LearnPage/LearnPage";
import JsPage from "./pages/JsPage/JsPage";
import PowerPointPage from "./pages/PowerPointPage/PowerPointPage";
import PsPage from "./pages/PsPage/PsPage";
import Blender from "./pages/BlenderPage/BlenderPage";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";


function App() {
  return (
      <BrowserRouter>

          <Nav />


        <Routes>

          <Route path='/' element={<HomePage />}/>
          <Route path='/learn' element={<LearnPage />}/>
          <Route path='/learn/js' element={<JsPage />}/>
          <Route path='/learn/powerpoint' element={<PowerPointPage />}/>
          <Route path='/learn/photoshop' element={<PsPage />}/>
          <Route path='/learn/blender' element={<Blender />}/>

        </Routes>

          <Footer />

      </BrowserRouter>


  );
}

export default App;
