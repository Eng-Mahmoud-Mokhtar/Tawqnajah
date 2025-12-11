import React from "react";
import "../SellerShippedOrders/SellerShippedOrders.css";
import { Link } from "react-router-dom";
import burgersale from "../../assets/burger-sale.jpg";

export default function SellerShippedOrders() {
  const orders = [
    {
      id: 1,
      title: "عرض البرجر",
      desc: "وجبة برجر شهية بسعر مميز",
      price: "89.97",
      qty: 3,
      img: burgersale,
    },
  ];

  return (
    <div className="orders-page container">

      {/* ===== Tabs ===== */}
      <div className="tabs-row">
        <Link to="/seller/sellerconfirmedorders" className="tab">
          (1) المؤكدة
        </Link>

          <Link to="/seller/sellershippedorders" className="tab-active">
                    (1) المشحونة

          </Link>

        <Link to="/seller/sellermydeliveredorders" className="tab">
          (1) تم التسليم
        </Link>
      </div>

      {/* ======= Order Card ======= */}
      <div className="cards-wrapper">
        {orders.map((order, index) => (
          <div key={index} className="order-mobile-card">

            <img src={order.img} alt="" className="order-mobile-img" />

            <div className="order-mobile-content">

              <h3 className="order-mobile-title">{order.title}</h3>

              <p className="order-mobile-desc">{order.desc}</p>

              <div className="order-bottom-row">
                 <span className="order-badge">x{order.qty}</span>
                <span className="order-type">طعام</span>
                <span className="order-price">{order.price} ر.س</span>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
