
let id = 0;

const checkbox = (label, name, checked) => {
  id++;
  const res = {
    id: id,
    type: "CHECKBOX",
    label,
    name,
    checked
  };

  return res;
}

const select = (label, name, options) =>{
  id++;
  const res = {
    id:id,
    type: "SELECT",
    label, name, options
  };
  return res;
}

const dropzone = (label, name)=>{
  id++;
  const res = {
    id:id,
    type: "DROPZONE",
    label, name
  };
  return res;
}

exports.tools = [
  {
    id: 1,
    title: 'CSV to XLSX',
    description: "This is my CSV to XLSX description.",
    submitButtonText: "Convert File",
    formFields: [
      checkbox("Split File","checkbox1Test",true),
      checkbox("English Only","checkbox2Test",false),
      select("Do something?", "selectTest", [{id: 1, label: "Yes"}, {id: 2, label: "No"}]),
      dropzone("Files Dropzone","source-input")
    ]
  },
  {
    id: 2,
    title: 'Termic',
    description: "This is my Termic description.",
    submitButtonText: "Convert File",
    formFields: [
      select("Keywords List", "platform-set", [{id: 3, label: "Gen 4"}, {id: 4, label: "Gen 5"},{id: 5, label: "Gen 4&5"},{id: 6, label: "NX"}]),
      dropzone("Files Dropzone","source-input")
    ]
  },
  {
    id: 3,
    title: 'OTP to OTP',
    description: "This is my OTP to OTP description.",
    submitButtonText: "Merge Files",
    formFields: [
      dropzone("Source Dropzone","source-input"),
      dropzone("Target Dropzone","target-input")
    ]
  },
  {
    id: 4,
    title: 'Metadata to OTP',
    description: "This is my Metadata to OTP description.",
    submitButtonText: "Exract Data",
    formFields: [
      dropzone("File Dropzone","source-input")
    ]
  },
]