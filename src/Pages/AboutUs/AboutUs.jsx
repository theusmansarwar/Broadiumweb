import React from "react";
import "./AboutUs.css";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Mission from "../../Assets/mission.png";
import Vision from "../../Assets/vision.png";
import Value from "../../Assets/value.png";
import Image1 from "../../Assets/discover1.webp";
import Image2 from "../../Assets/discover2.webp";
import Image3 from "../../Assets/discover3.webp";
import Image4 from "../../Assets/watching1.webp";
const AboutUs = () => {
  return (
    <div className="about-us">
      {/* <div className="heading-area">
        <p>Who We Are?</p>
        <p className="sub-heading">
          Explore a wide range of TV packages designed to fit your entertainment
          needs. Enjoy premium channels, on-demand content, and crystal-clear HD
          quality.
        </p>
      </div> */}
      <Breadcrumb />

      <div className="about-content-section">
        <div className="title-area">
          <p className="title">
            <span className="highlight">WHO</span> WE ARE
          </p>
          <p className="decription">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="mid-section">
          <div className="first">
            <div className="mission-icon">
              <img src={Mission} alt="" />
            </div>
            <div className="mission-title">MISSION</div>

            <div className="mission-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              obcaecati esse quae natus et qui, nihil neque quos animi fugit
              culpa repellendus repudiandae debitis molestiae nesciunt cum saepe
              ab inventore cupiditate. Deleniti neque ad obcaecati esse totam
              similique voluptas commodi eum incidunt optio, porro cum hic
              ratione quod officiis dolor?
            </div>
          </div>
          <div className="second">
            <div className="vision-icon">
              <img src={Vision} alt="" />
            </div>
            <div className="vision-title">VISION</div>

            <div className="vision-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              obcaecati esse quae natus et qui, nihil neque quos animi fugit
              culpa repellendus repudiandae debitis molestiae nesciunt cum saepe
              ab inventore cupiditate. Deleniti neque ad obcaecati esse totam
              similique voluptas commodi eum incidunt optio, porro cum hic
              ratione quod officiis dolor?
            </div>
          </div>
          <div className="third">
            <div className="value-icon">
              <img src={Value} alt="" />
            </div>
            <div className="value-title">VALUE</div>

            <div className="value-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              obcaecati esse quae natus et qui, nihil neque quos animi fugit
              culpa repellendus repudiandae debitis molestiae nesciunt cum saepe
              ab inventore cupiditate. Deleniti neque ad obcaecati esse totam
              similique voluptas commodi eum incidunt optio, porro cum hic
              ratione quod officiis dolor?
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="left">
          <div
            className="box1"
            style={{
              backgroundImage: `url(${Image1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="box2"
            style={{
              backgroundImage: `url(${Image2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="box3"
            style={{
              backgroundImage: `url(${Image3})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="box4"
            style={{
              backgroundImage: `url(${Image4})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          </div>
          <div className="right-text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
              quidem, debitis facere neque tempora doloremque eum adipisci
              sapiente labore iure ipsum hic reiciendis numquam harum odit
              voluptatem, nobis accusamus molestias error recusandae et
              distinctio? Repellat a saepe ipsa illo nobis labore natus in vitae
              quo architecto optio reiciendis repellendus, quibusdam dolorem
              velit non numquam autem necessitatibus magni delectus quidem vero!
              Officiis est, sequi excepturi nulla illo quia. Aliquid,
              dignissimos, voluptatibus eaque veritatis blanditiis pariatur
              quisquam consectetur nesciunt similique rerum, provident quos sunt
              in sed necessitatibus ex unde ducimus reiciendis exercitationem.
              Aspernatur soluta deserunt quod nesciunt qui explicabo, id non
              eligendi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
