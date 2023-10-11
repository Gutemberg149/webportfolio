import React, { useEffect, useState, forwardRef, useRef } from "react";
import styled from "styled-components";

const Nav = ({
  handleSrollintoviewHome,
  handleSrollintoviewAbout,
  handleSrollintoviewProjects,
  handleSrollintoviewContato,
}) => {
  const [blur, setBlur] = useState(false);

  //this snipt is to set the nav blur
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setBlur(true);
      } else {
        setBlur(false);
      }
    });
  }, []);

  return (
    <Wrapper>
      <nav>
        <div className={blur ? "container_blur container" : "container"}>
          <ul>
            <li onClick={() => handleSrollintoviewHome()}>Home</li>
            <li onClick={() => handleSrollintoviewAbout()}>Sobre mim </li>
            <li onClick={() => handleSrollintoviewProjects()}>Projetos</li>
            <li onClick={() => handleSrollintoviewContato()}>Contato</li>
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  z-index: 98;
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;

    .container {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
      height: 5rem;

      ul {
        display: flex;
        margin-right: 6rem;
        li {
          list-style: none;
          margin-left: 3rem;
          font-size: 1.3rem;
          font-weight: 700;
          color: #dfdfdf;
          width: 7.5rem;
          height: 2.7rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 2rem;
          text-shadow: -8px 1px 20px rgba(139, 197, 248, 1);

          cursor: pointer;
          &:hover {
            background: #efefefbc;
            color: #03233b;
            text-shadow: -8px 1px 20px #efefef;
          }
        }
      }
    }
    .container_blur {
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      background-image: #3f575b83;
    }
  }
  @media screen and (max-width: 552px) {
    nav {
      .container {
        height: 3rem;
        justify-content: center;
        ul {
          margin-right: 0;
          li {
            margin: 0 0.8rem;
            font-size: 1rem;
            font-weight: 700;
            width: 5.5rem;
            height: 1.8rem;
          }
        }
      }
    }
  }
`;
export default forwardRef(Nav);
