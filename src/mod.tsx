import { FC, useState } from 'react';
import * as mods from './mods/mods';

interface Props {
  onChange: (value: string, configName: string) => void;
}

export const App: FC<Props> = ({ onChange }) => {
  const [config, setConfig] = useState<typeof mods>({ ...mods });

  const handleChange = (configName: string) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    setConfig((prevConfig) => ({
      ...prevConfig,
      [configName]: newValue,
    }));
    onChange(newValue, configName);
  };

  const renderInputElement = (modKey: string, configKey: string, optionValue: any) => {
    let inputElement;

    switch (typeof optionValue) {
      case 'string':
        inputElement = (
          <input
            type="text"
            value={config[modKey][configKey] as string}
            onChange={handleChange(`${modKey}.${configKey}`)}
          />
        );
        break;
      case 'number':
        inputElement = (
          <input
            type="number"
            value={config[modKey][configKey] as number}
            onChange={handleChange(`${modKey}.${configKey}`)}
          />
        );
        break;
      case 'boolean':
        inputElement = (
          <input
            type="checkbox"
            checked={config[modKey][configKey] as boolean}
            onChange={handleChange(`${modKey}.${configKey}`)}
          />
        );
        break;
      default:
        inputElement = null;
    }

    return (
      <div key={configKey}>
        <label>{configKey}</label>{' '}
        {inputElement}
      </div>
    );
  };

  return (
    <>
      {Object.keys(mods).map((modKey) => {
        const mod = mods[modKey];
        return (
          <div key={modKey}>
            <h2>{modKey}</h2>
            {Object.keys(mod).map((configKey) => {
              const optionValue = mod[configKey];

              if (Array.isArray(optionValue) && optionValue.length > 0) {
                return (
                  <div key={configKey}>
                    <h3>{configKey}</h3>
                    <select
                      value={config[modKey][configKey] as string}
                      onChange={handleChange(`${modKey}.${configKey}`)}
                    >
                      {optionValue.map((arrayItem: string | number) => (
                        <option key={arrayItem} value={arrayItem}>
                          {arrayItem}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }

              return renderInputElement(modKey, configKey, optionValue);
            })}
          </div>
        );
      })}
    </>
  );
};



export default App;
