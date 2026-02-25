import '../styles/pages.css';
import servicesData from '../data/services.json';

const ServicesPage = () => {
  return (
    <div className="page-content">
      <div className="content-container">
        <h1 className="page-title">Services</h1>

        <section className="about-section">
          <h2>Our Services</h2>
          <p>{servicesData.intro}</p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <ul className="services-list">
            {servicesData.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
