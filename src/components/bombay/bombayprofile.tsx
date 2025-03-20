import React from 'react';
import CatFact from './catfact';
import CatImage from './catpic';
import Traits from './trait';

const CatProfileCard: React.FC = () => {
  return (
    <div style={cardStyle}>
      <div style={imageContainerStyle}>
        <CatImage name="Bombay" />
      </div>
      <div style={contentContainerStyle}>
        <Traits />
        <CatFact fact="Bombays are very social and love attention—often follow their owners around!" />
      </div>
    </div>
  );
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'row' as 'row',
  alignItems: 'flex-start',
  maxWidth: 'auto',
  gap: '20px',
};

const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '300px',
};

const contentContainerStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  gap: '10px',
  maxWidth: '850px',
  backgroundColor: '#99B2DD',
};

export default CatProfileCard;
