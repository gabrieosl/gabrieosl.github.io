import React from 'react';

import { Container, Galaxy } from './styles';
import './test.css';

const SolarSystem: React.FC = () => {
  return (
    <Container>
      <Galaxy>
        {/* <li> makes an orbit circle. <span> makes the planet circle */}
        <li className="sun">
          <span>Sun</span>
        </li>
        <li className="mercury">
          <span>Mercury</span>
        </li>
        <li className="venus">
          <span>Venus</span>
        </li>
        <li className="earth">
          <span>
            Earth
            <span className="moon">Moon</span>
          </span>
        </li>
        <li className="mars">
          <span>Mars</span>
        </li>
        <li className="asteroids_meteorids">
          <span>Asteroids &amp; Meteorids</span>
        </li>
        <li className="jupiter">
          <span>Jupiter</span>
        </li>
        <li className="saturn">
          <span>
            Saturn &amp;
            <span className="ring">Ring</span>
          </span>
        </li>
        <li className="uranus">
          <span>Uranus</span>
        </li>
        <li className="neptune">
          <span>Neptune</span>
        </li>
        <li className="pluto">
          <span>Pluto</span>
        </li>
      </Galaxy>
    </Container>
  );
};

export default SolarSystem;
