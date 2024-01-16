import React from "react";
import AppImg1 from "../../assets/App1.png";
import AppImg2 from "../../assets/App2.png";
import AppImg3 from "../../assets/App3.png";
import WebImg10 from "../../assets/Web10.png";
const App = () => {
  return (
    <div className="experience_detail__container container grid">
      <a
        target="_blank"
        href="https://www.figma.com/file/d1M7hTCxQRlqUViWqIkXYC/Medical-Care?t=MokpNPfNT4TflQSx-1"
      >
        <div className="experience_detail__content">
          <img src={AppImg2} alt="" className="experience_detail__image" />

          <div>
            <h3 className="experience_detail__name">Medical Care</h3>
          </div>
        </div>
      </a>

      <a
        target="_blank"
        href="https://www.figma.com/file/PaNwIgc8UzrAG7fChqZIpn/Food?node-id=0%3A1&t=MokpNPfNT4TflQSx-1"
      >
        <div className="experience_detail__content">
          <img src={AppImg1} alt="" className="experience_detail__image" />

          <div>
            <h3 className="experience_detail__name">Food App</h3>
          </div>
        </div>
      </a>

      <a
        target="_blank"
        href="https://www.figma.com/file/fJEFbUOa8xPZ6UWcDnAgs4/UX-with-a-product-(1)?t=k6DGSyMEb688DgcM-1"
      >
        <div className="experience_detail__content">
          <img src={AppImg3} alt="" className="experience_detail__image" />

          <div>
            <h3 className="experience_detail__name">Cactus Shop</h3>
          </div>
        </div>
      </a>

      <a
        target="_blank"
        href="https://www.figma.com/file/oOzAUWnU2ox4Cqyghl5EfY/Internship?type=design&node-id=3%3A3051&mode=design&t=39BoLoYffaGBo461-1"
      >
        <div className="experience_detail__content">
          <img src={WebImg10} alt="" className="experience_detail__image" />

          <div>
            <h3 className="experience_detail__name">Internship Projects</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default App;
