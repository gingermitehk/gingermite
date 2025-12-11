import '../styles/pages.css';

const ServicesPage = () => {
  return (
    <div className="page-content">
      <div className="content-container">
        <h1 className="page-title">Services</h1>

        <section className="about-section">
          <h2>Our Services</h2>
          <p>
            We offer a comprehensive range of floral services tailored to your unique needs.
            From intimate gatherings to grand celebrations, our team brings creativity and
            precision to every project.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <ul className="services-list">
            <li>Wedding Florals & Design</li>
            <li>Corporate Event Installations</li>
            <li>Luxury Brand Collaborations</li>
            <li>Seasonal Bouquets & Arrangements</li>
            <li>Custom Floral Sculptures</li>
            <li>Event Styling & Consultation</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
