import React, { useEffect ,useState, useCallback } from 'react'
import { useDropzone } from "react-dropzone";

import './Dropzone.css'

const Dropzone = props => {

  const [selectedFiles, setSelectedFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    const files = Array.from(acceptedFiles);
    setSelectedFiles(files);
    props.setFiles(props.myName, files);

  }, []);

  useEffect(()=>{
    setSelectedFiles([])
  },[props.control])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ ...props.extraValidation, onDrop })

  const classes = `dropzone ${props.errorClass}`;

  const fileTypes = props.extraValidation.hasOwnProperty('accept') ? props.extraValidation.accept["application/file"].join(", ") : false;

  return (
    <div className='dropzone-container'>
      <label className='dropzone-label'>{props.label}</label>
      <div className={classes} {...getRootProps()}>
        <input {...getInputProps()} {...props.register} />

        {
        selectedFiles.length === 0 ?
          <><p className='dropzone-innertext'>Drag 'n' drop your file(s) here, or click to select</p> {fileTypes && <p className='dropzone-innertext'>Accepts ({fileTypes})</p>}</> :
          <p className='dropzone-innertext'>You have selected {selectedFiles.length} file(s)</p>
        }
      </div>
      {props.errors && <span className='error'>must drop at least one file</span>}
    </div>
  )
}

export default Dropzone