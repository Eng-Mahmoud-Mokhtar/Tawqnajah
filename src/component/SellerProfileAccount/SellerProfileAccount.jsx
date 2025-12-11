// import React, { useState } from "react";
// import "./ProfileAccount.css";

// import avatarImg from "../../assets/avatar.jpg";
// import profilepicture from "../../assets/profileicon.png";
// import accountimg from "../../assets/account-img.png";
// import marketingimg from "../../assets/m-img.png";
// import survimg from "../../assets/surv-img.png";
// import logoutimg from "../../assets/logout-img.png";

// import facebookIcon from "../../assets/logos_facebook.png";

// export default function ProfileAccount() {
//   const [code, setCode] = useState("+966");
//   const [showCodes, setShowCodes] = useState(false);
//   const [filter, setFilter] = useState("");
//   const [phone, setPhone] = useState("");

//   const countries = [
//     { key: "+966", name: "السعودية" },
//     { key: "+971", name: "الإمارات" },
//     { key: "+20", name: "مصر" },
//     { key: "+962", name: "الأردن" },
//     { key: "+974", name: "قطر" },
//   ];

//   return (
//     <div className="profile-wrapper container" style={{marginTop:"180px"}}>

      
//       <div className="marketing-sidebar ">
//         <button className="side-btn active" style={{alignItem:"center"}}>
//           <img src={profilepicture} alt="" /> حسابي الشخصي
//         </button>

//         <button className="side-btn">
//           <img src={accountimg} alt="" /> الحساب البنكي
//         </button>

//         <button className="side-btn ">
//           <img src={marketingimg} alt="" /> التسويق
//         </button>

//         <button className="side-btn">
//           <img src={survimg} alt="" /> التقييم والعقود
//         </button>

//         <button className="side-btn logout">
//           <img src={logoutimg} alt="" /> تسجيل الخروج
//         </button>
//       </div>

//       <div className="profile-content">

//         <div className="profile-avatar-wrapper">
//           <div className="avatar-circle">
//             <img src={avatarImg} className="profile-avatar" alt="avatar" />
//             <button className="avatar-edit-btn">
//               <i className="fa-solid fa-pen"></i>
//             </button>
//           </div>
//         </div>

       
//         <form className="profile-form">

//           <div className="form-group">
//             <label className=" fw-bolder mb-2">اسم المحل / البائع</label>
//             <input className="form-input" placeholder="ادخل اسم المستخدم" />
//           </div>

//           <div className="form-group">
//             <label className=" fw-bolder mb-2">البريد الإلكتروني</label>
//             <input className="form-input" placeholder="reem@email.com" />
//           </div>

//           <div className="form-group">
//             <label className=" fw-bolder mb-2">العنوان</label>
//             <input className="form-input" placeholder="الرياض، السعودية" />
//           </div>

       
//           <div className="form-group">
//             <label className=" fw-bolder mb-2">رقم الهاتف</label>
//             <div className="phone-box">

//               <div
//                 className="code-box"
//                 tabIndex={0}
//                 onClick={() => setShowCodes(!showCodes)}
//               >
//                 <span>{code}</span>
//                 <span className="arrow">▼</span>

//                 {showCodes && (
//                   <ul className="codes-list">
//                     {countries
//                       .filter((c) => c.key.includes(filter))
//                       .map((c, i) => (
//                         <li
//                           key={i}
//                           onClick={() => {
//                             setCode(c.key);
//                             setShowCodes(false);
//                             setFilter("");
//                           }}
//                         >
//                           {c.key} ({c.name})
//                         </li>
//                       ))}
//                   </ul>
//                 )}
//               </div>

//               <input
//                 type="text"
//                 className="phone-input"
//                 placeholder="123 456 789"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//             </div>
//           </div>

         
//           <div className="form-group">
//             <label className=" fw-bolder mb-2">مواقع التواصل الاجتماعي</label>
//             <div className="social-row">
//               <div className="social-input-box">
//                 <img src={facebookIcon} alt="fb" className="input-icon" />
//                 <input
//                   type="text"
//                   className="form-input"
//                   placeholder="www.facebook.com/username"
//                 />
//               </div>
//             </div>
//           </div>

         
//           <div className="save-wrapper">
//             <button type="button" className="save-btn">حفظ</button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }
