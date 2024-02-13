import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [confirmVisible, setConfirmVisible] = useState(true);
  const [secondConfirmVisible, setSecondConfirmVisible] = useState(false);
  const [siomaiPageVisible, setSiomaiPageVisible] = useState(false);

  const handleYesClick = () => {
    setConfirmVisible(false);
    setSecondConfirmVisible(true);
  };

  const handleNoClick = () => {
    if (siomaiPageVisible) {
      window.location.href = "https://i.imgur.com/5QR0eJS.png";
    } else {
      window.location.href = "https://www.youtube.com/watch?v=KQ4qfpDOZE0&ab_channel=PHVIRALVDU";
    }
  };

  const handleSecondYesClick = () => {
    setSecondConfirmVisible(false);
    setSiomaiPageVisible(true);
  };

  const handleSecondNoClick = () => {
    window.location.href = "https://img.ifunny.co/images/904c20a39d2eb0afc6c173bb41426401c6d557c72d7773ae38a1859e1090ce0b_1.webp";
  };

  const handleThirdNoClick = () => {
    window.location.href = "https://imgur.com/gallery/pQhWcjw";
  };

  return (
    <div className="container">
      <div className="confirm">
        {confirmVisible && (
          <div>
            <div className="question">Are you Thea?</div>
            <button className="confirmButton" onClick={handleYesClick}>Yes</button>
            <button className="confirmButton" onClick={handleNoClick}>No</button>
          </div>
        )}
        {secondConfirmVisible && (
          <div>
            <div className="question">Are you sure?</div>
            <button className="confirmButton" onClick={handleSecondYesClick}>Yes</button>
            <button className="confirmButton" onClick={handleSecondNoClick}>No</button>
          </div>
        )}
        {siomaiPageVisible && (
          <div>
            <div className="question">You want siomai?</div>
            <Link href="/SiomaiPage">
              <button className="confirmButton">Yes</button>
            </Link>
            <button className="confirmButton" onClick={handleThirdNoClick}>No</button>
          </div>
        )}
      </div>
      {siomaiPageVisible && (
        <div className="image-container">
          <img src="/siomai-4.jpg" alt="Siomai" style={{ width: '200px' }} />
        </div>
      )}
    </div>
  );
}
