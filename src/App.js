import React, { useState, useCallback, useEffect, } from 'react';
import { useLocation } from 'react-router-dom';

import './App.css';

import MainNavigation from './Componunts/shared/Navigation/MainNavigation/MainNavigation';
import ToolSelector from './Componunts/ToolSelectror/ToolSelector';
import Form from './Componunts/Form/Form';


import { tools } from './hardcodedTools';

function App() {
  
  const currentlocation = decodeURIComponent(useLocation().pathname).replace(/^\//, "");

  const [tool, setTool] = useState();
  const [location, setlLocation] = useState(currentlocation)

  const toolChangeHandler = useCallback((newValue) => {
    const selectedTool = tools.find(tool => tool.title === newValue);
    if (selectedTool) {
      setlLocation(selectedTool.title);
      setTool(selectedTool);
    }
    
  }, []);

  useEffect(()=>{
    if (location !== "") {
      toolChangeHandler(location);
    } else {
      setTool();
    }

  },[location, toolChangeHandler]);
  
  
  const tempInlineStyle = {
    color: 'var(--fonts)',
  };
  return (
    <div className="App">
        <MainNavigation />
        <div className="body-container">
          <div className="selector-area">
            <ToolSelector tools={tools} change={toolChangeHandler}/>
          </div>
          <div className="form-area">
            {tool && <Form toolData={tool} />}
          </div>
          <div className="progress-area">
            <h2 style={tempInlineStyle}>Progress Placeholder Zone</h2>
          </div>
        </div>
    </div>
  );
}

export default App;
