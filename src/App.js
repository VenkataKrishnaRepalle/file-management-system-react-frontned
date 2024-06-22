import logo from './logo.svg';
import './App.css';
import Header from "./pages/header/Header";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signup/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            </Routes>
        </>
    );
}

export default App;
