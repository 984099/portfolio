import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main";
import Book from "./book/book";
import BookDetails from "./book/bookdetail";
import Searchbook from "./pages/search_book";
import Body from "./body/body";
function App(){
    return(
        <BrowserRouter>
        <Routes> 
            <Route path="/" element ={<Main/>}>
                <Route index element={<Body/>}></Route>
                <Route path="book" element={<Book/>}/>
                <Route path="book/:id" element={<BookDetails/>}/>
                <Route path="search/book?id=20&author=ram" element={<Searchbook/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
} 
export default App
