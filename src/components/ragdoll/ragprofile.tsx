import React from 'react';
import CatImage from './ragcatpic';
import Traits from './ragtrait';
import CatFact from './ragcatfact';

const RagCatProfileCard: React.FC = () => {
  return (
    <div style={cardStyle}>
      <div style={imageContainerStyle}>
        <CatImage name="Ragdoll" />
      </div>
      <div style={contentContainerStyle}>
        <Traits />
        <CatFact fact="Ragdolls, sweet and friendly—known for being “puppy-like” and following people around." />
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

export default RagCatProfileCard;
