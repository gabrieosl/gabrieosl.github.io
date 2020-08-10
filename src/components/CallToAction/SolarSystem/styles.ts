import styled from 'styled-components';

export const Container = styled.ul`
  position: relative;
  flex: 1;
  height: 640px;
  width: 640px;
  align-self: center;
  list-style: none;
  margin-left: -40%;
  -webkit-transition: all 0.09s ease-in;
  -moz-transition: all 0.09s ease-in;
  -o-transition: all 0.09s ease-in;
  transition: all 0.09s ease-in;
  overflow: hidden;
  li {
    text-indent: -9999px;
    display: block;
    position: absolute;
    border: 2px solid #394057;
    /*    opacity: 0.7;*/
  }
  li span {
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  li.active {
    border-color: #aa4200;
  }
  li.active.sun,
  li.active span {
    -webkit-transform: scale(1.3);
    -moz-transform: scale(1.3);
    -o-transform: scale(1.3);
    transform: scale(1.3);
  }
  li.active.sun span,
  li.active.earth .moon {
    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
  li.sun {
    width: 40px;
    height: 40px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background: #fc3;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0.22, rgb(204, 153, 0)),
      color-stop(1, rgb(255, 219, 112))
    );
    background-image: -moz-linear-gradient(
      center bottom,
      rgb(204, 153, 0) 22%,
      rgb(255, 219, 112) 100%
    );
    top: 302px;
    left: 462px;
    border: none;
    -webkit-box-shadow: 0 0 50px #c90;
    -moz-box-shadow: 0 0 50px #c90;
    box-shadow: 0 0 50px #c90;
    z-index: 100;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }
  li.sun span {
    width: 60px;
    height: 60px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
  }
  li.mercury {
    width: 100px;
    height: 100px;
    -webkit-border-radius: 52px;
    -moz-border-radius: 52px;
    border-radius: 52px;
    top: 270px;
    left: 430px;
    z-index: 99;
  }
  li.mercury span {
    background: #b6bac5;
    top: 10px;
    left: 10px;
  }
  li.venus {
    width: 160px;
    height: 160px;
    -webkit-border-radius: 82px;
    -moz-border-radius: 82px;
    border-radius: 82px;
    top: 240px;
    left: 400px;
    z-index: 98;
  }
  li.venus span {
    background: #bf8639;
    top: 118px;
    left: 5px;
  }
  li.earth {
    width: 220px;
    height: 220px;
    -webkit-border-radius: 112px;
    -moz-border-radius: 112px;
    border-radius: 112px;
    top: 210px;
    left: 370px;
    z-index: 97;
  }
  li.earth span {
    background: #06c;
    top: 56px;
    left: 5px;
  }
  li.earth span.moon {
    width: 4px;
    height: 4px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    background: #ccc;
    top: 12px;
    left: 12px;
  }
  li.mars {
    width: 280px;
    height: 280px;
    -webkit-border-radius: 142px;
    -moz-border-radius: 142px;
    border-radius: 142px;
    top: 180px;
    left: 340px;
    z-index: 96;
  }
  li.mars span {
    background: #aa4200;
    top: 0px;
    left: 175px;
  }
  li.asteroids_meteorids {
    top: 155px;
    left: 315px;
    z-index: 1;
    background: url(http://neography.com/experiment/circles/solarsystem/asteroids_meteorids.png)
      no-repeat 0 0;
    width: 330px;
    height: 330px;
    -webkit-border-radius: 165px;
    -moz-border-radius: 165px;
    border-radius: 165px;
    border: none;
  }
  li.jupiter {
    width: 340px;
    height: 340px;
    -webkit-border-radius: 172px;
    -moz-border-radius: 172px;
    border-radius: 172px;
    top: 150px;
    left: 310px;
    z-index: 95;
  }
  li.jupiter span {
    background: #e0ae6f;
    top: 67px;
    left: 24px;
  }
  li.saturn {
    width: 400px;
    height: 400px;
    -webkit-border-radius: 202px;
    -moz-border-radius: 202px;
    border-radius: 202px;
    top: 120px;
    left: 280px;
    z-index: 94;
  }
  li.saturn span {
    background: #dfd3a9;
    top: 24px;
    left: 300px;
  }
  li.saturn span.ring {
    width: 12px;
    height: 12px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    background: none;
    border: 2px solid #5a4e34;
    left: -3px;
    top: -3px;
    -webkit-transform: skewY(50deg);
    -moz-transform: skewY(50deg);
    -o-transform: skewY(50deg);
    transform: skewY(50deg);
  }
  li.uranus {
    width: 460px;
    height: 460px;
    -webkit-border-radius: 232px;
    -moz-border-radius: 232px;
    border-radius: 232px;
    top: 90px;
    left: 250px;
    z-index: 93;
  }
  li.uranus span {
    background: #82b3d1;
    top: 7px;
    left: 300px;
  }
  li.neptune {
    width: 520px;
    height: 520px;
    -webkit-border-radius: 262px;
    -moz-border-radius: 262px;
    border-radius: 262px;
    top: 60px;
    left: 220px;
    z-index: 92;
  }
  li.neptune span {
    background: #77c2ec;
    top: 0px;
    left: 200px;
  }
  li.pluto {
    width: 580px;
    height: 580px;
    -webkit-border-radius: 292px;
    -moz-border-radius: 292px;
    border-radius: 292px;
    top: 30px;
    left: 190px;
    z-index: 91;
  }
  li.pluto span {
    background: #7c6a5c;
    top: 79px;
    left: 79px;
  }

  ul#descriptions {
    position: absolute;
    top: 150px;
    right: 100px;
    list-style: none;
  }
  ul#descriptions h2 {
    cursor: pointer;
    color: #386077;
    -webkit-transition: all 0.15s ease-in;
    -moz-transition: all 0.15s ease-in;
    -o-transition: all 0.15s ease-in;
    transition: all 0.15s ease-in;
    font-size: 20px;
    position: relative;
    z-index: 101;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    margin-bottom: -15px;
  }
  ul#descriptions h2:hover {
    color: #aa4200;
    -webkit-transform: scale(1.08);
    -moz-transform: scale(1.08);
    -o-transform: scale(1.08);
    transform: scale(1.08);
  }
  ul#descriptions li p {
    position: absolute;
    left: -250px;
    top: 0;
    width: 200px;
    display: inline;
    opacity: 0;
    visibility: hidden;
    font-size: 13px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
    background: #0f132c;
    padding: 30px;
    color: #767892;
    line-height: 1.7;
    z-index: 100;
    border: 1px solid #1c203c;
  }
  ul#descriptions h2:hover + p {
    visibility: visible;
    opacity: 0.9;
    left: -280px;
  }

  /* CSS3 Animations */
  li {
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -webkit-animation-name: orbit;

    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -moz-animation-name: orbit;
  }
  li.earth span {
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -webkit-animation-name: moon;

    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -moz-animation-name: moon;
  }
  li.mercury {
    -webkit-animation-duration: 5s;
    -moz-animation-duration: 5s;
  }
  li.venus {
    -webkit-animation-duration: 8s;
    -moz-animation-duration: 8s;
  }
  li.earth {
    -webkit-animation-duration: 12s;
    -moz-animation-duration: 12s;
  }
  li.earth span {
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
  }
  li.mars {
    -webkit-animation-duration: 20s;
    -moz-animation-duration: 20s;
  }
  li.asteroids_meteorids {
    -webkit-animation-duration: 50s;
    -moz-animation-duration: 50s;
  }
  li.jupiter {
    -webkit-animation-duration: 30s;
    -moz-animation-duration: 30s;
  }
  li.saturn {
    -webkit-animation-duration: 60s;
    -moz-animation-duration: 60s;
  }
  li.uranus {
    -webkit-animation-duration: 70s;
    -moz-animation-duration: 70s;
  }
  li.neptune {
    -webkit-animation-duration: 100s;
    -moz-animation-duration: 100s;
  }
  li.pluto {
    -webkit-animation-duration: 120s;
    -moz-animation-duration: 120s;
  }

  @-webkit-keyframes orbit {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes moon {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @-moz-keyframes orbit {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @-moz-keyframes moon {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }

  /*hover li {-webkit-animation-play-state: paused;} */
`;
