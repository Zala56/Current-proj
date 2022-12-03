import logo from './logo.svg';
import Temp from "./Compo/Temp";
import {Reac,Repo1,Repo2,Repo3,Repo4} from './Reac';
import { Repo, RepoOne, RepoTwo, RepoThree} from './Repo';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <Temp />
    <Routes>
      <Route exact path='/Re' element={<Reac/>} />
      <Route exact path='/Re/Re1' element={<Repo1/>} />
      <Route exact path='/Re/Re2' element={<Repo2/>} />
      <Route exact path='/Re/Re3' element={<Repo3/>} />
      <Route exact path='/Re/Re4' element={<Repo4/>} />

      <Route exact path='/R2' element={<Repo/>} />
      <Route exact path='/R2/R3' element={<RepoOne />} />
      <Route exact path='/R2/R4' element={<RepoTwo />} />
      <Route exact path='/R2/R5' element={<RepoThree />} />
    
    </Routes>
  </BrowserRouter>
   
  );
}

export default App;
