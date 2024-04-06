import { useState } from "react";
import { EXAMPLES } from "../Data";
import Tab from "./Tab";


export default function Examples(){

    const [selectedTopic, setSelectedTopic]=useState('components');

    function handleClick(clickedButton){
        setSelectedTopic(clickedButton);
    }
  
    return(
        <div className='tab'>
        <h2>Examples</h2>
        <menu className='buttons'>
          <Tab isSelected={selectedTopic==="components"} onClickFunc={()=>handleClick('components')}>Components</Tab>
          <Tab isSelected={selectedTopic==="jsx"} onClickFunc={()=>handleClick('jsx')}>JSX</Tab>
          <Tab isSelected={selectedTopic==="props"} onClickFunc={()=>handleClick('props')}>Props</Tab>
          <Tab isSelected={selectedTopic==="state"} onClickFunc={()=>handleClick('state')}>State</Tab>
        </menu>
        <div className='tab-content'>
          {!selectedTopic? <p>Please select a topic.</p> : null}
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div> 
      </div>
    );
}