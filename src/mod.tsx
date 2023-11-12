import React, { FC, useState, useEffect } from 'react';
import { mods } from './mods/mods';

interface Props {
  modSelected: string;
  onChange: (value: string, configName: string) => void;
}

export const Config: FC<Props> = ({ modSelected, onChange }) => {
  const [config, setConfig] = useState<{ [key: string]: unknown }>({});
  const [collapsedGroups, setCollapsedGroups] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (mods[modSelected]) {
      setConfig(mods[modSelected].properties);
    }
  }, [modSelected]);

  const handleChange = (propertyName: string, configKey: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    // Update the state directly for the specific config key within the property
    setConfig((prevConfig) => ({
      ...prevConfig,
      [propertyName]: {
        ...prevConfig[propertyName],
        properties: {
          ...prevConfig[propertyName].properties,
          [configKey]: { ...prevConfig[propertyName].properties[configKey], changedValue: newValue },
        },
      },
    }));
    onChange(newValue, `${propertyName}.${configKey}`);
  };

  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
  }

  const renderConfigOption = (propertyName: string, key: string, optionValue: any) => {
    let inputElement = null;

    if (
      optionValue.type === 'string' &&
      optionValue.pattern === '^\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*$'
    ) {
      inputElement = (
        <>
          <input
            type="color"
            value={optionValue.changedValue || optionValue.default}
            onChange={(e) => {
              const rgb = hexToRgb(e.target.value);
              handleChange(propertyName, key, rgb);
            }}
          />{' '}
          <label>{optionValue.changedValue || optionValue.default}</label>
        </>
      );
    } else if (optionValue.type === 'string') {
      inputElement = (
        <input type="text" value={optionValue.changedValue || optionValue.default} onChange={(e) => handleChange(propertyName, key, e)} />
      );
    } else if (optionValue.type === 'number') {
      inputElement = (
        <input type="number" value={optionValue.changedValue || optionValue.default} onChange={(e) => handleChange(propertyName, key, e)} />
      );
    } else if (optionValue.type === 'boolean') {
      inputElement = (
        <select value={optionValue.changedValue || optionValue.default} onChange={(e) => handleChange(propertyName, key, e)}>
          <option value="true">true</option>
          <option value="false">false</option>
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

  const exportConfig = (propertyName: string) => {
    const configToExport = config[propertyName] as any;
    let iniContent = `[CONFIG]\n`;

    Object.entries(configToExport.properties).forEach(([key, value]: [string, any]) => {
      const type = value.type ? value.type.toLowerCase() : 'unknown';
      const formattedValue = type === 'string' ? `"${value.changedValue || value.default}"` : value.changedValue || value.default;
      iniContent += `;${type.toLowerCase()}\n${key} = ${formattedValue}\n\n`;
    });

    const fileName = `${propertyName}.ini`;
    const blob = new Blob([iniContent], { type: 'text/plain' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
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
                <div key={key}>{renderConfigOption(propertyName, key, value)}</div>
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
