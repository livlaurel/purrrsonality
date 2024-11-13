import React from 'react';

interface CatImageProps {
  name: string;
}

const CatImage: React.FC<CatImageProps> = ({ name }) => {
  return (
    <div style={imageContainerStyle}>
      <img src="../images/bombacat.png" alt={`${name} the cat`} style={imageStyle} />
      <p style={nameStyle}>{name}</p>
    </div>
  );
};

const imageContainerStyle = {
  textAlign: 'center' as 'center',
  marginBottom: '20px',
};

const imageStyle = {
  width: '100px',
  height: '100px',
};

const nameStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

export default CatImage;
