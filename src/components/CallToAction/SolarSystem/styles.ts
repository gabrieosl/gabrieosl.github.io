import styled, { keyframes } from 'styled-components';

const orbit = keyframes`
  /* from {
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }
  to {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  } */
`;
const moon = keyframes`
  /* from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  } */
`;

export const Container = styled.div`
  flex: 1;
  height: 100%;
  z-index: 101;

  display: flex;
  align-items: center;

  @media all and (max-width: 768px) {
    height: 50%;
    width: 100%;
  }
`;

export const Galaxy = styled.ul`
  position: relative;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 101;

  list-style: none;
  transition: all 0.09s ease-in;

  li {
    margin: 10px;
    text-indent: -9999px;
    position: absolute;
    border: 1px solid ${props => `${props.theme.text}16`};
    border-radius: 50%;
    background: ${props => props.theme.background};
    transition: all 0.2s;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);

    &:hover {
      border: 1px solid ${props => `${props.theme.text}64`};
    }
    span {
      display: block;
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    &.sun {
      width: 10%;
      padding-top: 10%;

      background: #fc3;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      border: none;
      box-shadow: 0 0 50px #c90;
      z-index: 100;
      transition: all 0.2s ease-in;
    }

    &.mercury {
      width: 20%;
      padding-top: 20%;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      z-index: 99;

      span {
        background: #b6bac5;
        top: 50%;
        left: 0%;
        transform: translateX(-50%);
      }
    }

    &.venus {
      width: 30%;
      padding-top: 30%;
      top: 50%;
      left: 50%;
      z-index: 98;

      span {
        background: #bf8639;
        top: 50%;
        left: 0%;
        transform: translateX(-50%);
      }
    }

    &.earth {
      width: 40%;
      padding-top: 40%;
      top: 50%;
      left: 50%;
      z-index: 97;

      span {
        background: #06c;
        top: 50%;
        left: 0%;
        transform: translateX(-50%);
        &.moon {
          width: 4px;
          height: 4px;
          background: #ccc;
          top: 12px;
          left: 12px;
        }
      }
    }
    &.mars {
      width: 50%;
      padding-top: 50%;
      top: 50%;
      left: 50%;
      z-index: 96;

      span {
        background: #aa4200;
        top: 50%;
        left: 0%;
        transform: translateX(-50%);
      }
    }

    &.asteroids_meteorids {
      width: 58%;
      padding-top: 58%;
      top: 50%;
      left: 50%;
      z-index: 96;
      z-index: 1;
      background: url(http://neography.com/experiment/circles/solarsystem/asteroids_meteorids.png)
        center no-repeat;
      background-size: 100%;
      border: none;
    }

    &.jupiter {
      width: 60%;
      padding-top: 60%;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      z-index: 95;
      span {
        background: #e0ae6f;
        top: 50%;
        left: 0%;
        transform: translateX(-50%);
      }
    }

    &.saturn {
      width: 75%;
      padding-top: 75%;
      top: 50%;
      left: 50%;
      z-index: 94;

      span {
        background: #dfd3a9;
        top: 50%;
        left: 0%;
        transform: translateX(-50%);

        &.ring {
          position: absolute;
          width: 14px;
          height: 2px;
          background: #5a4e34;
          border: none;
          left: 0;
          top: 50%;
          transform: translateX(-2px) translateY(-50%) rotate(45deg);
        }
      }
    }

    &.uranus {
      width: 100%;
      padding-top: 100%;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      z-index: 93;
      span {
        background: #82b3d1;
        top: 50%;
        left: 0%;
        transform: translateX(-50%);
      }
    }

    &.neptune {
      width: 150%;
      padding-top: 150%;
      top: 50%;
      left: 50%;
      z-index: 92;

      span {
        background: #77c2ec;
        top: 50%;
        left: 0%;
        transform: translateX(-50%);
      }
    }

    &.pluto {
      width: 200%;
      padding-top: 200%;
      top: 50%;
      left: 50%;
      z-index: 91;

      span {
        background: #7c6a5c;
        top: 50%;
        left: 0%;
        transform: translateX(-50%);
      }
    }
  }

  /* CSS3 Animations */
  li {
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: ${orbit};
  }
  li.earth span {
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: ${moon};
  }
  li.mercury {
    animation-duration: 5s;
  }
  li.venus {
    animation-duration: 8s;
  }
  li.earth {
    animation-duration: 12s;
  }
  li.earth span {
    animation-duration: 2s;
  }
  li.mars {
    animation-duration: 20s;
  }
  li.asteroids_meteorids {
    animation-duration: 50s;
  }
  li.jupiter {
    animation-duration: 30s;
  }
  li.saturn {
    animation-duration: 60s;
  }
  li.uranus {
    animation-duration: 70s;
  }
  li.neptune {
    animation-duration: 100s;
  }
  li.pluto {
    animation-duration: 120s;
  }
`;
