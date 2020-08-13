import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { FiGithub, GoBrowser } from 'react-icons/all';

import example from './example.png';
import Button from '../Button';

import { Container, Content, Card } from './styles';

interface ProjectData {
  id: string;
  description: string;
  name: string;
  html_url: string;
  homepage: string;
}

const Projects: React.FC = () => {
  const { t } = useTranslation('common');
  const contentRef = useRef<HTMLDivElement>(null);

  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(10);

  useEffect(() => {
    async function getProjects() {
      const response = await axios.get(
        'https://api.github.com/users/gabrieosl/repos',
      );
      if (response.status === 200) {
        setProjects(response.data);
      }
    }
    getProjects();
  }, []);

  return (
    <Container id="portfolio">
      <h3>{t('portfolio')}</h3>
      <Content id="portfolio-content" ref={contentRef}>
        {projects.map((project, index) => (
          <Card
            key={project.id}
            position={index}
            main={currentProjectIndex}
            onClick={() => setCurrentProjectIndex(index)}
          >
            <h5>{project.name}</h5>
            <span className="description">{project.description}</span>
            <img src={example} alt="project" className="example" />
            <h6>{t('tecnologies')}</h6>
            <div className="technologies">
              <img
                src="https://cdn.svgporn.com/logos/typescript-icon.svg"
                alt="typescript"
              />
              <img
                src="https://cdn.svgporn.com/logos/express.svg"
                alt="express"
                className="invert"
              />
              <img
                src="https://cdn.svgporn.com/logos/nodejs-icon.svg"
                alt="nodejs"
              />
              <img
                src="https://cdn.svgporn.com/logos/mongodb.svg"
                alt="mongodb"
                className="invert"
              />
              <img
                src="https://cdn.svgporn.com/logos/postgresql.svg"
                alt="postgresql"
              />
            </div>
            <div className="buttons">
              <Button
                variant="filled"
                color="text"
                height="34px"
                onClick={() => window.open(project.html_url, '_blank')}
              >
                <FiGithub />
                &nbsp;GitHub
              </Button>
              <Button
                variant="outlined"
                color="text"
                height="34px"
                onClick={() => window.open(project.homepage, '_blank')}
              >
                <GoBrowser />
                &nbsp;Live version
              </Button>
            </div>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export default Projects;
