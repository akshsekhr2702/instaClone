import { Route, Routes } from 'react-router-dom'
import Homepage from './PAGES/Homepage/Homepage'
import Authpage from './PAGES/Authpage/Authpage'
import Pagelayout from './Layouts/PageLayout/Pagelayout'
import ProfilePage from './PAGES/ProfilePage/ProfilePage'


function App() {
  

  return (
    <>
      <Pagelayout>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/auth' element={<Authpage/>}/>
        <Route path='/:username' element={<ProfilePage />}/>
      </Routes>
      </Pagelayout>
      
    </>
  )
}

export default App
