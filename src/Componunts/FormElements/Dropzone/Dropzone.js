import React, { useEffect, useState, useCallback } from 'react'
import { useDropzone } from "react-dropzone";

import './Dropzone.css'

const Dropzone = props => {

  const [selectedFiles, setSelectedFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    const files = Array.from(acceptedFiles);
    setSelectedFiles(files);
    props.setFiles(props.myName, files);

  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <>
      <label className='dropzone-label'>{props.label}</label>
      <div className='drop-zone' {...getRootProps()}>
        <input {...getInputProps()} {...props.register} />
        {
          /*isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>*/
        }
        {selectedFiles.length === 0 ?
          <p>Drag 'n' drop some files here, or click to select files</p> : <p>You have selected {selectedFiles.length} file(s)</p>}
      </div>
      {props.errors && <span className='error'>must drop at least one file</span>}
    </>
  )
}

export default Dropzone