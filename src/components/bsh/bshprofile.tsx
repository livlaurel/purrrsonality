import React from 'react';
import CatImage from './bshcatpic';
import Traits from './bshtrait';
import CatFact from './bshcatfact';

const BSHCatProfileCard: React.FC = () => {
  return (
    <div style={cardStyle}>
      <CatImage name="British Short Hair" />
      <Traits />
      <CatFact fact="British Short Hair are known for calm, easygoing, and slightly reserved personalities." />
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

export default BSHCatProfileCard;
