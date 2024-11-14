import React from 'react';
import CatImage from './ragcatpic';
import Traits from './ragtrait';
import CatFact from './ragcatfact';

const RagCatProfileCard: React.FC = () => {
  return (
    <div style={cardStyle}>
      <CatImage name="Ragdoll" />
      <Traits />
      <CatFact fact="Ragdolls, sweet and friendly—known for being “puppy-like” and following people around." />
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

export default RagCatProfileCard;
