import React from 'react';
import calico from "../../images/calicat.png"; // Update the image path

interface CatImageProps {
  name: string;
}

const CatImage: React.FC<CatImageProps> = ({ name }) => {
  return (
    <div style={imageContainerStyle}>
      <img src={calico} style={imageStyle} />
      <p style={nameStyle}>{name}</p>
    </div>
  );
};

interface NameStyle {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
}

const imageContainerStyle = {
  textAlign: 'center' as 'center',
  marginBottom: '20px',
};

const imageStyle = {
  width: '100%', 
  height: 'auto',
  objectFit: 'contain' as 'contain', 
};

const nameStyle: NameStyle = {
  fontFamily: 'Courier, monospace',
  fontSize: '24px',
  fontWeight: 'bold',
};

export default CatImage;