import React from 'react';

interface YamlDisplayProps {
  data: any;
}

const YamlDisplay: React.FC<YamlDisplayProps> = ({ data }) => {
  const renderValue = (value: any) => {
    if (typeof value === 'string') {
      return <span className="text-green-600">"{value}"</span>;
    }
    if (Array.isArray(value)) {
      return (
        <ul className="pl-4">
          {value.map((item, index) => (
            <li key={index}>- {renderValue(item)}</li>
          ))}
        </ul>
      );
    }
    if (typeof value === 'object' && value !== null) {
      return (
        <ul className="pl-4">
          {Object.entries(value).map(([key, val]) => (
            <li key={key}>
              <span className="text-purple-600">{key}:</span> {renderValue(val)}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
      {renderValue(data)}
    </div>
  );
};

export default YamlDisplay;
