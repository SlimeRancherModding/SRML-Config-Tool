import { FC, useState } from 'react';
import * as enums from './customizableSlimes/enums';
import * as defaults from './customizableSlimes/defaults';
//import * as mods from './mods';

interface Props {
  onChange: (value: string, configName: string) => void;
}

export const App: FC<Props> = ({ onChange }) => {

  const [config, setConfig] = useState<typeof defaults.CustomSlime>({
    ...defaults.CustomSlime,
  });
  

  const handleChange = (configName: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newValue = event.target.value;
    setConfig((prevConfig) => ({
      ...prevConfig,
      [configName]: newValue,
    }));
    onChange(newValue, configName);
  };

  const renderConfigOptions = () => {
    const configKeys = Object.keys(defaults);
  
    return configKeys.map((configKey) => {
      const defaultValue = defaults[configKey as keyof typeof defaults];
      
      const renderConfigOption = (optionKey: string, optionValue: string | number | boolean) => {
        let inputElement;
  
        switch (typeof optionValue) {
          case 'string':
            inputElement = (
              <input type="text" value={config[configKey] as string} onChange={handleChange(`${configKey}.${optionKey}`)} />
            );
            break;
          case 'number':
            inputElement = (
              <input type="number" value={config[configKey] as number} onChange={handleChange(`${configKey}.${optionKey}`)} />
            );
            break;
          case 'boolean':
            inputElement = (
              <select value={config[configKey] as string} onChange={handleChange(`${configKey}.${optionKey}`)}>
              <option value="true">true</option>
                <option value="false">false</option>
              </select>
            );
            break;
            // case 'object':
            //     inputElement = (
            //       <select value={config[configKey] as string} onChange={handleChange(`${configKey}.${optionKey}`)}>
            //         {Object.entries(enums[optionKey as keyof typeof enums]).map(([enumKey, enumValue]) => (
            //           <option key={enumKey} value={enumValue}>
            //             {enumKey}
            //           </option>
            //         ))}
            //       </select>
            //     );
            //   break;
          default:
            inputElement = null;
        }
  
        return (
          <div key={optionKey}>
            <label>{optionKey}</label>{' '}
            {inputElement}
          </div>
        );
      };
  
      return (
        <div key={configKey}>
          <h2>{configKey}</h2>
          {Object.entries(defaultValue).map(([optionKey, optionValue]) => renderConfigOption(optionKey, optionValue))}
        </div>
      );
    });
  };
  
  return (
    <>
      <h1>SRML Config Tool</h1>
      {renderConfigOptions()}
    </>
  );
};

export default App
