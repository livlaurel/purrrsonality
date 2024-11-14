import React from 'react';

interface TraitBarProps {
  label: string;
  value: number;
  icon: string;
}

const TraitBar: React.FC<TraitBarProps> = ({ label, value, icon }) => {
  return (
    <div style={traitContainerStyle}>
      <span>{icon}</span>
      <span style={labelStyle}>{label}</span>
      <div style={progressContainerStyle}>
        <div style={{ ...progressStyle, width: `${value}%` }} />
      </div>
    </div>
  );
};

const traitContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px',
};

const labelStyle = {
  width: '100px',
  marginLeft: '10px',
};

const progressContainerStyle = {
  width: '100%',
  height: '10px',
  backgroundColor: '#ddd',
  borderRadius: '5px',
  overflow: 'hidden' as 'hidden',
  marginLeft: '10px',
};

const progressStyle = {
  height: '100%',
  backgroundColor: '#f39c12',
};

export default TraitBar;