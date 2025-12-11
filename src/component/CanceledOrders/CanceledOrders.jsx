import React from 'react'
import '../ShippedOrders/ShippedOrders.css'
import img from "../../assets/winter-shirt.jpg";
import { useNavigate, useLocation } from "react-router-dom";

export default function ShippedOrders() {

  const navigate = useNavigate(); 
  const location = useLocation();

  const orders = [
    {
      id: 1,
      title: "جاكيت شتوي",
      desc: "جاكيت أبيض - تخفيض خاص",
      category: "ملابس",
      qty: 1,
      price: "149.99 ر.س",
      img: img,
    },
  ];

  const goToDetails = (id) => {
    navigate(`/canceledordersdetails`);
  };

  return (
    <div className="container neworders-page mt-5 mb-5 pb-5">

      <div className="row">

        {/* ====== الجزء اليمين (التابات) ====== */}
        <div className="col-lg-3  d-lg-block mt-5 pt-5">
          <div className="orders-right-tabs">

            <button
              className={`cright-tab ${location.pathname === "/confirmedorders" ? "active" : ""}`}
              onClick={() => navigate("/confirmedorders")}
            >
              الطلبات الحالية
            </button>

            <button
              className={`cright-tab ${location.pathname === "/shippedorders" ? "active" : ""}`}
              onClick={() => navigate("/shippedorders")}
            >
              الطلبات المكتملة
            </button>

            <button
              className={`cright-tab ${location.pathname === "/canceledorders" ? "active" : ""}`}
              onClick={() => navigate("/canceledorders")}
            >
              الطلبات الملغية
            </button>

          </div>
        </div>

        {/* ====== الجزء الشمال (الكروت) ====== */}
        <div className="col-lg-9 col-12">

          <div className="corders-wrapper">
            {orders.map((order) => (
              <div 
                key={order.id}
                className="order-card completedorder"
                onClick={() => goToDetails(order.id)}
                style={{ cursor: "pointer" }}
              >
                <div className='left-side text-left'>
                  <div className="canceled-status">الملغية</div>
                  <p className="order-price-left">{order.price}</p>
                </div>

                <div className="order-content">
                  <div className="image-side">
                    <img src={order.img} alt="product" className="order-img" />

                    <div className="text-side">
                      <h4 className="product-title">{order.title}</h4>
                      <p className="product-desc">{order.desc}</p>

                      <p className="categorycanceled">
                        <span className="qty">x{order.qty}</span>
                        <span className="type">{order.category}</span>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
