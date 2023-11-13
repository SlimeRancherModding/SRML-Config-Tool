import React, { useState } from 'react';
import Config from './mod';
import { mods } from '../mods/mods';

function App() {
  const [selectedMod, setSelectedMod] = useState('');

  const onChange = (e) => {
    setSelectedMod(e.target.value);
  };

  return (
    <React.StrictMode>
      <h1>SRML Config Tool</h1>
      <select onChange={onChange}>
        {!selectedMod && <option value="null">Select a mod</option>}
        {Object.keys(mods).map((modName) => ( 
          <option key={modName} value={modName}>
            {modName}
          </option>
        ))}
      </select>
      <Config modSelected={selectedMod} onChange={onChange}/>
    </React.StrictMode>
  );
}

export default App;
