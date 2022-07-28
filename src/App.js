import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Photographer from "./pages/photographer/Photographer";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/photographers" element={<List/>}/>
        <Route path="/photographers/:id" element={<Photographer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
