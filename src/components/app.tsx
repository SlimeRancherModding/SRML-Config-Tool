// App.tsx
import React, { useState } from 'react';
import Config from './config';
import { ModsDefaults } from '../mods/mods'; // Use constMods directly

const App: React.FC = () => {
  const [selectedMod, setSelectedMod] = useState<string | null>(null);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMod(e.target.value);
  };

  return (
    <React.StrictMode>
      <div style={{ padding: '20px' }}>
        <h1>SRML Config Tool</h1>
        <select onChange={handleSelectChange}>
          {!selectedMod && <option value={'None'}>Select a mod</option>}
          {Object.keys(ModsDefaults).map((mod) => (
            <option key={mod} value={mod}>
              {mod}
            </option>
          ))}
        </select>
        <Config modName={selectedMod}/>
      </div>
    </React.StrictMode>
  );
};

export default App;
