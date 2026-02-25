import '../styles/pages.css';
import pressData from '../data/press.json';

const PressPage = () => {
  return (
    <div className="page-content">
      <div className="content-container">
        <h1 className="page-title">Press & Media</h1>

        <section className="press-section">
          <p>{pressData.intro}</p>
        </section>

        <section className="press-section">
          <h2>Features & Articles</h2>
          <div className="press-grid">
            {pressData.articles.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="press-card"
              >
                <div className="press-card-image">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="press-card-body">
                  <span className="press-card-source">{article.source}</span>
                  <h3 className="press-card-title">{article.title}</h3>
                  {article.subtitle && (
                    <span className="press-card-subtitle">{article.subtitle}</span>
                  )}
                  <p className="press-card-description">{article.description}</p>
                  <div className="press-card-footer">
                    {article.date && (
                      <span className="press-card-date">{article.date}</span>
                    )}
                    <span className="press-card-link">Read article →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="press-section">
          <h2>Press Inquiries</h2>
          <p>
            For press inquiries, interviews, or to request high-resolution images, please contact us at{' '}
            <a href={`mailto:${pressData.pressEmail}`}>{pressData.pressEmail}</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PressPage;
