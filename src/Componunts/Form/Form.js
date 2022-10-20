import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import Checkbox from '../FormElements/Checkbox/Checkbox';
import Input from '../FormElements/Input/Input';
import Select from '../FormElements/Select/Select';
import Dropzone from '../FormElements/Dropzone/Dropzone';

import Card from '../shared/UIElements/Card/Card';

import './Form.css';

const Form = (props) => {

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const onSubmit = data => {
    setValue()
    console.log(data);
  }
  
  useEffect(() => {
    reset()
  }, [props])

  const [selectedFiles, setSelectedFiles] = useState();

  const addField = (field) => {
    switch (field.type) {
      case "INPUT":
        return <Input key={field.id} id={field.id} label={field.label} register={register(`${field.name}`)} />

      case "SELECT":
        return <Select key={field.id} id={field.id} label={field.label} options={field.options} errors={errors[field.name]} errorClass={errors[field.name] && "error-border"} register={register(`${field.name}`, { valueAsNumber: true, validate: value => !isNaN(value) })} />

      case "CHECKBOX":
        return <Checkbox key={field.id} id={field.id} label={field.label} register={register(`${field.name}`, { value: field.checked})} />

      case "DROPZONE":
        return <Dropzone key={field.id} id={field.id} label={field.label} myName={field.name} setFiles={setValue} errors={errors[field.name]} register={register(`${field.name}`, {value: selectedFiles, validate: value => value.length > 0})} />

      default:
        return <div>Something went wrong</div>;
    }
  }

  return (
    <Card className="tool-form">
      <form onSubmit={handleSubmit(onSubmit)} className="tool-form__main">
        <h2 className='tool-form__description'>{props.toolData.description}</h2>
        {props.toolData.formFields.map((field) => addField(field))}
        <button type="submit" className='button'>{props.toolData.submitButtonText}</button>
      </form>
    </Card>
  )
}

export default Form