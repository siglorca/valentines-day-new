import React from 'react';

export default function ContentPage() {
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>...SIOMAI LOVE FOR YOU!!! Happy Valentines day To my BABY CAKES :3!</h1>
      <div style={gridContainerStyle}>
        <div style={gridItemStyle}><img src="/cat-love-5.gif" alt="Placeholder" style={imageStyle} /></div>
        <div style={gridItemStyle}><img src="/cat-love-1.jpg" alt="Placeholder" style={imageStyle} /></div>
        <div style={gridItemStyle}><img src="/cat-love-7.gif" alt="Placeholder" style={imageStyle} /></div>
        <div style={gridItemStyle}><img src="/cat-love-2.jpg" alt="Placeholder" style={imageStyle} /></div>
        <div style={{ ...gridItemStyle, gridColumn: '2 / 3', gridRow: '2 / 3', justifySelf: 'center', alignSelf: 'center' }}>
          <a href="https://open.spotify.com/playlist/5oOghWwkJtjMtTkeC77HPr?si=YSr5T63FQHqnL3feFzC3mw&pi=a-pmHa735aQVCH&pt=ff2544d57d0ab2fd6cb4c6c254dba064" target="_blank" rel="noopener noreferrer">
            <img src="/siomai-thea.jpg" alt="Siomai Love" style={{ width: '95%' }} />
          </a>
        </div>
        <div style={gridItemStyle}><img src="/cat-love-4.jpg" alt="Placeholder" style={imageStyle} /></div>
        <div style={gridItemStyle}><img src="/cat-love-6.gif" alt="Placeholder" style={imageStyle} /></div>
        <div style={gridItemStyle}><img src="/cat-love-3.jpg" alt="Placeholder" style={imageStyle} /></div>
        <div style={gridItemStyle}><img src="/cat-love-8.gif" alt="Placeholder" style={imageStyle} /></div>
      </div>
      <div style={footerStyle}>P.s. bawi ako next valentines</div>
    </div>
  );
}

const headerStyle = {
  textAlign: 'center',
  marginBottom: '20px',
};

const containerStyle = {
  width: '100vw',
  height: '100vh',
  backgroundImage: 'linear-gradient(to bottom right, red, orange, yellow, green, blue, indigo, violet)',
  backgroundSize: 'cover', // Ensure the background covers the entire viewport
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 300px)',
  padding: '20px',
};

const gridItemStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle = {
  width: '50%', // Make images span the entire width of the grid item
};

const footerStyle = {
  textAlign: 'center',
  margintop: '20px'
};
