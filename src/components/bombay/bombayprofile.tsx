import React from 'react';
import CatFact from './catfact';
import CatImage from './catpic';
import Traits from './trait';

const CatProfileCard: React.FC = () => {
  return (
    <div style={cardStyle}>
      <CatImage name="Bombay" />
      <Traits />
      <CatFact fact="Bombays are known for their playful and affectionate nature!" />
    </div>
  );
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
  border: '2px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  maxWidth: '400px',
};

export default CatProfileCard;
