import { styled } from "styled-components";

const MenuContainers = ({ moveMenuIcon, setMoveMenuIcon }) => {
  return (
    <Wrapper>
      <div className="container">
        <div
          className="containerCube"
          style={{ marginRight: `${moveMenuIcon ? "30rem" : "-50rem"}` }}
          onClick={() => setMoveMenuIcon(!moveMenuIcon)}
        >
          <div className="cube">
            <div className="s1">
              <p>Close</p>
            </div>
            <div className="s2">
              <p>Close</p>
            </div>
            <div className="s3">
              <p>Close</p>
            </div>
            <div className="s4">
              <p>Close</p>
            </div>
            <div className="s5">
              <p>Close</p>
            </div>
            <div className="s6">
              <p>Close</p>
            </div>
          </div>
        </div>

        <ul>
          <li
            className="li1"
            style={{ zIndex: "94", right: `${moveMenuIcon ? "0" : "-40rem"}` }}
          >
            <p>Home</p>
          </li>

          <li
            className="li2"
            style={{ zIndex: "93", right: `${moveMenuIcon ? "0" : "-40rem"}` }}
          >
            <p>About</p>
          </li>

          <li
            className="li3"
            style={{ zIndex: "92", right: `${moveMenuIcon ? "0" : "-40rem"}` }}
          >
            <p>Project</p>
          </li>

          <li
            className="li4"
            style={{ zIndex: "91", right: `${moveMenuIcon ? "0" : "-40rem"}` }}
          >
            <p>Contact</p>
          </li>
          <li
            className="li5"
            style={{ zIndex: "90", right: `${moveMenuIcon ? "0" : "-40rem"}` }}
          >
            <p>Social Media</p>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 98;
  transition: 0.5s;
  overflow-x: hidden;
  margin-top: 3rem;

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: left;

    .containerCube {
      perspective: 1000px;
      perspective-origin: 100% 100%;
      z-index: 95;
      width: 8rem;
      margin-right: 30rem;
      transition: 1.2s;
      cursor: pointer;

      .cube {
        position: relative;
        width: 110px;
        height: 110px;
        transform-style: preserve-3d;
        animation: rotate 19s linear infinite;
        margin-right: 31rem;
        top: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        div {
          position: absolute;
          width: 70px;
          height: 70px;
          opacity: 0.9;
          background: linear-gradient(to right, #208fb1, #156178);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          p {
            text-transform: uppercase;
          }
        }
        & > .s1 {
          transform: translateZ(35px);
        }
        .s2 {
          transform: rotateY(90deg) translateZ(35px);
        }

        .s3 {
          transform: rotateY(180deg) translateZ(35px);
        }

        .s4 {
          transform: rotateX(90deg) translateZ(35px);
        }

        .s5 {
          transform: rotateY(-90deg) translateZ(35px);
        }

        .s6 {
          transform: rotateX(-90deg) translateZ(35px) rotate(180deg);
        }
        &:hover > div {
          background: linear-gradient(to right, #1a7794, #0d404f);
        }
      }
    }

    @keyframes rotate {
      100% {
        transform: rotateX(0deg) rotateY(360deg) rotateZ(360deg);
      }
    }

    ul {
      margin-right: 6rem;
      position: relative;
      transform: skewY(-15deg);
      li {
        position: relative;
        list-style: none;
        width: 30rem;
        height: 6rem;
        padding: 1rem;
        background-color: #156178;
        visibility: 0.5;
        transition: 0.5s;
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover {
          background-color: #11576c;
          transform: translateX(-50px);
        }
        &::before {
          color: #999;
          display: flex;
          justify-content: center;
          align-items: center;
          content: " ";
          position: absolute;
          top: 0;
          left: -40px;
          width: 40px;
          height: 100%;
          background-color: #135c72;
          outline: 1px solid white;
          visibility: 0.5;
          transform-origin: right;
          transform: skewY(45deg);
          transition: 0.5s;
        }
        &:hover::before {
          background-color: #11576c;
        }

        &::after {
          content: "";
          position: absolute;
          top: -40px;
          left: 0px;
          width: 100%;
          height: 40px;
          background-color: #1c6983;
          outline: 1px solid white;
          visibility: 0.5;
          transform-origin: bottom;
          transform: skewX(45deg);
          transition: 0.5s;
        }

        &:hover::after {
          background-color: #11576c;
        }
        p {
          color: white;
          text-decoration: none;
          display: block;
          text-transform: uppercase;
          letter-spacing: 0.5em;
          transition: 0.5s;
        }

        &:last-child::after {
          box-shadow: -120px 140px 20px rgba(0, 0, 0, 0.25);
        }
      }
      .li1 {
        transition: 0.3s;
      }
      .li2 {
        transition: 0.5s;
      }
      .li3 {
        transition: 0.7s;
      }
      .li4 {
        transition: 0.9s;
      }
      .li5 {
        transition: 1s;
      }
    }
  }
`;
export default MenuContainers;
