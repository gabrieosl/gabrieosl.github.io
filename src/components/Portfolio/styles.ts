import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100% - 60px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;
  background: ${props => props.theme.background};
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Project = styled.div`
  flex-shrink: 0;
  width: 8rem;
  height: 8rem;

  background: ${props => props.theme.primary};
  border-radius: 0.2rem;
  margin: 0.5rem;
`;
