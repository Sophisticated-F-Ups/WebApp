import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/layout';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';

function Record() {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log('continue..');
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log('Stopped Mic on Click');
      };
    }
    mic.onstart = () => {
      console.log('Mics on');
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      console.log(transcript);
      setNote(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note]);
    setNote('');
  };

  return (
    <div className="container">
      <div className="box">
        <Heading as="h2" size="lg" color="gray.500">
          Live Audio
        </Heading>
        {isListening ? (
          <span> Recording 🎙️</span>
        ) : (
          <span>Not Recording 🛑🎙️</span>
        )}
        <Button onClick={handleSaveNote} colorScheme="blue" disabled={!note}>
          Save Note
        </Button>
        <Button
          onClick={() => setIsListening((prevState) => !prevState)}
          colorScheme="blue"
        >
          Start/Stop
        </Button>
        <p>{note}</p>
      </div>
      <div className="box">
        <Heading as="h2" size="lg" color="gray.500">
          Transcribed Text
        </Heading>
        {savedNotes.map((n) => (
          <p key={n}>{n}</p>
        ))}
      </div>
    </div>
  );
}

export default Record;
