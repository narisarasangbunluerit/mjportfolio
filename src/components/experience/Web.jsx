import React from "react";
import WebImg1 from "../../assets/Web1.png";
import WebImg2 from "../../assets/Web2.png";
import WebImg3 from "../../assets/Web3.png";
import WebImg4 from "../../assets/Web4.png";
import WebImg5 from "../../assets/Web5.png";
import WebImg6 from "../../assets/Web6.png";

const Web = () => {
  return (
    <div className="experience_detail__container container grid">
      <a
        target="_blank"
        href="https://www.figma.com/file/BVSdsogRQHBfwqUNbvh3Z9/COMSCI?node-id=0%3A1&t=MokpNPfNT4TflQSx-1"
      >
        <div className="experience_detail__content">
          <img src={WebImg1} alt="" className="experience_detail__image" />

          <div>
            <h3 className="experience_detail__name">Computer Science</h3>
          </div>
        </div>
      </a>

      <a
        target="_blank"
        href="https://www.figma.com/file/EN5Z1YiVspe2PcXFWu4ldG/Science-KMITL?node-id=0%3A1&t=0LcoLpJBRw9a2uIl-1"
      >
        <div className="experience_detail__content">
          <img src={WebImg2} alt="" className="experience_detail__image" />

          <div>
            <h3 className="experience_detail__name">Science KMITL</h3>
          </div>
        </div>
      </a>

      <a
        target="_blank"
        href="https://www.figma.com/file/gIngvzCE1Zu05zIyCRxZy8/Cs-Concept?node-id=0%3A1&t=0LcoLpJBRw9a2uIl-1"
      >
        <div className="experience_detail__content">
          <img src={WebImg3} alt="" className="experience_detail__image" />

          <div>
            <h3 className="experience_detail__name">Cs Concept</h3>
          </div>
        </div>
      </a>

      <a
        target="_blank"
        href="https://www.figma.com/file/mK4bPUbqz9jSKaYYfGd1B0/Portfolio-UX-Researcher?node-id=0%3A1&t=0LcoLpJBRw9a2uIl-1"
      >
        <div className="experience_detail__content">
          <img src={WebImg4} alt="" className="experience_detail__image" />

          <div>
            <h3 className="experience_detail__name">Portfolio V.1</h3>
          </div>
        </div>
      </a>

      <a
        target="_blank"
        href="https://www.figma.com/file/ZBq0iOBs8jeRPXMIkfwsG0/KMITL?node-id=106%3A1771&t=0LcoLpJBRw9a2uIl-1"
      >
        <div className="experience_detail__content">
          <img src={WebImg5} alt="" className="experience_detail__image" />

          <div>
            <h3 className="experience_detail__name">KMITL</h3>
          </div>
        </div>
      </a>

      <a
        target="_blank"
        href="https://www.figma.com/file/TCmu7om90hnDWXxqi1C8nr/Untitled?node-id=1%3A1632&t=baOYcx1Pn3H9TlVu-1"
      >
        <div className="experience_detail__content">
          <img src={WebImg6} alt="" className="experience_detail__image" />

          <div>
            <h3 className="experience_detail__name">Portfolio V.2</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Web;
