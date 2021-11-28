import * as React from 'react';
import { useState } from 'react';
// 1. import `ChakraProvider` component
import { Button, Heading, ChakraProvider } from '@chakra-ui/react';
import Toggle from './components/Toggle';
import AudioPanel from './AudioPanel';
import TextPanel from './TextPanel';
import './App.css';
import TranscribedText from './components/TranscribedText';
import theme from './theme.js';
import { Switch } from "@chakra-ui/react"
import Record from './components/liveRecord';
import TitleHeader from './components/TitleHeader';

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider theme={theme}>

      <TitleHeader />
      <div className="container">

        {/* <img src={car} alt="this is car image" /> */}

        {/* <Toggle /> */}
        {/* <ReactAudioPlayer /> */}

          <AudioPanel />

        {/* <div className="box">
          <TextPanel />
        </div> */}
        {/* <TranscribedText /> */}
      </div>
      <Record/>
    </ChakraProvider>
  );
}



export default App;
