import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Content, Project } from './styles';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);

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
      <h3>Portfolio</h3>
      <Content>
        {projects.map(project => (
          <Project key={project.id}>
            <h4>{project.name}</h4>
            <span>{project.description}</span>
          </Project>
        ))}
      </Content>
    </Container>
  );
};

export default Projects;
