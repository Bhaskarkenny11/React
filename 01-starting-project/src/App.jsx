import { useState} from 'react';

import { CORE_CONCEPTS,EXAMPLES} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from'./components/TabButton.jsx'
import { Component } from 'react';



function App() {

 const [selctedTopic,setSelectedTopic]=useState()
  function handleSelect( selectedButton){
   // console.log("hey you clicked on "+ selectedButton);
   setSelectedTopic(selectedButton)
  // console.log(content)
}
console.log('app componenet')

  return (
    <div>
     <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts </h2> 
        <ul>
       <CoreConcept  title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image} />
       <CoreConcept {...CORE_CONCEPTS[1]} />
       <CoreConcept {...CORE_CONCEPTS[2]} />
       <CoreConcept {...CORE_CONCEPTS[3]} />
      
         
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
        
          <TabButton onSelect={()=>handleSelect("components")}>Components</TabButton>
          <TabButton onSelect={()=>handleSelect("jsx")}>JSX</TabButton>
          <TabButton onSelect={()=>handleSelect("props")}>Props</TabButton>
          <TabButton onSelect={()=>handleSelect("state")}>State</TabButton>
          </menu>        
            {!setSelectedTopic ? (<p>please select a topic </p> ): (<div id='tab-content'>
           <h3>{EXAMPLES[selctedTopic].title}</h3>
           <p>{EXAMPLES[selctedTopic].description} </p>
           <code>{EXAMPLES[selctedTopic].code}</code>
      </div> )}
        
         
        </section> 
        
      </main>
    </div>
  );
}

export default App;
