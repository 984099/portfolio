import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer"
function Main(){
    return(
        <>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}
export default Main