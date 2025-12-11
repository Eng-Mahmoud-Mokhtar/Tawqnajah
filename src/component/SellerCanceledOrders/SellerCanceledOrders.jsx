import React from 'react'
import '../CanceledOrders/CanceledOrders.css'
import img from "../../assets/winter-shirt.jpg";
import { useNavigate } from "react-router-dom";

export default function CanceledOrders() {

  const navigate = useNavigate(); // <<< مهم

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
    navigate(`/seller/sellercanceledordersdetails`);
  };

  return (
    <div className="container neworders-page mt-5 mb-5 pb-5">

      <h1 className="canceled-heading mt-5 pt-5 mb-3">
        الطلبات الملغاة/<span className="main">الرئيسية</span>
      </h1>

      <div className="orders-wrapper">
        {orders.map((order) => (
          <div 
            key={order.id} 
            className="order-card canceledorder"
            onClick={() => goToDetails(order.id)}  // <<< هنا الانتقال
            style={{ cursor: "pointer" }} 
          >

            <div className='left-side text-left'>
              <div className="status-tab">الملغية</div>
              <p className="order-price-left">{order.price}</p>
            </div>

            <div className="order-content">
              <div className="image-side">
                <img src={order.img} alt="product" />
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
  );
}
