import React from 'react';
import CatImage from './calicatpic';
import Traits from './calitrait';
import CatFact from './calicatfact';

const CaliCatProfileCard: React.FC = () => {
  return (
    <div style={cardStyle}>
      <div style={imageContainerStyle}>
        <CatImage name="Calico" />
      </div>
      <div style={contentContainerStyle}>
        <Traits />
        <CatFact fact="Calico females due to their genetics and known for being sassy and independent!" />
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
export default CaliCatProfileCard;
