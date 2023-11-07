import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { LuGithub } from "react-icons/lu";
import { BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi";
import About from "./about/About";
import Projects from "./projects/Projects";
// import universeTech from "./components/images/home/universeTech.png";
import Intro from "./intro/Intro";
import Nav from "./components/nav/Nav";

const Home = () => {
  const [positionCircleEffect, setPositionCircleEffect] = useState("corner");

  /*background circle effect----------------------------*/

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 350) {
        setPositionCircleEffect("corner");
      } else if (window.scrollY >= 350 && window.scrollY < 750) {
        setPositionCircleEffect("top");
      } else if (window.scrollY >= 750 && window.scrollY) {
        setPositionCircleEffect("left");
      } else if (window.scrollY >= 800) {
      } else if (window.scrollY >= 950) {
      }
    });
  }, []);

  // Scroll page into view-------------------------------
  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refProjects = useRef(null);
  const refContato = useRef(null);

  const handleSrollintoviewHome = () => {
    refHome.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleSrollintoviewAbout = () => {
    refAbout.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleSrollintoviewProjects = () => {
    refProjects.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleSrollintoviewContato = () => {
    refContato.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Wrapper ref={refHome}>
      {/*background circle effect */}
      <div
        className={
          positionCircleEffect === "corner"
            ? "circleEffect topRight"
            : positionCircleEffect === "top"
            ? "circleEffect topMiddle"
            : positionCircleEffect === "left"
            ? "circleEffect topLeft"
            : "circleEffect vanish"
        }
      >
        <div className="filledCircle"></div>
      </div>
      {/* ----------------------------- */}
      <nav>
        <Nav
          handleSrollintoviewHome={handleSrollintoviewHome}
          handleSrollintoviewAbout={handleSrollintoviewAbout}
          handleSrollintoviewProjects={handleSrollintoviewProjects}
          handleSrollintoviewContato={handleSrollintoviewContato}
        />
      </nav>
      <main>
        <section className="sec1">
          <Intro />
        </section>

        <section className="sec2" ref={refAbout}>
          <About />
        </section>

        <section className="sec3" ref={refProjects}>
          <Projects />
        </section>

        <section
          className="SocialMedia"
          data-aos="fade-up"
          data-aos-delay="400"
          ref={refContato}
        >
          <span>Contato</span>
          <div className="iconsLinksContainer">
            <div className="boxIcon">
              <LuGithub className="iconSocial" />
            </div>
            <div className="boxIcon">
              <BiLogoLinkedin className="iconSocial" />
            </div>
            <div className="boxIcon">
              <BiLogoInstagram className="iconSocial" />
            </div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-image: linear-gradient(to bottom, #181b1e, #213878, black);
  overflow: hidden;

  nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .circleEffect {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90rem;
    height: 90rem;
    border-radius: 50%;
    border: #a18cd1 solid 3px;
    z-index: 60;
    opacity: 0.2;
    transition: 2s ease all;

    .filledCircle {
      position: fixed;
      width: 50rem;
      height: 50rem;
      border-radius: 50%;
      /* background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%); */
      background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
      background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
      /* background-image: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%); */
      z-index: 90;
      opacity: 0.4;
    }
  }
  .topRight {
    top: -40rem;
    right: -40rem;
    transition: 1s ease all;
  }
  .topMiddle {
    top: -40rem;
    right: 10rem;
    transition: 1s ease all;
  }
  .topLeft {
    top: -40rem;
    right: 70rem;
    transition: 1s ease all;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .sec1 {
      margin-top: 7rem;
      width: 100vw;
      height: auto;
      z-index: 98;
    }

    .sec2 {
      width: 100vw;
      margin-top: 5rem;
      padding-bottom: 5rem;
      z-index: 98;
    }

    .sec3 {
      /* 0rem */
    }

    .SocialMedia {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 98;
      overflow: hidden;
      height: 30rem;

      span {
        width: 7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        margin-left: -3.5rem;
        top: 40%;
        color: #8dabfb;
        font-size: 1.7rem;
        font-weight: 300;
      }
      .iconsLinksContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #244191;
        width: 40rem;
        height: 40rem;
        border-radius: 50%;
        margin-top: 22rem;
        .boxIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          width: 6rem;
          height: 6rem;
          transition: 0.5s;
          background: transparent;
          margin: 1rem;
          margin-bottom: 10rem;
          cursor: pointer;
          -webkit-box-reflect: below 5px
            linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));

          &:hover {
            transition: 0.7s;
            transform: scale(1.3);
            border: #244191 3px solid;
            box-shadow: rgba(45, 48, 237, 0.12) 0px 8px 12px 0px,
              rgba(71, 162, 201, 0.32) 0px 2px 16px 0px;
          }
          .iconSocial {
            font-size: 3rem;
            margin: 8rem 1rem;
            color: #8dabfb;

            &:hover {
            }
          }
        }
      }
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      .SocialMedia {
        margin-top: -4rem;
        height: 25rem;
        span {
          width: 5rem;
          font-size: 1.7rem;
          left: 50%;
          margin-left: -2.5rem;
          top: 20%;
        }
        .iconsLinksContainer {
          width: 30rem;
          height: 30rem;
          margin-top: 10rem;
          .boxIcon {
            .iconSocial {
              font-size: 2.3rem;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      .SocialMedia {
        margin-top: -4rem;
        height: 25rem;
        span {
          width: 5rem;
          font-size: 1.7rem;
          left: 50%;
          margin-left: -2.5rem;
          top: 20%;
        }
        .iconsLinksContainer {
          width: 30rem;
          height: 30rem;
          margin-top: 10rem;
          .boxIcon {
            .iconSocial {
              font-size: 2.3rem;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1200px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100%;
    height: auto;
    background-image: linear-gradient(to bottom, #181b1e, #213878, black);
    overflow: hidden;

    nav {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
    }
    .circleEffect {
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90rem;
      height: 90rem;
      border-radius: 50%;
      border: #a18cd1 solid 3px;
      z-index: 60;
      opacity: 0.2;
      transition: 2s ease all;

      .filledCircle {
        position: fixed;
        width: 50rem;
        height: 50rem;
        border-radius: 50%;
        /* background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%); */
        background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
        background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
        /* background-image: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%); */
        z-index: 90;
        opacity: 0.4;
      }
    }
    .topRight {
      top: -40rem;
      right: -40rem;
      transition: 1s ease all;
    }
    .topMiddle {
      top: -40rem;
      right: 10rem;
      transition: 1s ease all;
    }
    .topLeft {
      top: -40rem;
      right: 70rem;
      transition: 1s ease all;
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      .sec1 {
        margin-top: 7rem;
        width: 100vw;
        height: auto;
        z-index: 98;
      }

      .sec2 {
        width: 100vw;
        margin-top: 3rem;
        padding-bottom: 5rem;
        z-index: 98;
      }

      .sec3 {
        margin-bottom: 0;
      }

      .SocialMedia {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 98;
        overflow: hidden;
        height: 30rem;
        span {
          width: 7rem;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          left: 50%;
          margin-left: -3.5rem;
          top: 40%;
          color: #8dabfb;
          font-size: 1.7rem;
          font-weight: 300;
        }
        .iconsLinksContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #244191;
          width: 40rem;
          height: 40rem;
          border-radius: 50%;
          margin-top: 22rem;
          .boxIcon {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            width: 6rem;
            height: 6rem;
            transition: 0.5s;
            background: transparent;
            margin: 1rem;
            margin-bottom: 10rem;
            cursor: pointer;
            -webkit-box-reflect: below 5px
              linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));

            &:hover {
              transition: 0.7s;
              transform: scale(1.3);
              border: #244191 3px solid;
              box-shadow: rgba(45, 48, 237, 0.12) 0px 8px 12px 0px,
                rgba(71, 162, 201, 0.32) 0px 2px 16px 0px;
            }
            .iconSocial {
              font-size: 3rem;
              margin: 8rem 1rem;
              color: #8dabfb;

              &:hover {
              }
            }
          }
        }
      }
    }
  }
`;
export default Home;
