import React from 'react';

interface CatFactProps {
  fact: string;
}

const CatFact: React.FC<CatFactProps> = ({ fact }) => {
  return (
    <div style={factContainerStyle}>
      <h3>Cat Fact</h3>
      <p>{fact}</p>
    </div>
  );
};

const factContainerStyle = {
  width: '100%',
  padding: '10px',
  textAlign: 'center' as 'center',
  marginTop: '20px',
};

export default CatFact;