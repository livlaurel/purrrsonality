import React from 'react';
import CatFact from './catfact';
import CatImage from './catpic';
import Traits from './trait';

const CatProfileCard: React.FC = () => {
  return (
    <div style={cardStyle}>
      <CatImage name="Bombay" />
      <Traits />
      <CatFact fact="Bombays are very social and love attention—often follow their owners around!" />
    </div>
  );
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
  width: '100%',
};

export default CatProfileCard;
