import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone-uploader';
import axios from 'axios';
import { Button, ChakraProvider } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Switch } from '@chakra-ui/react';

const MyUploader = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState(null);

  const getUploadParams = ({ file, meta }) => {
    const body = new FormData();
    body.append('file', file);
    postData(body);
    return { url: 'https://httpbin.org/post', body };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file, status }) => {

  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {

    allFiles.forEach((f) => f.remove());
  };

  const postData = (formData) => {
    // const request = axios
    //   .post('https://lectureleverager.herokuapp.com/upload', file)
    //   .then((response) => response.data);

    axios
      .post('https://lectureleverager.herokuapp.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(function (response) {
        console.log(response.data);
        setFile(response.data.text);
        setSummary(response.data.summerize);
      })
      .catch(function () {
        console.log('FAILURE!!');
      });

  };
  return (
    <div className="firstContainer">
      <div className="box">
        <Dropzone
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          accept="image/*,audio/*,video/*"
        />

      </div>
      <div className="box">
      <Heading as="h2" size="lg" color="gray.500">
          Transcript
        </Heading>
        {file}
      <Heading as="h2" size="lg" color="gray.500">
          Summary
        </Heading>
        {summary}
      </div>
    </div>
  );
};

export default MyUploader;
