import React from 'react';
import CatImage from './calicatpic';
import Traits from './calitrait';
import CatFact from './calicatfact';

const CaliCatProfileCard: React.FC = () => {
  return (
    <div style={cardStyle}>
      <CatImage name="Calico" />
      <Traits />
      <CatFact fact="Calico females due to their genetics and known for being sassy and independent!" />
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

export default CaliCatProfileCard;
