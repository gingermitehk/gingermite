import '../styles/pages.css';

const ContactPage = () => {
  return (
    <div className="page-content">
      <div className="content-container">
        <h1 className="page-title">Get in Touch</h1>
<section className="contact-section">

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" rows={6} required></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>

          <p style={{ marginTop: '2rem', fontSize: '0.95rem', color: '#888' }}>
            For wedding and event inquiries, we recommend booking at least 3-6 months in advance to
            ensure availability. However, we do our best to accommodate last-minute requests when possible.
          </p>
        </section>
        <section className="contact-section">
          <h2>Contact Information</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p><a href="mailto:hello@gingermite.com">hello@gingermite.com</a></p>
            </div>

            <div className="contact-item">
              <h3>Phone</h3>
              <p><a href="tel:+85255512345">(555) 123-4567</a></p>
            </div>

            <div className="contact-item">
              <h3>Location</h3>
              <p>Hong Kong</p>
            </div>

            <div className="contact-item">
              <h3>Hours</h3>
              <p>Monday - Saturday: 10:00 AM - 6:00 PM</p>
              <p>Sunday: By appointment only</p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>Collaborations</h2>
          <p>
            We're always interested in creative collaborations with brands, event planners, photographers,
            and other creative professionals. If you have a project in mind, please don't hesitate to reach out.
          </p>
        </section>

        <section className="contact-section">
          <h2>Follow Us</h2>
          <p>
            Stay updated with our latest creations and behind-the-scenes glimpses of our studio life by
            following us on social media.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Pinterest</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
