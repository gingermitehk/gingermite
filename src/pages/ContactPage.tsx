import '../styles/pages.css';
import contactData from '../data/contact.json';

const ContactPage = () => {
  return (
    <div className="page-content">
      <div className="content-container">
        <h1 className="page-title">Get in Touch</h1>

        <div className="contact-grid">
          {/* Left Column - Form */}
          <div className="contact-form-wrapper">
            <h2>Send us a message</h2>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
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
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>

              <button type="submit" className="submit-button">Send Message</button>
            </form>

            <p className="booking-note">{contactData.bookingNote}</p>
          </div>

          {/* Right Column - Info */}
          <div className="contact-info-wrapper">
            <div className="contact-section-compact">
              <h2>Contact Information</h2>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <strong>Email</strong>
                  <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
                </div>

                <div className="contact-detail-item">
                  <strong>Phone</strong>
                  <a href={contactData.phoneHref}>{contactData.phone}</a>
                </div>

                <div className="contact-detail-item">
                  <strong>Location</strong>
                  <span>{contactData.location}</span>
                </div>

                <div className="contact-detail-item">
                  <strong>Hours</strong>
                  {contactData.hours.map((h, i) => (
                    <span key={i}>{h}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-section-compact">
              <h2>Collaborations</h2>
              <p>{contactData.collaborationsText}</p>
            </div>

            <div className="contact-section-compact">
              <h2>Follow Us</h2>
              <div className="social-links">
                {contactData.socialLinks.map((link, i) => (
                  <a key={i} href={link.url} className="social-link">{link.name}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
