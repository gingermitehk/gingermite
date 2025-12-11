import '../styles/pages.css';

const PressPage = () => {
  return (
    <div className="page-content">
      <div className="content-container">
        <h1 className="page-title">Press & Media</h1>

        <section className="press-section">
          <h2>Featured Work</h2>
          <p>
            Gingermite has been featured in various publications and media outlets for our unique approach
            to floral design and our memorable installations across Hong Kong.
          </p>
        </section>

        <section className="press-section">
          <h2>Recent Features</h2>

          <article className="press-item">
            <h3>Vogue Hong Kong - December 2024</h3>
            <p className="press-description">
              "A Mother-Son Duo Redefining Floral Artistry in Hong Kong"
            </p>
            <p className="press-excerpt">
              Featured in Vogue Hong Kong's lifestyle section, highlighting our unique collaborative approach
              and innovative installation work for luxury brands.
            </p>
          </article>

          <article className="press-item">
            <h3>Hong Kong Tatler - November 2024</h3>
            <p className="press-description">
              "The Florists Behind Hong Kong's Most Memorable Events"
            </p>
            <p className="press-excerpt">
              Our work at the Mercedes-Benz annual gala was featured as an example of how floral design
              can transform corporate events into unforgettable experiences.
            </p>
          </article>

          <article className="press-item">
            <h3>South China Morning Post - October 2024</h3>
            <p className="press-description">
              "Local Artisans: The Creative Force Behind Hong Kong's Luxury Weddings"
            </p>
            <p className="press-excerpt">
              An in-depth look at our process and philosophy, featuring interviews and behind-the-scenes
              photography from a destination wedding in Bali.
            </p>
          </article>

          <article className="press-item">
            <h3>Elle Decoration - September 2024</h3>
            <p className="press-description">
              "Seasonal Blooms: Celebrating Nature's Beauty Month by Month"
            </p>
            <p className="press-excerpt">
              Our monthly flower series was featured as inspiration for bringing seasonal elements into
              modern interior design.
            </p>
          </article>
        </section>

        <section className="press-section">
          <h2>Awards & Recognition</h2>
          <ul className="awards-list">
            <li>Best Floral Design Studio - Hong Kong Wedding Awards 2024</li>
            <li>Excellence in Event Design - Hong Kong Corporate Events 2024</li>
            <li>Featured Artist - Hong Kong Design Week 2024</li>
          </ul>
        </section>

        <section className="press-section">
          <h2>Press Inquiries</h2>
          <p>
            For press inquiries, interviews, or to request high-resolution images, please contact us at{' '}
            <a href="mailto:press@gingermite.com">press@gingermite.com</a>
          </p>
          <p>
            We're happy to provide additional information about our work, creative process, and upcoming projects.
          </p>
        </section>

        <section className="press-section">
          <h2>Download Press Kit</h2>
          <p>
            Our press kit includes high-resolution images, logo files, brand information, and bios.
          </p>
          <button className="download-button">Download Press Kit</button>
        </section>
      </div>
    </div>
  );
};

export default PressPage;
