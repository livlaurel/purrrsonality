import React from 'react';
import TraitBar from './traitbar';

const Traits: React.FC = () => {
  return (
    <div style={traitsContainerStyle}>
      <h3 style={headerStyle}>Traits</h3>
      <TraitBar label="Happiness" value={80} icon="😊" />
      <TraitBar label="Affection" value={50} icon="❤️" />
      <TraitBar label="Playfulness" value={70} icon="🧶" />
      <TraitBar label="Sleepiness" value={30} icon="💤" />
    </div>
  );
};

const traitsContainerStyle = {
  width: '100%',
  padding: '10px',
};

const headerStyle = {
  fontSize: '18px',
  marginBottom: '10px',
};

export default Traits;
