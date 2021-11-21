import React from 'react';
import './index.css';
import tw from "twin.macro";
import styled from "styled-components";

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
       
  </AppContainer>
  );
}

export default App;
