
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

const dropzone = (label, name, validation)=>{
  id++;
  const res = {
    id:id,
    type: "DROPZONE",
    validation: {
      maxSize: 200 * 1000000, // Dropzpne max size in bytes 1 mb = 1,000,000
      ...validation
    },
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
      dropzone("Files Dropzone","source-input", {})
    ]
  },
  {
    id: 2,
    title: 'Termic',
    description: "This is my Termic description.",
    submitButtonText: "Convert File",
    formFields: [
      select("File type", "file-type", [{id: 3, label: "Termite"}, {id: 4, label: "Metadata"},{id: 5, label: "OTP"},{id: 6, label: "Xliff"}]),
      select("Keywords List", "platform-set", [{id: 3, label: "Gen 4"}, {id: 4, label: "Gen 5"},{id: 5, label: "Gen 4&5"},{id: 6, label: "NX"}]),
      dropzone("Files Dropzone","source-input", {accept: {"application/file": [".xlsx", ".xls"]}})
    ]
  },
  {
    id: 3,
    title: 'OTP to OTP',
    description: "This is my OTP to OTP description.",
    submitButtonText: "Merge Files",
    formFields: [
      dropzone("Source Dropzone","source-input", {accept: {"application/file": [".xliff", ".xlf"]}}),
      dropzone("Target Dropzone","target-input", {})
    ]
  },
  {
    id: 4,
    title: 'Metadata to OTP',
    description: "This is my Metadata to OTP description.",
    submitButtonText: "Exract Data",
    formFields: [
      dropzone("File Dropzone","source-input", {})
    ]
  },
]