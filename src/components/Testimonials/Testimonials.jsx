import { RiDoubleQuotesL } from "react-icons/ri";
import { MdArrowRightAlt } from "react-icons/md";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import data from "../../Data";
import "./Testimonials.scss";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [slidePerView, setSlidePerView] = useState(3);
  const [showNavigation, setShowNavigation] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setSlidePerView(1);
        setShowNavigation(false);
      } else if (window.innerWidth <= 1024) {
        setSlidePerView(2);
        setShowNavigation(false);
      } else {
        setSlidePerView(3);
        setShowNavigation(true);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="testimonials" id="depoimentos">
      <h1>Depoimentos</h1>
      <h3>Veja o que nossos pacientes dizem:</h3>

      <div className="testimonial-cta">
        <Swiper
          slidesPerView={slidePerView}
          navigation={showNavigation}
          modules={[Navigation]}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial">
                <p className="testimonial-text">{item.testimonial}</p>
                <div className="testimonial-footer">
                  <span className="patient-name">{item.name}</span>
                </div>
                <RiDoubleQuotesL className="quote-icon" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="arrow">
          <span>Arraste para o lado</span>
          <MdArrowRightAlt
            className="arrow-icon
          "
          />
        </div>
        <h4>
          Seu feedback é importantíssimo para o
          <strong>Instituto Eduardo Magalhães</strong>
        </h4>
        <a
          href="https://www.google.com/search?q=InstitutoEduardoMagalh%C3%A3es"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          CLIQUE PARA NOS AVALIAR
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
