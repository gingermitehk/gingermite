import { clients } from '../data/projectDatabase';

const ClientsCarousel = () => {
  return (
    <section className="clients-section" id="clients">
      <div className="content-container">
        <h2 className="section-title">Selected Clients</h2>
        <div className="clients-carousel">
          <div className="clients-track">
            {clients.map((client, index) => (
              <div key={`${client.name}-${index}`} className="client-logo">
                <img src={client.logo} alt={client.name} />
              </div>
            ))}
            {clients.map((client, index) => (
              <div key={`${client.name}-duplicate-${index}`} className="client-logo">
                <img src={client.logo} alt={client.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
