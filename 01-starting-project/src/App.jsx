import { useState} from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from'./components/TabButton.jsx'
import { Component } from 'react';


function App() {

 const [selctedTopic,setSelectedTopic]=useState('this is useState')
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
          <TabButton onSelect={()=>handleSelect("Component")}>Components</TabButton>
          <TabButton onSelect={()=>handleSelect("Jsx")}>Jsx</TabButton>
          <TabButton onSelect={()=>handleSelect("Props")}>Props</TabButton>
          <TabButton onSelect={()=>handleSelect("State")}>State</TabButton>
          </menu>
           {selctedTopic}
      
        </section> 
        
      </main>
    </div>
  );
}

export default App;
