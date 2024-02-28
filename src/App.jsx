import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './PAGES/Homepage/Homepage'
import Authpage from './PAGES/Authpage/Authpage'
import Pagelayout from './Layouts/PageLayout/Pagelayout'
import ProfilePage from './PAGES/ProfilePage/ProfilePage'
import useAuthStore from './store/authStore'
import { auth } from './firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


function App() {
  
  const [authUser] = useAuthState(auth);
  

  return (
    <>
      <Pagelayout>
      <Routes>
        <Route path='/' element={authUser ? <Homepage /> : <Navigate to='/auth' />}/>
        <Route path='/auth' element={!authUser ? <Authpage />: <Navigate to='/'/>}/>
        <Route path='/:username' element={<ProfilePage />}/>
      </Routes>
      </Pagelayout>
      
    </>
  )
}

export default App
