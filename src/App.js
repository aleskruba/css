import {Routes,Route} from "react-router-dom";
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Positions from "./pages/Positions";
import Pseudo from "./pages/Pseudo";
import Flex from "./pages/Flex";
import Grid from "./pages/Grid";
import SubGrid from "./pages/SubGrid";
import Animation from "./pages/Animation";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
 
        <Route path="/" element={<Layout />} >
            <Route index element={<Home />}/> 
            <Route path="/positions" element={<Positions />}/> 
            <Route path="/pseudo" element={<Pseudo />}/> 
            <Route path="/flex" element={<Flex />}/> 
            <Route path="/grid" element={<Grid />}/> 
            <Route path="/subgrid" element={<SubGrid />}/> 
            <Route path="/animation" element={<Animation />}/> 
         
        </Route>
      </Routes>

    </div>
  );
}

export default App;
