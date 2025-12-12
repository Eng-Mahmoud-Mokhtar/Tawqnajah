import { useState, useEffect, useRef } from "react";
import { Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import { useNavigate, NavLink, Link } from "react-router-dom";
import '../../index.css'
import { FiUser } from "react-icons/fi";
import { CiCreditCard1 } from "react-icons/ci";
import { MdLanguage } from "react-icons/md";
import { FaHeadset, FaBullhorn, FaHome, FaShoppingCart, FaClipboardList, FaHeart, FaComments, FaHandshake, FaUsers, FaStore, FaGift } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest('.tn-nav-hamburger')) {
        setMenuOpen(false);
      }
    }

    function handleScroll() {
      setMenuOpen(false);
    }

    document.addEventListener("click", handleClickOutside);

    // Add scroll listener to the menu itself
    const menuElement = menuRef.current;
    if (menuElement) {
      menuElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      if (menuElement) {
        menuElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const sidebarLinks = [
    { icon: <FaHome />, text: "الرئيسية", path: "/home" },
    { icon: <FaShoppingCart />, text: "التسوق", path: "/shopping" },
    { icon: <FaClipboardList />, text: "طلباتي", path: "/confirmedorders" },
    { icon: <FaHeart />, text: "المفضلة", path: "/favorites" },
    { icon: <FaComments />, text: "قالوا عن طوق نجاة", path: "/abouttawq" },
    { icon: <FaHandshake />, text: "الشراكات المجتمعية", path: "/communitypartnerships" },
    { icon: <FaUsers />, text: "المسوّقين", path: "/marketers" },
    { icon: <FaStore />, text: "التجار", path: "/sellers" },
    { icon: <FaGift />, text: "عروض طوق نجاة", path: "/productssection" },
    { icon: <FiUser />, text: "معلومات الحساب", path: "/profileaccount" },
    { icon: <CiCreditCard1 />, text: "الحساب البنكي", path: "/bankaccount" },
    { icon: <MdLanguage />, text: "اللغة", path: "/language" },
    { icon: <FaHeadset />, text: "دعم التطبيق", path: "/eyesupport" },
    { icon: <FaBullhorn />, text: "تسويق", path: "/marketing" },
  ];

  return (
    <>
      {/* ===== MAIN NAVBAR ===== */}
      <div className="tn-nav-main">
        <Container className="tn-nav-wrapper">

          {/* ✅ الأزرار */}
          <div className="tn-buttons-box">
            <Link to="#" className="tn-nav-download-app" onClick={() => window.open("#", "_blank")}>تحميل التطبيق <i className="fa fa-download"></i></Link>
          </div>

          {/* ✅ الروابط */}
          <Nav className={`tn-nav-links ${menuOpen ? "open" : ""}`}>
            <NavLink to="/home" className="tn-nav-link">الرئيسية</NavLink>
            <NavLink to="/shopping" className="tn-nav-link">التسوق</NavLink>
            <NavLink to="/confirmedorders" className="tn-nav-link">طلباتي</NavLink>
            <NavLink to="/favorites" className="tn-nav-link">المفضلة</NavLink>
            <NavLink to="/abouttawq" className="tn-nav-link">قالوا عن طوق نجاة</NavLink>
            <NavLink to="/communitypartnerships" className="tn-nav-link">الشراكات المجتمعية
  </NavLink>
  <NavLink to="/marketers" className="tn-nav-link">المسوّقين</NavLink>
            <NavLink to="/sellers" className="tn-nav-link">
            التجار
</NavLink>
            <NavLink to="/productssection" className="tn-nav-link">
            عروض طوق نجاة
</NavLink>
          </Nav>

          {/* ✅ زر الهامبرجر */}
          <button className={`tn-nav-hamburger ${menuOpen ? 'tn-nav-hamburger-hidden' : ''}`} onClick={toggleMenu}>☰</button>

        </Container>
      </div>

      {/* ===== Mobile Menu ===== */}
      <div className="tn-mobile-wrapper" ref={menuRef}>
        <div className={`tn-mobile-menu ${menuOpen ? 'open' : ''}`}>
          <div className="tn-mobile-search">
            <div className="search-container">
              <input type="text" placeholder="البحث عن المنتج" />
              <i className="fa fa-search tn-search-icon"></i>
            </div>
          </div>
          <ul className="tn-mobile-list">
            <li>
              <Link to={'/home'} className="tn-mobile-item" onClick={() => setMenuOpen(false)}>
                <i className="fa fa-home"></i> الرئيسية
              </Link>
            </li>
            <li>
              <Link to={'/shopping'} className="tn-mobile-item" onClick={() => setMenuOpen(false)}>
                <i className="fa fa-shopping-cart"></i> التسوق
              </Link>
            </li>
            <li>
              <Link to={'/confirmedorders'} className="tn-mobile-item" onClick={() => setMenuOpen(false)}>
                <i className="fa fa-clipboard-list"></i> طلباتي
              </Link>
            </li>
            <li>
              <Link to={'/favorites'} className="tn-mobile-item" onClick={() => setMenuOpen(false)}>
                <i className="fa fa-heart"></i> المفضلة
              </Link>
            </li>
            <li>
              <Link to={'/abouttawq'} className="tn-mobile-item" onClick={() => setMenuOpen(false)}>
                <i className="fa fa-comments"></i> قالوا عن طوق نجاة
              </Link>
            </li>
            <li>
              <Link to={'/communitypartnerships'} className="tn-mobile-item" onClick={() => setMenuOpen(false)}>
                <i className="fa fa-handshake"></i> الشراكات المجتمعية
              </Link>
            </li>
            <li>
              <Link to={'/marketers'} className="tn-mobile-item" onClick={() => setMenuOpen(false)}>
                <i className="fa fa-users"></i> المسوقين
              </Link>
            </li>
            <li>
              <Link to={'/sellers'} className="tn-mobile-item" onClick={() => setMenuOpen(false)}>
                <i className="fa fa-store"></i> التجار
              </Link>
            </li>
            <li>
              <Link to={'/productssection'} className="tn-mobile-item" onClick={() => setMenuOpen(false)}>
                <i className="fa fa-gift"></i> عروض طوق نجاة
              </Link>
            </li>

            <li>
              <button className="tn-mobile-item tn-mobile-logout" onClick={() => { setMenuOpen(false); /* logout logic */ }}>
                <MdLogout /> تسجيل الخروج
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== Overlay ===== */}
      <div
        className={`tn-nav-overlay ${sidebarOpen ? "show" : ""} ${menuOpen ? "open" : ""}`}
        onClick={() => { setSidebarOpen(false); setMenuOpen(false); }}
      ></div>

      {/* ===== Sidebar ===== */}
      <div className={`tn-nav-sidebar ${sidebarOpen ? "open" : ""}`}>
        <button
          className="tn-nav-close-sidebar"
          onClick={() => setSidebarOpen(false)}
        >
          <IoClose size={26} />
        </button>

        <div className="tn-nav-sidebar-header">
          <h3>محمود استور</h3>
          <span className="date">تاريخ الانضمام 25/10/2025</span>
        </div>

        <ul className="tn-nav-sidebar-links">
          {sidebarLinks.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setSidebarOpen(false);
                navigate(item.path);
              }}
            >
              <span className="tn-nav-sidebar-item">
                {item.icon}
                {item.text}
              </span>
              <IoIosArrowBack />
            </li>
          ))}
        </ul>

        <button className="tn-nav-download-btn" onClick={() => window.open("#", "_blank")}>
          تحميل التطبيق <i className="fa fa-download"></i>
        </button>
      </div>
    </>
  );
}
