import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";

import AppContext from "./utils/Context";


import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <BrowserRouter>
                <AppContext>
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='*' element={<Error/>}/>
                    </Routes>
                    <Footer/>
                </AppContext>
            </BrowserRouter>
        </div>
    );
}

export default App;
