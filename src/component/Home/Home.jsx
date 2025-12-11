import React, { useEffect, useState } from "react";
import lock from "../../assets/lock-icon.png";
import shopbtn from "../../assets/shop-arrow.png";
import avatar from "../../assets/rateproduct.png";
import "./Home.css";
import offerbanner from "../../assets/offers-banner.jpg";

import Categories from "../Categories/Categories";
import ProductsSection from "../ProductsSection/ProductsSection";
import Offerstawqnajah from "../Offerstawqnajah/Offerstawqnajah";
import SuccessPartners from "../SuccessPartners/SuccessPartners";
import OffersTawq from "../OffersTawq/OffersTawq";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import CategoryDetails from "../CategoryDetails/CategoryDetails";
import CategoryPage from "../CategoryPage/CategoryPage";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "أحدث صيحات الموضة",
      desc: "استمتعي بتجربة تسوق عصرية بأفضل الأسعار",
      imgClass: "slide1",
    },
    {
      title: "إلكترونيات بأحدث التقنيات",
      desc: "موبايلات – لابتوبات – أجهزة ذكية",
      imgClass: "slide2",
    },
    {
      title: "قسم الألعاب",
      desc: "أقوى الألعاب والإكسسوارات بأفضل سعر",
      imgClass: "slide3",
    },
    {
      title: "قسم الأثاث",
      desc: "أثاث عصري يناسب كل الأذواق",
      imgClass: "slide4",
    },
    {
      title: "قسم السوبر ماركت",
      desc: "كل احتياجات البيت في مكان واحد",
      imgClass: "slide5",
    },
    {
      title: "قسم المطبخ",
      desc: "أدوات مطبخ عملية وعصرية",
      imgClass: "slide6",
    },
  ];

  useEffect(() => {
    setAnimate(true);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="hero-wrapper">
      <div className={`hero-container ${animate ? "animate" : ""}`}>
        {/* صورة السلايد */}
        <div className={`hero-left ${slides[current].imgClass}`}></div>

        {/* المحتوى */}
        <div className="hero-right px-3">
          <span className="hero-tag">
            <img className="lock" src={lock} alt="" />
            <p className="web-text mb-0">الموقع الأفضل للتسوق الإلكتروني</p>
          </span>

          <h1 className="hero-heading">{slides[current].title}</h1>
          <p className="web-order">{slides[current].desc}</p>

          <div className="products-info">
            <button className="customerbtn tn-nav-app-btn d-flex fle-row justify-content-center align-items-center">
              <i className="fa-solid fa-arrow-right ms-2 ms-md-0"></i>
              <p className="btn-text">تسوق الآن</p>
            </button>
            <button
              className="customerbtn tn-nav-app-btn "
              onClick={() => window.open("#", "_blank")}
            >
              تحميل التطبيق
            </button>

            <span className="products-link">
              <a className="fw-bold text-decoration-none text-black">
                شاهد جميع المنتجات
              </a>
            </span>
          </div>

          {/* التقييم */}
          <div className="home-rating">
            <div className="icons-stack">
              <i className="plusicon">+</i>
              <img src={avatar} alt="" className="img-1" />
              <img src={avatar} alt="" className="img-2" />
              <img src={avatar} alt="" className="img-3" />
            </div>

            <div className="rate-box-text">
              <span className="ratemaintext">+ 4.9 تقييم</span>
              <p className="rate-sub mb-0">ثقة أكثر من 2000 عميل</p>
            </div>
          </div>
        </div>

        {/* الأسهم */}
        <button className="slide-arrow right" onClick={nextSlide}>
          ›
        </button>
        <button className="slide-arrow left" onClick={prevSlide}>
          ‹
        </button>
      </div>

      <Categories />

      <div className="offers-banner">
        <img src={offerbanner} alt="" />
      </div>

      <ProductsSection />
      {/* <Offerstawqnajah />  */}
      {/* <OffersTawq/> */}
      <SuccessPartners />
    </div>
  );
}
