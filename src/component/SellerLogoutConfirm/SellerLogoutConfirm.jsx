import React from "react";
import "./SellerLogoutConfirm.css";

import profilepicture from "../../assets/profile-img.png";
import accountimg from "../../assets/account-img.png";
import marketingimg from "../../assets/m2.png";
import survimg from "../../assets/surv-img.png";
import logoutimg from "../../assets/logout-img.png";

export default function SellerLogoutConfirm() {
  return (
    <div className="logout-wrapper container">

      {/* اليمين - القائمة الجانبية */}
      <div className="marketing-sidebarr mt-5">
        <button className="side-btn">
          <img src={profilepicture} alt="" /> حسابي الشخصي
        </button>

        <button className="side-btn">
          <img src={accountimg} alt="" /> الحساب البنكي
        </button>

        <button className="side-btn">
          <img src={marketingimg} alt="" /> التسويق
        </button>

        <button className="side-btn">
          <img src={survimg} alt="" /> التقييم والعقود
        </button>

        <button className="side-btn logout active-logout">
          <img src={logoutimg} alt="" /> تسجيل الخروج
        </button>
      </div>

      {/* الشمال - محتوى تسجيل الخروج */}
      <div className="logout-content">
        <h2 className="logout-title">هل تريد تسجيل الخروج ؟</h2>

        <button className="logout-main-btn">
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
}
