import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import AuthPartnerLayout from "./layout/AuthPathnerLayout";
import UsersAuth from "@/pages/Auth/users";
import PartnerOnboarding from "@/pages/Auth/partner/register";
import PartnerProfile from "@/pages/Auth/partner/Profile";
import PartnerLogin from "@/pages/Auth/partner/login";
import ForgotPassword from "@/pages/Auth/forgot-password";
import MarketPlaceLandingPage from "@/pages/Market/landing-page/index";
import MarketPlaceLayout from "./layout/MarketPlaceLayout";
import RequiredAuth from "@/components/RequiredAuth";
import { Roles } from "./constants/globalConstants";
import PartnerLayout from "./layout/PartnerLayout";
import PartnerDashboard from "@/pages/Partner/dashboard/index";
import AuthPages from "@/pages/Auth/index";
import Confirmation from "./pages/Auth/Confirmation";
import ConfirmationTemplate from "./pages/Auth/components/ConfirmationTemplate";
import ConfirmationMailTemplate from "./pages/Auth/forgot-password/ConfirmMailTemplate";


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
            <Route path="users" element={<UsersAuth />} />
            <Route path="forgot_password" element={<ForgotPassword />} />
            <Route path="confirmation" element={<Confirmation />} />
            <Route path="confirmation-template" element={<ConfirmationTemplate />} />
            <Route path="forgot_password_template" element={<ConfirmationMailTemplate />} />
          </Route>
          <Route path="onboard" element={<AuthPartnerLayout />}>
            <Route path="login" element={<PartnerLogin />} />
            <Route path="register" element={<PartnerOnboarding />} />
            <Route path="profile" element={<PartnerProfile />} />
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

export default App;
