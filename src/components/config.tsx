import React, { FC, useState, useEffect } from 'react';
import { mods } from '../mods/mods';

interface Props {
  modSelected: string;
  onChange?: (value: string, configName: string) => void;
}

export const Config: FC<Props> = ({ modSelected, onChange }) => {
  const [config, setConfig] = useState<{ [key: string]: object }>({});
  const [collapsedGroups, setCollapsedGroups] = useState<{ [key: string]: boolean }>({});
  const selectedMod = modSelected as keyof typeof mods;

  useEffect(() => {
    if (mods[selectedMod]) {
      setConfig(mods[selectedMod].properties);
    }
  }, [selectedMod]);

  const handleChange = (propertyName: string, configKey: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    // Update the state directly for the specific config key within the property
    setConfig((prevConfig) => ({
      ...prevConfig,
      [propertyName]: {
        ...prevConfig[propertyName],
        properties: {
          ...prevConfig[propertyName]?.properties,
          [configKey]: { ...prevConfig[propertyName]?.properties?.[configKey], changedValue: newValue },
        },
      },
    }));
    if (onChange) {
      onChange(newValue, `${propertyName}.${configKey}`);
    }
  };

  const handleColorChange = (propertyName: string, configKey: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = hexToRgb(event.target.value);
    setConfig((prevConfig) => ({
      ...prevConfig,
      [propertyName]: {
        ...prevConfig[propertyName],
        properties: {
          ...prevConfig[propertyName]?.properties,
          [configKey]: { ...prevConfig[propertyName]?.properties?.[configKey], changedValue: newValue },
        },
      },
    }));
    if (onChange) {
      onChange(newValue, `${propertyName}.${configKey}`);
    }
  };

  const handleMultiChange = (propertyName: string, configKey: string, event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = Array.from(event.target.selectedOptions, (option) => option.value);
    // Update the state directly for the specific config key within the property
    setConfig((prevConfig) => ({
      ...prevConfig,
      [propertyName]: {
        ...(prevConfig[propertyName] as object),
        properties: {
          ...prevConfig[propertyName].properties,
          [configKey]: { ...(prevConfig[propertyName].properties[configKey] as object), changedValue: newValue },
        },
      },
    }));
    onChange(newValue, `${propertyName}.${configKey}`);
  };

  const exportConfig = (propertyName: string) => {
    const configToExport = config[propertyName] as any;
    let iniContent = `[CONFIG]\n`;

    Object.entries(configToExport.properties).forEach(([key, value]: [string, any]) => {
      const type = value.type ? value.type.toLowerCase() : 'unknown';

      let formattedValue = value.changedValue || value.default;

      if (Array.isArray(formattedValue)) {
        // Format array values with square brackets
        formattedValue = `[${formattedValue.join(', ')}]`;
      } else if (type === 'string') {
        formattedValue = `"${formattedValue}"`;
      }

      iniContent += `;${type}\n${key} = ${formattedValue}\n\n`;
    });

    const fileName = `${propertyName}.ini`;
    const blob = new Blob([iniContent], { type: 'text/plain' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
  }

  function rgbToHex(rgb: string) {
    const [r, g, b] = rgb.split(',').map((item: string) => parseInt(item.trim(), 10));
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  const renderConfigOption = (propertyName: string, key: string, optionValue: any) => {
    let inputElement = null;

    switch (optionValue.type) {
      case 'string':
        if (optionValue.pattern === '^\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*$') {
          const selectedColor = optionValue.changedValue || optionValue.default;

          inputElement = (
            <>
              <input
                type="color"
                value={rgbToHex(selectedColor)}
                onChange={(e) => {
                  handleColorChange(propertyName, key, e);
                }}
              />{' '}
              <label>{optionValue.changedValue || optionValue.default}</label>
            </>
          );
        } else {
          inputElement = (
            <input
              type="text"
              value={optionValue.changedValue || optionValue.default}
              onChange={(e) => handleChange(propertyName, key, e)}
            />
          );
        }
        break;
      case 'number':
        inputElement = (
          <input
            type="number"
            value={optionValue.changedValue || optionValue.default}
            onChange={(e) => handleChange(propertyName, key, e)}
          />
        );
        break;
      case 'boolean':
        inputElement = (
          <select
            value={optionValue.changedValue || optionValue.default}
            onChange={(e) => handleChange(propertyName, key, e)}
          >
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        );
        break;
        case 'array':
          if (optionValue.items && optionValue.items.anyOf) {
            const { anyOf } = optionValue.items;
        
            inputElement = (
              <select
                value={optionValue.changedValue || optionValue.default}
                onChange={(e) => handleMultiChange(propertyName, key, e)}
                multiple
              >
                {anyOf.length === 1 ? (
                  anyOf[0].enum.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))
                ) : (
                  anyOf.map((schema, index) => (
                    <optgroup label={`---`} key={index}>
                      {schema.enum.map((item: string) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </optgroup>
                  ))
                )}
              </select>
            );
          }
          break;
      default:
        inputElement = null;
        break;
    }

    if (optionValue.enum) {
      inputElement = (
        <select
          value={optionValue.changedValue || optionValue.default}
          onChange={(e) => handleChange(propertyName, key, e)}
        >
          {optionValue.enum.map((item: string) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      );
    }

    return (
      <div key={key}>
        <label>{key}</label> {inputElement}
      </div>
    );
  };

  const toggleGroup = (propertyName: string) => {
    setCollapsedGroups((prevGroups) => ({
      ...prevGroups,
      [propertyName]: !prevGroups[propertyName],
    }));
  };

  const renderProperties = () => {
    return Object.entries(config).map(([propertyName, propertyValue]) => {
      const isCollapsed = collapsedGroups[propertyName];

      return (
        <div key={propertyName}>
          <h2 onClick={() => toggleGroup(propertyName)} style={{ cursor: 'pointer' }}>
            {propertyName} {isCollapsed ? '▾' : '▴'}{' '}
            <button style={{ fontSize: '14px' }} onClick={() => exportConfig(propertyName)}>
              Export
            </button>
          </h2>
          {!isCollapsed && propertyValue && propertyValue.properties && (
            <div>
              {Object.entries(propertyValue.properties).map(([key, value]: [string, any]) => (
                <div key={key}>
                  {renderConfigOption(propertyName, key, value)}
                  {value.description && <p>{value.description}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    });
  };

  return <>{renderProperties()}</>;
};

export default Config;
