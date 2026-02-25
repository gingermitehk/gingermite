import siteContent from '../data/siteContent.json';

const Hero = () => {
  const { title, description, ctaText } = siteContent.hero;

  return (
    <section className="hero-yellow">
      <div className="hero-yellow-content">
        <div className="hero-title">
          <h2>{title}</h2>
        </div>
        <div className="hero-description">
          <p>{description}</p>
          <a href="#about" className="cta-button">{ctaText}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
