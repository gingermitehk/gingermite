import { useEffect, useState } from 'react';
import { monthlyFlowers } from '../data/monthlyFlowers';
import siteContent from '../data/siteContent.json';

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

  const englishText = siteContent.flowerTemplate.en
    .replace('{month}', capitalizedMonth)
    .replace('{flower}', flower);
  const chineseText = siteContent.flowerTemplate.zh
    .replace('{zh_month}', zh_month)
    .replace('{zh_flower}', zh_flower);

  return (
    <section className="media-header">
      <div className="media-header-top">
        <div className="media-logo">
          <span className="logo-img" aria-label="Gingermite Logo"></span>
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
