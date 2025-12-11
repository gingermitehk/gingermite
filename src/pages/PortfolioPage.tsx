import { useState } from 'react';
import { projectDatabase, getAllCategories, categoryColors, formatDateChinese } from '../data/projectDatabase';
import './PortfolioPage.css';

const PortfolioPage = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [carouselIndexes, setCarouselIndexes] = useState<Record<number, number>>({});

  const categories = getAllCategories();

  const filteredProjects = activeFilter === 'all'
    ? projectDatabase
    : projectDatabase.filter(project => project.category === activeFilter);

  const handleRowClick = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setExpandedRow(null); // Close expanded rows when filtering
  };

  const handleCarouselNext = (e: React.MouseEvent, projectId: number, imageCount: number) => {
    e.stopPropagation();
    setCarouselIndexes(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imageCount
    }));
  };

  const handleCarouselPrev = (e: React.MouseEvent, projectId: number, imageCount: number) => {
    e.stopPropagation();
    setCarouselIndexes(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + imageCount) % imageCount
    }));
  };

  const handleCarouselIndicator = (e: React.MouseEvent, projectId: number, index: number) => {
    e.stopPropagation();
    setCarouselIndexes(prev => ({
      ...prev,
      [projectId]: index
    }));
  };

  return (
    <div className="portfolio-page">
      <div className="portfolio-header">
        <h1>Complete Portfolio</h1>
        <p>Explore our complete collection of floral artistry and event design</p>
      </div>

      <div className="portfolio-filter-section">
        <button
          className={`portfolio-filter-tag ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          All Projects ({projectDatabase.length})
        </button>
        {categories.map(category => {
          const count = projectDatabase.filter(p => p.category === category).length;
          return (
            <button
              key={category}
              className={`portfolio-filter-tag ${activeFilter === category ? 'active' : ''}`}
              onClick={() => handleFilterChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} ({count})
            </button>
          );
        })}
      </div>

      <div className="portfolio-table-container">
        <table className="portfolio-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Client</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map(project => (
              <>
                <tr
                  key={project.id}
                  onClick={() => handleRowClick(project.id)}
                  className={`portfolio-row ${expandedRow === project.id ? 'expanded' : ''}`}
                >
                  <td className="project-title">
                    <span
                      className="category-circle"
                      style={{ backgroundColor: categoryColors[project.category] }}
                    />
                    {project.title}
                  </td>
                  <td className="project-client">{project.client}</td>
                  <td className="project-date">{formatDateChinese(project.date)}</td>
                </tr>
                {expandedRow === project.id && (
                  <tr key={`${project.id}-detail`} className="portfolio-detail-row">
                    <td colSpan={3}>
                      <div className="portfolio-detail-content">
                        <div className="portfolio-detail-image">
                          {Array.isArray(project.imagePath) ? (
                            <>
                              <div
                                className="carousel-track"
                                style={{ transform: `translateX(-${(carouselIndexes[project.id] || 0) * 100}%)` }}
                              >
                                {project.imagePath.map((img, idx) => (
                                  <img
                                    key={idx}
                                    src={img}
                                    alt={`${project.title} - Image ${idx + 1}`}
                                    className="carousel-slide"
                                  />
                                ))}
                              </div>
                              {project.imagePath.length > 1 && (
                                <>
                                  <button
                                    className="carousel-btn carousel-btn-prev"
                                    onClick={(e) => handleCarouselPrev(e, project.id, project.imagePath.length)}
                                    aria-label="Previous image"
                                  >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </button>
                                  <button
                                    className="carousel-btn carousel-btn-next"
                                    onClick={(e) => handleCarouselNext(e, project.id, project.imagePath.length)}
                                    aria-label="Next image"
                                  >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </button>
                                  <div className="carousel-indicators">
                                    {project.imagePath.map((_, index) => (
                                      <button
                                        key={index}
                                        className={`carousel-indicator ${index === (carouselIndexes[project.id] || 0) ? 'active' : ''}`}
                                        onClick={(e) => handleCarouselIndicator(e, project.id, index)}
                                        aria-label={`Go to image ${index + 1}`}
                                      />
                                    ))}
                                  </div>
                                </>
                              )}
                            </>
                          ) : (
                            <img src={project.imagePath} alt={project.title} />
                          )}
                        </div>
                        <div className="portfolio-detail-info">
                          <h3>{project.title}</h3>
                          <p className="detail-description">{project.description}</p>
                          <div className="detail-meta">
                            <div className="meta-item">
                              <strong>Client:</strong> {project.client}
                            </div>
                            <div className="meta-item">
                              <strong>Date:</strong> {formatDateChinese(project.date)}
                            </div>
                            <div className="meta-item">
                              <strong>Category:</strong> {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-results">
          <p>No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
