import React, { useState } from 'react';
import Link from 'next/link';

export default function SiomaiPage() {
  const [showSecondButton, setShowSecondButton] = useState(false);

  const handleSiomaiButtonClick = () => {
    setShowSecondButton(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to Angkong! ;)!</h1>
        <img src="/siomai-vendor.jpg" alt="Siomai" style={{ width: '400px', margin: '0 auto' }} />
      </div>
      <div style={{ marginTop: '10px' }}>
        <button style={{ marginBottom: '10px', pointerEvents: showSecondButton ? 'none' : 'auto', opacity: showSecondButton ? 0.3 : 1 }} onClick={handleSiomaiButtonClick}>You sure you want siomai?</button>
        {showSecondButton && (
          <div>
            <img src="/siomai-vendor2.jpg" alt="Second Siomai Image" style={{ width: '400px', marginTop: '20px' }} />
            <Link href="/ContentPage">
              <button style={{ display: 'block', marginTop: '20px', textDecoration: 'none' }}>Good! Because This Valentines Day, I just want to siomai...</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
