import React from "react";

import  {ReactDOM, createRoot} from "react-dom/client";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import App from "./App";
import Play from "./pages/Play";

createRoot(document.querySelector('#root')).render(<BrowserRouter>


    <Routes>
        <Route path='/' element=<App/> />
        <Route path='/play' element=<Play/> />
    </Routes>
</BrowserRouter>);