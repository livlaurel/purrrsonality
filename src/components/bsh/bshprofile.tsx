import React from 'react';
import CatImage from './bshcatpic';
import Traits from './bshtrait';
import CatFact from './bshcatfact';

const BSHCatProfileCard: React.FC = () => {
  return (
    <>
      <div style={cardStyle}>
        <div style={imageContainerStyle}>
          <CatImage name="British Short Hair" />
        </div>

      <div style={colContainerStyle}>
          <div style={traitsContainerStyle}>
            <Traits />
          </div>
          <div style={factContainerStyle}>
             <CatFact fact="British Short Hair are known for calm, easygoing, and slightly reserved personalities." />
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

export default BSHCatProfileCard;
