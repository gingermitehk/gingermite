import { useEffect, useState } from 'react';
import { monthlyFlowers } from '../data/monthlyFlowers';

const MediaHeader = () => {
  const [showEnglish, setShowEnglish] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);

      setTimeout(() => {
        setShowEnglish(prev => !prev);
        setOpacity(1);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentMonth = new Date().getMonth();
  const { month, flower, zh_month, zh_flower } = monthlyFlowers[currentMonth];
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  const englishText = `It is ${capitalizedMonth} in Hong Kong; the ${flower} are blooming.`;
  const chineseText = `${zh_month}香港${zh_flower}正在盛開`;

  return (
    <section className="media-header">
      <div className="media-header-top">
        <div className="media-logo">
          <img src="/media/logo.png" alt="Gingermite Logo" className="logo-img" />
          <h1>Gingermite</h1>
        </div>
        <div className="media-slogan">
          <p style={{ opacity, transition: 'opacity 0.5s ease' }}>
            {showEnglish ? englishText : chineseText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MediaHeader;
