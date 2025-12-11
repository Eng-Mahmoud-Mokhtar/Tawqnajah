import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import UpperNav from "../Uppernav/Uppernav";

export default function Layout() {
  const location = useLocation();

  // ✅ صفحات الفورم فقط
  const authRoutes = [
    "/login",
    "/customer/register",
    "/forgetpassword",
    "/resetpassword",
    "/changepassword",
    "/accounttype"
  ];

  const hideLayout = authRoutes.some(route =>
    location.pathname.toLowerCase().startsWith(route)
  );

  return (
    <>
      {!hideLayout && <UpperNav />}
      {!hideLayout && <Navbar />}

      <Outlet />

      {!hideLayout && <Footer />}
    </>
  );
}
