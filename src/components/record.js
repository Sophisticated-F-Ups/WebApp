import React, { useState, useEffect } from 'react'
import Dropzone from 'react-dropzone-uploader';
import axios from 'axios';

const MyUploader = () => {
  const [file, setFile] = useState(null)

  const getUploadParams = ({ file, meta }) => {
    const body = new FormData();
    body.append('fileField', file);
    // console.log(body);
    return { url: 'https://httpbin.org/post', body };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file, status }) => {
    // setNote(transcript);
    // console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    setFile(files[0].meta.name);
    console.log(file);
    postData(files[0].meta);
    // console.log(files[0].meta.name);
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  const postData = (file) => {
    // const request = axios
    //   .post('https://lectureleverager.herokuapp.com/upload', file)
    //   .then((response) => response.data);

    axios.post('https://lectureleverager.herokuapp.com/upload',
    file, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function () {
          console.log('SUCCESS!!');
        })
        .catch(function () {
          console.log('FAILURE!!');
        });
    // console.log(request);
  }
  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*"
    />
  );
};

export default MyUploader;
