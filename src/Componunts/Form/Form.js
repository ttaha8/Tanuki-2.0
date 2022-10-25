import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { useForm } from "react-hook-form";

import Checkbox from '../FormElements/Checkbox/Checkbox';
import Input from '../FormElements/Input/Input';
import Select from '../FormElements/Select/Select';
import Dropzone from '../FormElements/Dropzone/Dropzone';
import Card from '../shared/UIElements/Card/Card';
import Modal from '../shared/UIElements/Modal/Modal';

import './Form.css';

const Form = (props) => {

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  
  const [selectedFiles, setSelectedFiles] = useState();
  const [showModal, setShowModal] = useState(false);


  const onSubmit = data => {
    
    console.log(data);
    
    //confirm sending data
    setShowModal(true);
    
    //reset all fields
    reset()
    setSelectedFiles([])
  }
  
  useEffect(() => {
    reset()
  }, [props])


  const clearModal= ()=> {
    setShowModal(false);
  }

  const addField = (field) => {
    switch (field.type) {
      case "INPUT":
        return <Input 
                  key={field.id} 
                  id={field.id} 
                  label={field.label} 
                  register={register(`${field.name}`)} 
                />

      case "SELECT":
        return <Select 
                  key={field.id} 
                  id={field.id} 
                  label={field.label} 
                  options={field.options} 
                  errors={errors[field.name]} 
                  errorClass={errors[field.name] && "error-border"} 
                  register={register(`${field.name}`, { valueAsNumber: true, validate: value => !isNaN(value) })}
                 />

      case "CHECKBOX":
        return <Checkbox 
                  key={field.id}
                  id={field.id} 
                  label={field.label} 
                  register={register(`${field.name}`, { value: field.checked})}
                />

      case "DROPZONE":
        return <Dropzone 
                  key={field.id} 
                  id={field.id} 
                  label={field.label} 
                  myName={field.name} 
                  setFiles={setValue} 
                  control={selectedFiles}
                  errors={errors[field.name]}
                  errorClass={errors[field.name] && "error-border"} 
                  register={register(`${field.name}`, {value: selectedFiles, validate: value => value.length > 0})}
                  extraValidation={field.validation}
                />

      default:
        return <div>Something went wrong</div>;
    }
  }

  return (
    <>
    <Modal 
    show={showModal} 
    header="Request sent" 
    footer={<button className='button' onClick={clearModal}>Ok!</button>}
    message="Your request is being processed"></Modal>
    <div className="tool-form">
      <form onSubmit={handleSubmit(onSubmit)} className="tool-form__main">
        <h1 className='tool-form__title'>{props.toolData.title}</h1>
        <h2 className='tool-form__description'>{props.toolData.description}</h2>
        {props.toolData.formFields.map((field) => addField(field))}
        <button type="submit" className='button'>{props.toolData.submitButtonText}</button>
      </form>
    </div>
    </>
  )
}

export default Form