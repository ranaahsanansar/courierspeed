// import { Button } from "@mui/material";
// import { styled } from "@mui/system";

import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Document from "./pages/Document";
import Drivers from "./pages/Drivers";
import Home from "./pages/Home";


// const Container = styled(Button)`
// color: red;
// background-color: ${props => props.theme.palette.primary.main} ;
// `

function App() {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<MainLayout />} >
            <Route index element={<Home />} />
            <Route path="driver" element={<Drivers />} />
            <Route path="document" element={<Document />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

// #1976d2b0 Primary color Light 

export default App;
