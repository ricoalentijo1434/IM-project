import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import UserRegistration from "./Pages/UserRegistration";
import AdminRegistration from "./Pages/AdminRegistration";
import ForgotPassword from "./Pages/ForgotPassword";
import NotFound from "./Pages/NotFound";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminProfile from "./Pages/AdminProfile";
import UserDashboard from "./Pages/UserDashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/UserRegistration" element={<UserRegistration />} />
      <Route path="/AdminRegistration" element={<AdminRegistration />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/AdminDashboard" element={<AdminDashboard />} />
      <Route path="/AdminProfile" element={<AdminProfile />} />
      <Route path="/UserDashboard" element={<UserDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
