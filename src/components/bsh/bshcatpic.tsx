import React from 'react';
import bsh from "../../images/bshcat.png";

interface CatImageProps {
  name: string;
}

const CatImage: React.FC<CatImageProps> = ({ name }) => {
  return (
    <div style={imageContainerStyle}>
      <img src={bsh} style={imageStyle} />
      <p style={nameStyle}>{name}</p>
    </div>
  );
};

const imageContainerStyle = {
  textAlign: 'center' as 'center',
  marginBottom: '20px',
};

const imageStyle = {
  width: '100%', 
  height: 'auto',
  objectFit: 'contain' as 'contain', 
};

const nameStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

export default CatImage;