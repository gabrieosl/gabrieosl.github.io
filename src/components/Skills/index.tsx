import React from 'react';

import { Container, SkillCollection, Skill } from './styles';

const CallToAction: React.FC = () => {
  return (
    <Container id="skills">
      <h5>Main Stack</h5>
      <SkillCollection>
        <Skill>
          <img
            src="https://cdn.svgporn.com/logos/nodejs-icon.svg"
            alt="nodejs"
          />
          <span className="main">NodeJS</span>
        </Skill>
        <Skill>
          <img src="https://cdn.svgporn.com/logos/react.svg" alt="react" />
          <span className="main">React</span>
        </Skill>
        <Skill>
          <img
            src="https://cdn.svgporn.com/logos/react.svg"
            alt="react"
            id="native"
          />
          <span className="main">React-native</span>
        </Skill>
      </SkillCollection>
      <h5>Tools and services</h5>
      <SkillCollection>
        <Skill>
          <img
            src="https://cdn.svgporn.com/logos/typescript-icon.svg"
            alt="typescript"
          />
          <span>typescript</span>
        </Skill>

        <Skill>
          <img
            src="https://cdn.svgporn.com/logos/express.svg"
            alt="express"
            className="invert"
          />
          <span>express</span>
        </Skill>
        <Skill>
          <img
            src="https://cdn.svgporn.com/logos/nextjs.svg"
            alt="nextjs"
            className="invert"
          />
          <span>nextjs</span>
        </Skill>
        <Skill>
          <img
            src="https://cdn.svgporn.com/logos/docker-icon.svg"
            alt="docker"
          />
          <span>docker</span>
        </Skill>
        <Skill>
          <img src="https://cdn.svgporn.com/logos/mongodb.svg" alt="mongodb" />
          <span>mongodb</span>
        </Skill>
        <Skill>
          <img
            src="https://cdn.svgporn.com/logos/postgresql.svg"
            alt="postgresql"
          />
          <span>postgres</span>
        </Skill>

        <Skill>
          <img src="https://cdn.svgporn.com/logos/redux.svg" alt="redux" />
          <span>redux</span>
        </Skill>
        <Skill>
          <img src="https://cdn.svgporn.com/logos/redux-saga.svg" alt="saga" />
          <span>saga</span>
        </Skill>
        <Skill>
          <img
            src="https://cdn.svgporn.com/logos/material-ui.svg"
            alt="material"
          />
          <span>material</span>
        </Skill>
        <Skill>
          <img src="https://cdn.svgporn.com/logos/aws.svg" alt="aws" />
          <span>aws</span>
        </Skill>
        <Skill>
          <img
            src="https://cdn.svgporn.com/logos/firebase.svg"
            alt="firebase"
          />
          <span>firebase</span>
        </Skill>
      </SkillCollection>
    </Container>
  );
};

export default CallToAction;
