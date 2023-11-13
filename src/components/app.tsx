import React, { useState } from 'react';
import Config from './config';
import { mods } from '../mods/mods';

function App() {
  const [selectedMod, setSelectedMod] = useState('');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMod(e.target.value);
  };

  return (
    <React.StrictMode>
      <div style={{ padding: '20px' }}>
      <h1>SRML Config Tool</h1>
      <select onChange={handleSelectChange}>
        {!selectedMod && <option value="null">Select a mod</option>}
        {Object.keys(mods).map((modName) => ( 
          <option key={modName} value={modName}>
            {modName}
          </option>
        ))}
      </select>
      <Config modSelected={selectedMod}/>
      </div>
    </React.StrictMode>
  );
}

export default App;
