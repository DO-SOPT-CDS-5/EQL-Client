import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return <Title1> Home </Title1>;
};

export default Home;

const Title1 = styled.div`
  height: 151.7rem;
  margin: 2rem;
  font-size: ${({ theme }) => theme.fonts.body2};
`;
