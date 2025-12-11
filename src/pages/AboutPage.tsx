import '../styles/pages.css';

const AboutPage = () => {
  return (
    <div className="page-content">
      <div className="content-container">
        <h1 className="page-title">About Gingermite</h1>

        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Gingermite is a mother and son floral studio based in Hong Kong, dedicated to creating
            beautiful, bespoke floral arrangements that celebrate life's most precious moments.
          </p>
          <p>
            Founded on the principles of creativity, quality, and personal connection, we bring together
            traditional craftsmanship with contemporary design to create unforgettable floral experiences.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Philosophy</h2>
          <p>
            We believe that flowers have the power to transform spaces and elevate emotions. Each arrangement
            we create is a unique expression of artistry, carefully crafted to reflect the personality and
            vision of our clients.
          </p>
          <p>
            From intimate bouquets to grand installations, we approach every project with the same level of
            dedication and attention to detail, ensuring that each creation is truly one-of-a-kind.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Do</h2>
          <ul className="services-list">
            <li>Wedding florals and ceremony design</li>
            <li>Corporate events and installations</li>
            <li>Seasonal bouquets and arrangements</li>
            <li>Custom floral sculptures and art pieces</li>
            <li>Luxury brand collaborations</li>
            <li>Private events and celebrations</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Based in Hong Kong</h2>
          <p>
            Operating from the heart of Hong Kong, we draw inspiration from the city's vibrant energy and
            natural beauty. Our studio serves clients throughout Hong Kong and beyond, creating memorable
            floral experiences for weddings, corporate events, and special occasions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
