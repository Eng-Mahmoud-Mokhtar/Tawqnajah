import "./SuccessPartners.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function SuccessPartners() {
  const partners = [
    { icon: <FaFacebookF />, name: "ستايل ستور" },     // ملابس
    { icon: <FaInstagram />, name: "تك زون" },         // إلكترونيات
    { icon: <FaTwitter />, name: "هوم دريم" },        // أثاث
    { icon: <FaLinkedinIn />, name: "بيت العائلة" },  // مستلزمات منزل
  ];

  return (
    <section className="partners-section mt-5 ">
      <h2 className="partners-title text-dark d-flex justify-content-start px-5 mx-5">شركاء النجاح</h2>

      <div className="partners-grid ">
        {partners.map((item, index) => (
          <div key={index} className="partner-card">
            <div className="partner-icon">{item.icon}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
