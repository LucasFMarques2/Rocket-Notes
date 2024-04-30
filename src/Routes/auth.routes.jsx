import { Routes, Route} from 'react-router-dom'

import {SignIn} from '../pages/SignIn'
import {SingUp} from '../pages/SingUp'

export function AuthRoutes() {
  return(
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/cadastro" element={<SingUp/>}/>
    </Routes>
  ) 
}