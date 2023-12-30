import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Main from "./Components/Links/Main"
import Links from "./Components/Links/Links"
import Links2 from "./Components/Links/Links2"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="" index element={<Main/>}/>
            <Route path="links" element={<Links/>}/>
            <Route path="links2" element={<Links2/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
