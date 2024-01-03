import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import AuthLayout from './layout/AuthLayout'
import UsersAuth from '@/pages/Auth/users'
import PartnerAuth from "@/pages/Auth/partner";
import ForgotPassword from '@/pages/Auth/forgot-password'
import MarketPlaceLandingPage from '@/pages/Market/landing-page/index'
import MarketPlaceLayout from './layout/MarketPlaceLayout'
import RequiredAuth from '@/components/RequiredAuth'
import { Roles } from './constants/globalConstants'
import PartnerLayout from './layout/PartnerLayout'
import PartnerDashboard from '@/pages/Partner/dashboard/index'
import AuthPages from '@/pages/Auth/index'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Public routes */}
          {/* MarketPlace */}
          <Route path="/" element={<MarketPlaceLayout />}>
            <Route index element={<MarketPlaceLandingPage />} />
          </Route>

          {/* Auth */}
          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<AuthPages />} />
            <Route path="users" element={<UsersAuth/> } />
            <Route path="business" element={<PartnerAuth />} />
            <Route path="forgot_password" element={<ForgotPassword/>}/>
          </Route>

          {/* Private routes */}
          {/* Required Auth element is not yet complete */}
          <Route element={<RequiredAuth allowedRoles={[Roles.Staff]} />}>
            <Route path="dashboard" element={<PartnerLayout />}>
              <Route index element={<PartnerDashboard />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
