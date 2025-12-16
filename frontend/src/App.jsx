import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'
import SinglePage from './pages/SinglePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/single-page' element={<SinglePage/>}/>
        <Route path='/edit-page' element={<EditPage/>}/>
        <Route path='/create-page' element={<CreatePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
