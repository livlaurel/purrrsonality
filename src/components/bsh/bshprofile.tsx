import React from 'react';
import CatImage from './bshcatpic';
import Traits from './bshtrait';
import CatFact from './bshcatfact';

const BSHCatProfileCard: React.FC = () => {
  return (
    <div style={cardStyle}>
      <div style={imageContainerStyle}>
        <CatImage name="British Short Hair" />
      </div>
      <div style={contentContainerStyle}>
        <Traits />
        <CatFact fact="British Short Hair are known for calm, easygoing, and slightly reserved personalities." />
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

export default BSHCatProfileCard;
