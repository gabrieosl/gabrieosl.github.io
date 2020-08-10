import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100% - 60px);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  padding: 2rem;
  background: cyan;
  /* background: ${props => props.theme.background}; */
`;

export const Project = styled.div`
  flex: 1;
  width: 4rem;
  height: 8rem;

  background: red;
  border-radius: 0.2rem;
  margin: 0.5rem;
`;
