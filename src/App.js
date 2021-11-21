import React from 'react';
import './index.css';
import tw from "twin.macro";
import styled from "styled-components";
import HomePage from './pages/home/index'

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `};
`;

function App() {
  return (
    <AppContainer>
    {/*react pages/router sits here */} 
      <HomePage />
  </AppContainer>
  );
}

export default App;
