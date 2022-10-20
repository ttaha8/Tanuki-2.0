import React, { useState, useCallback } from 'react';
import './App.css';

import MainNavigation from './Componunts/shared/Navigation/MainNavigation/MainNavigation';
import ToolSelector from './Componunts/ToolSelectror/ToolSelector';
import Form from './Componunts/Form/Form';


import {tools} from './hardcodedTools';

function App() {

  const [ tool, setTool ] = useState();

  const toolChangeHandler = useCallback((newValue) => {
    const selectedTool = tools.find(tool=> tool.id == newValue);
    setTool(selectedTool);
 }, []);


  return (
    <div className="App">
      <MainNavigation>
        Tanuki
      </MainNavigation>
      <ToolSelector tools={tools} onChange={toolChangeHandler}/>
      {tool && <Form toolData={tool} />}
    </div>
  );
}

export default App;
