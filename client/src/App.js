import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Feed from "./components/Feed"
import Video from "./components/Video"

import SideBar from "./components/Sidebar"

function App() {
    return (
        <div className="App">
            <SideBar />
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" exact element={<Feed />} /> */}
                    <Route path="/feed/:category" exact element={<Feed />} />
                    <Route path="/video/:id" exact element={<Video />} />
                    <Route />
                    <Route />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
