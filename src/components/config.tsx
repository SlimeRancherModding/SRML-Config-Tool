// config.tsx
import React from 'react';
import { ModsDefaults } from '../mods/mods';

interface ConfigProps {
  modName: string | null;
}

const Config: React.FC<ConfigProps> = ({ modName }) => {
  const modConfig = modName ? ModsDefaults[modName] : null;

  console.log(modConfig);  // Check the console to see if modConfig is correct

  const renderInputs = () => {
    if (!modConfig) {
      return <p>Please select a mod.</p>;
    }

    return Object.entries(modConfig).map(([setting, value]) => (
      <div key={setting}>
        <h3>{setting}:</h3>
        {renderInput(value, setting)}
      </div>
    ));
  };

  const renderInput = (value: any, id: string) => {
    if (typeof value === 'object' && value !== null) {
      // Handle nested objects
      return Object.entries(value).map(([key, subValue]) => (
        <div key={key}>
          <label htmlFor={`${id}-${key}`}>{key}: </label>
          {renderInput(subValue, `${id}-${key}`)}
        </div>
      ));
    }

    // Handle non-object values

    if (typeof value === 'string' && /^#([0-9a-f]{3}){1,2}$/i.test(value)) {
      return (
        <><input
          type="color"
          id={id}
          value={value}
          onChange={(e) => console.log(e.target.value)} />{' '}<span>{value}</span></>
      );
    }

    if (typeof value === 'string') {
      return (
        <textarea id={id} value={value} onChange={(e) => console.log(e.target.value)} />
      );
    }

    if (typeof value === 'boolean') {
      return (
        <select id={id} value={String(value)} onChange={(e) => console.log(e.target.value)}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      );
    }

    // Add other types as needed (number, etc.)
    return null;
  };

  return (
    <div>
      {modName !== null && <h2>{String(modName)} Configuration</h2>}
      {renderInputs()}
    </div>
  );
};

export default Config;
