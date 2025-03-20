import React from 'react';
import TraitBar from './calitraitbar';

const Traits: React.FC = () => {
  return (
    <div style={traitsContainerStyle}>
      <h3 style={headerStyle}>Traits</h3>
      <TraitBar label="Happiness" value={50} icon="😊" />
      <TraitBar label="Affection" value={15} icon="❤️" />
      <TraitBar label="Playfulness" value={90} icon="🧶" />
      <TraitBar label="Sleepiness" value={10} icon="💤" />
    </div>
  );
};

const traitsContainerStyle = {
  width: '670px',
  padding: '10px',
};

const headerStyle = {
  fontSize: '18px',
  marginBottom: '10px',
};

export default Traits;