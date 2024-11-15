import React from 'react';

const ProgressBar = ({ value }) => {
  const containerStyle = {
    height: '20px',
    width: '100%',
    backgroundColor: '#e0e0df',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const fillerStyle = {
    height: '100%',
    width: `${value}%`,
    backgroundColor: value > 70 ? '#4caf50' : value > 40 ? '#ff9800' : '#f44336',
    textAlign: 'center',
    lineHeight: '20px',
    color: 'white',
    fontWeight: 'bold',
    transition: 'width 0.3s ease-in-out',
  };

  return (
    <div style={containerStyle}>
      <div style={fillerStyle}>
        {`${value}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
