import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import AuthPartnerLayout from "./layout/AuthPathnerLayout";
import UsersAuth from "@/pages/Auth/users";
import UserProfile from "@/pages/Market/profile/index"
import PartnerOnboarding from "@/pages/Auth/partner/register";
import PartnerProfile from "@/pages/Auth/partner/Profile";
import PartnerLogin from "@/pages/Auth/partner/login";
import ForgotPassword from "@/pages/Auth/forgot-password";
import MarketPlaceLandingPage from "@/pages/Market/landing-page/index";
import Property from "@/pages/Market/propertylisting";
import MarketPlaceLayout from "./layout/MarketPlaceLayout";
import RequiredAuth from "@/components/RequiredAuth";
import { Roles } from "./constants/globalConstants";
import PartnerLayout from "./layout/PartnerLayout";
import PartnerDashboard from "@/pages/Partner/dashboard/index";
import Reservation from "@/pages/Partner/Reservation";
import Rooms from "@/pages/Partner/Rooms";
import StaffLayout from "@/pages/Partner/Staff/layout";
import Staff from "@/pages/Partner/Staff/index";
import StaffProfile from "@/pages/Partner/Staff/pages/Profile";
import StaffTasks from '@/pages/Partner/Staff/pages/Tasks'
import StaffHelp from "@/pages/Partner/Staff/pages/Help";
import NewStaff from "@/pages/Partner/Staff/pages/NewStaff";
import StaffTeamMembers from "@/pages/Partner/Staff/pages/Team";
import Analytics from "@/pages/Partner/Analytics";
import Reports from "@/pages/Partner/Reports";
import Reviews from "@/pages/Partner/Reviews";
import Notification from "@/pages/Partner/Notification";
import Inventory from "@/pages/Partner/Inventory";
import Promotions from "@/pages/Partner/Promotions";
import Complains from "@/pages/Partner/Complains";
import Settings from "@/pages/Partner/Settings";
import AuthPages from "@/pages/Auth/index";
import Confirmation from "./pages/Auth/Confirmation";
import ConfirmationTemplate from "./pages/Auth/components/ConfirmationTemplate";
import ConfirmationMailTemplate from "./pages/Auth/forgot-password/ConfirmMailTemplate";
import { useState } from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            {/* Public routes */}
            {/* MarketPlace */}
            <Route path="/" element={<MarketPlaceLayout />}>
              <Route index element={<MarketPlaceLandingPage />} />
              <Route path="property" element={<Property />} />
              <Route path="user" element={<RequiredAuth allowedRoles={Roles.User} />}>
                <Route path="profile" element={<UserProfile />} />
              </Route>
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

            {/* partner */}
            <Route element={<RequiredAuth allowedRoles={[Roles.Staff]} />}>
              <Route element={<PartnerLayout />}>
                <Route path="dashboard" element={<PartnerDashboard />} />
                <Route path="reservation" element={<Reservation />} />
                <Route path="rooms" element={<Rooms />} />
                <Route path="staff" element={<StaffLayout />}>
                  <Route index element={<Staff />} />
                  <Route path="new" element={<NewStaff />} />
                  <Route path="profile" element={<StaffProfile />} />
                  <Route path="help" element={<StaffHelp />} />
                  <Route path="tasks" element={<StaffTasks />} />
                  <Route path="team" element={<StaffTeamMembers />} />
                </Route>
                <Route path="analytics" element={<Analytics />} />
                <Route path="reports" element={<Reports />} />
                <Route path="guests" element={<Reviews />} />
                <Route path="notification" element={<Notification />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="promotions" element={<Promotions />} />
                <Route path="complains" element={<Complains />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
