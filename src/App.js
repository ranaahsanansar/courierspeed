// import { Button } from "@mui/material";
// import { styled } from "@mui/system";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
