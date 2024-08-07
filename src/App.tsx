import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";


function App() {
  
  return (
    <BrowserRouter>
      {/* <Navbar/> */}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
