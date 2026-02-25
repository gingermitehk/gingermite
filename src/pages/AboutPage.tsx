import '../styles/pages.css';
import aboutData from '../data/about.json';

const AboutPage = () => {
  return (
    <div className="page-content">
      <div className="content-container">
        <h1 className="page-title">About Gingermite</h1>

        {aboutData.sections.map((section, index) => (
          <section key={index} className="about-section">
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {section.listItems && (
              <ul className="services-list">
                {section.listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
