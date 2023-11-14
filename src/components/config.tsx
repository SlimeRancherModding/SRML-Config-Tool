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
    const groupedProperties: { [key: string]: string[] } = {};
  
    let iniContent = `[CONFIG]\n`;
  
    Object.entries(configToExport.properties).forEach(([key, value]: [string, any]) => {
      if (!value.internal) {

      if (value.partOf) {
        if (!groupedProperties[value.partOf]) {
          groupedProperties[value.partOf] = [];
        }
        groupedProperties[value.partOf].push(value.changedValue || value.default);
      } else {
        const type = value.type ? value.type.toLowerCase() : 'unknown';
        let formattedValue = Array.isArray(value.changedValue || value.default)
          ? `[${(value.changedValue || value.default).join(', ')}]`
          : type === 'string'
          ? `"${value.changedValue || value.default}"`
          : value.changedValue || value.default;
  
        const section = `;${type}\n${key} = ${formattedValue}\n\n`;
        iniContent += section;
      }
    }
    });
  
    Object.entries(groupedProperties).forEach(([groupName, properties]) => {
      const formattedValue = JSON.stringify(properties);
      const section = `;array\n${groupName} = ${formattedValue}\n\n`;
      iniContent += section;
    });

    const fileName = `${propertyName}.ini`;
    const blob = new Blob([iniContent], { type: 'text/plain' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  const renderConfigOption = (propertyName: string, key: string, optionValue: any) => {
    let inputElement = null;

    switch (optionValue.type) {
      case 'string':
        if (optionValue.color) {
          const selectedColor = optionValue.changedValue || optionValue.default;

          inputElement = (
            <>
              <input
                type="color"
                value={selectedColor}
                onChange={(e) => {
                  handleChange(propertyName, key, e);
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
            inputElement = (
              <select
                value={optionValue.changedValue || optionValue.default}
                onChange={(e) => handleMultiChange(propertyName, key, e)}
                multiple
              >
                {optionValue.items.anyOf.map((schema) => {
                  if (schema.enum) {
                    return (
                      <optgroup label={schema.label} key={schema.label}>
                        {schema.enum.map((item: string) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </optgroup>
                    );
                  }
                  return null; // Handle other types if necessary
                })}
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
          {propertyValue.description && <p>{propertyValue.description}</p>}
          {!isCollapsed && propertyValue && propertyValue.properties && (
            <div>
              {Object.entries(propertyValue.properties).map(([key, value]: [string, any]) => {
                if (value.internal === true) return null;

                return (
                  <div key={key}>
                    {renderConfigOption(propertyName, key, value)}
                    {value.description && <p>{value.description}</p>}
                  </div>
                );
              })}

            </div>
          )}
        </div>
      );
    });
  };

  return <>{renderProperties()}</>;
};

export default Config;
