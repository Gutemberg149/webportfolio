import { styled } from "styled-components";
import portrate2 from "../components/images/intro/portrate2.png";
import codeBacg02 from "../components/images/intro/codeBacg20.jpeg";
import ParticleBackground from "../components/Particles";
const Intro = () => {
  return (
    <Wrapper>
      {/* <ParticleBackground /> */}
      <div className="inner">
        <div className="lineAround">
          <div className="dropContainer">
            <img className="img01" src={codeBacg02} alt="" />
            <img className="img02" src={portrate2} alt="" />
          </div>
        </div>

        <div className="container">
          <h1>Desenvolvedor Front-End </h1>
          <p className="p1">
            Transformo conceitos de design em experiências interativas na web.
          </p>
          <p className="p2">
            Criando interfaces intuitivas, responsivas e atraentes.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;

  .inner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 10;
    height: auto;

    .lineAround {
      border-top-right-radius: 7rem;
      border-top-left-radius: 16rem;
      border-bottom-left-radius: 16rem;
      border-bottom-right-radius: 7rem;
      background: linear-gradient(#38c8fc, rgba(90, 34, 139), #f8fc05)
        border-box;
      mask-composite: exclude;
      padding: 0.1rem;
      margin-left: 8rem;
      .dropContainer {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 34rem;
        height: 50.5rem;
        border-top-right-radius: 7rem;
        border-top-left-radius: 16rem;
        border-bottom-left-radius: 16rem;
        border-bottom-right-radius: 7rem;
        overflow: hidden;
        /* border: 4px solid white; */
        .img01 {
          border-top-right-radius: 5rem;
          border-top-left-radius: 5rem;
          position: absolute;
          top: -22rem;
          width: 58rem;
          height: 73rem;
          margin-left: -3rem;
        }
        .img02 {
          z-index: 95;
          width: 34rem;
        }
      }
    }

    .container {
      position: relative;
      width: 42rem;
      height: 50rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 90;
      margin-right: 8rem;
      border-top: 2px solid transparent;
      border-bottom: 2px solid transparent;
      border-image: linear-gradient(
        0.25turn,
        #38c8fc,
        rgba(90, 34, 139),
        #f8fc05
      );
      border-image-slice: 6;
      h1 {
        position: relative;
        font-size: 5.5rem;
        font-weight: 500;
        color: #dddddd;
        z-index: 4;
        font-family: sans-serif;
        margin-bottom: 3rem;
        text-shadow: rgba(12, 54, 163, 0.59) 0px 0px 15px;
      }

      .p1 {
        position: relative;
        font-size: 3.5rem;
        color: #e0e1e1;
        line-height: 4rem;
        z-index: 4;
        font-weight: 400;
        font-family: "Fredoka", sans-serif;
        margin-bottom: 3rem;
      }
      .p2 {
        position: relative;
        font-size: 2.5rem;
        color: #e0e1e1;
        line-height: rem;
        z-index: 4;
        font-weight: 400;
        font-family: "Fredoka", sans-serif;
      }
    }
  }
  @media screen and (max-width: 552px) {
    .inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .lineAround {
        margin-left: 0;

        .dropContainer {
          width: 20rem;
          height: 31rem;
          position: relative;
          .img01 {
            position: absolute;
            top: -22rem;
            width: 38rem;
            height: 53rem;
            margin-left: -3rem;
          }
          .img02 {
            width: 20rem;
          }
        }
      }
      .container {
        display: flex;
        width: 32rem;
        height: 30rem;
        margin-top: 5rem;
        margin-right: 0;

        h1 {
          font-size: 2.3rem;
          font-weight: 500;
        }
        .p1 {
          font-size: 1.8rem;
          font-weight: 400;
          line-height: 2rem;
          text-align: center;
        }
        .p2 {
          font-size: 1.6rem;
          font-weight: 400;
          line-height: 2rem;
          text-align: center;
          padding: 0 1rem;
        }
      }
    }
  }
`;
export default Intro;
