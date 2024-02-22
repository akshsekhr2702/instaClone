import { Route, Routes } from 'react-router-dom'
import Homepage from './PAGES/Homepage/Homepage'
import Authpage from './PAGES/Authpage/Authpage'
import Pagelayout from './Layouts/PageLayout/Pagelayout'


function App() {
  

  return (
    <>
      <Pagelayout>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/auth' element={<Authpage/>}/>
      </Routes>
      </Pagelayout>
      
    </>
  )
}

export default App
