import React from 'react';
import CatFact from './catfact';
import CatImage from './catpic';
import Traits from './trait';

const CatProfileCard: React.FC = () => {
  return (
    <>
      <div style={cardStyle}>
        <div style={imageContainerStyle}>
          <CatImage name="Bombay" />
        </div>

      <div style={colContainerStyle}>
          <div style={traitsContainerStyle}>
            <Traits />
          </div>
          <div style={factContainerStyle}>
             <CatFact fact="Bombays are very social and love attention—often follow their owners around!" />
          </div>
        </div>
      </div>
    </>
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

const factContainerStyle = {
  display: 'flex',
  maxWidth: '850px',
  backgroundColor: '#99B2DD',
  borderRadius: '5px',
  padding: '10px',
};

const traitsContainerStyle = {
  display: 'flex',
  marginBottom: '20px',
  maxWidth: '850px',
  backgroundColor: '#99B2DD',
  borderRadius: '5px',
  padding: '10px',
};

const colContainerStyle = {
  flexDirection: 'column' as 'column',
};

export default CatProfileCard;
