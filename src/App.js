import React, { useState, useCallback, useEffect, } from 'react';
import { useLocation } from 'react-router-dom';

import './App.css';

import MainNavigation from './Componunts/shared/Navigation/MainNavigation/MainNavigation';
import ToolSelector from './Componunts/ToolSelectror/ToolSelector';
import Form from './Componunts/Form/Form';
import ProgressZone from './Componunts/ProgressZone/ProgressZone';

import { tools } from './hardcodedTools';
import { tasks } from './hardcodedTasks';
// const tasks = [{id: 55, tool: "Metadata to OTP", progress: 15}]




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
            <ProgressZone tasks={tasks}/>
          </div>
        </div>
    </div>
  );
}

export default App;
