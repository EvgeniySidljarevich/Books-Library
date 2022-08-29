import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StartPage } from "./pages/startPage";
import {AllBooksPage} from "./pages/allBooksPage";
import {OrderPage} from "./pages/orderPage";
import {BookPage} from "./pages/bookPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/fox-library" element={<StartPage/>} />
                <Route path="/fox-library/your-order" element={<OrderPage/>} />
                <Route path="/fox-library/all-books" element={<AllBooksPage/>}/>
                <Route path="/fox-library/:bookId" element={<BookPage/>}/>
                <Route path="/*" element={<StartPage/>} />
            </Routes>
        </Router>
    );
}

export default App;