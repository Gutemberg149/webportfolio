import React, { useState } from "react";
import { styled } from "styled-components";
import projectsApi from "./ProjectsApi";
import onrunning01 from "../components/images/project/onrunning01.jpeg";

const Projects = () => {
  const [idElemnt, setIdElemnt] = useState("");

  return (
    <Wrapper>
      <div className="h1Box" data-aos="fade-up">
        <h1>Projetos</h1>
      </div>
      <div className="containerProjects">
        {projectsApi.map((project) => {
          return (
            <div>
              <div className="containerProject" data-aos="fade-right">
                <div
                  className="projectDisplay"
                  onMouseEnter={() => setIdElemnt(project.id)}
                  onMouseLeave={() => setIdElemnt("")}
                  style={{
                    backgroundImage: `url(${project.bcgImg})`,
                    backgroundSize: idElemnt === project.id ? "115%" : "100%",
                    // backgroundPosition
                  }}
                >
                  <div
                    className="layOut"
                    style={{
                      opacity: idElemnt === project.id ? "0" : "1",
                    }}
                  ></div>

                  <div
                    className="infoProject"
                    style={{
                      display: idElemnt === project.id ? "none" : "flex",
                    }}
                  >
                    <p className="webName">{project.projectName}</p>
                    <div className="icons">
                      <p>{project.tecIcon1}</p>
                      <p>{project.tecIcon2}</p>
                      <p>{project.tecIcon3}</p>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <p className="inforDescripition">{project.about}</p>
                  <div className="innerGlass">
                    <p>Click aqui para vê o projeto</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 0 3rem;

  .h1Box {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 3rem;
    text-align: center;
    border-bottom: 4px solid transparent;
    border-image: linear-gradient(
      0.25turn,
      #f8fc05,
      rgba(90, 34, 139),
      rgba(1, 1, 122, 0)
    );
    border-image-slice: 1;
    width: 100%;
    padding-bottom: 1rem;
    h1 {
      font-size: 3.5rem;
      font-family: "poppins";
      font-weight: 300;
      color: #d5d4d4;
    }
  }
  .containerProjects {
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;

    .containerProject {
      width: 50rem;
      height: 40rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6rem;
      z-index: 98;
      border: 2px solid transparent;
      border-image: linear-gradient(
        0.25turn,
        #38c8fc,
        rgba(90, 34, 139),
        #f8fc05
      );
      border-image-slice: 6;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      padding: 0.8rem;

      .projectDisplay {
        position: relative;
        width: 100%;
        height: 30rem;
        transition: 0.4s;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        overflow: hidden;
        z-index: 98;
        background-position: center;
        z-index: 98;
        margin-bottom: 1rem;
        overflow: hidden;

        cursor: pointer;
        .layOut::before {
          position: absolute;
          content: "";
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: #0000007d;
        }
        .infoProject {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 30rem;
          height: 10rem;
          position: absolute;
          color: white;
          left: 50%;
          margin-left: -15rem;
          top: 50%;
          margin-top: -5rem;
          .webName {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
          .icons {
            display: flex;
            font-size: 4rem;
          }
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 10rem;
        width: 100%;
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 3px solid transparent;
        border-image: linear-gradient(
          0.25turn,
          rgba(137, 196, 244),
          rgba(90, 34, 139),
          rgba(1, 1, 122, 1)
        );
        border-image-slice: 6;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        z-index: 97;
        /* ----------------------------------------------------------------------------------------------------- */

        .inforDescripition {
          text-align: center;
          width: 95%;
          font-size: 1.3rem;
          font-family: "poppins";
          font-weight: 300;
          color: white;
        }
        .innerGlass {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55%;
          height: 10%;
          margin-bottom: 0.5rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          backdrop-filter: blur(5px);
          padding: 1rem;
          display: flex;
          text-align: start;
          justify-content: center;
          -webkit-backdrop-filter: blur(5px);
          border: 0.5px solid rgba(255, 255, 255, 0.3);
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
            rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
          transition: 0.4s;
          cursor: pointer;

          p {
            color: white;
            font-size: 1.2rem;
            font-family: "poppins";
          }
          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }
  }
  @media screen and (max-width: 552px) {
    margin-top: -1rem;

    .h1Box {
      width: 100%;
      h1 {
        font-size: 2.5rem;
      }
    }
    .containerProjects {
      .containerProject {
        width: 30rem;
        height: 26rem;
        margin-bottom: 2rem;
        .projectDisplay {
          .infoProject {
            width: 100%;
            height: 10rem;
            .webName {
              font-size: 2rem;
            }
            .icons {
              font-size: 3rem;
            }
          }
        }
        .info {
          height: 8rem;

          .inforDescripition {
            width: 99%;
            font-size: 1rem;
          }
          .innerGlass {
            p {
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }
`;
export default Projects;
