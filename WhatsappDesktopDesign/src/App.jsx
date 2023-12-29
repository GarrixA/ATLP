import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./Components/Layout/Layout"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App