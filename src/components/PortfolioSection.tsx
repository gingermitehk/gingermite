import { useState, useMemo } from 'react';
import { projectDatabase } from '../data/projectDatabase';
import FilterBar from './FilterBar';
import ProjectCard from './ProjectCard';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  // Filter first, then get 6 most recent from filtered results
  const filteredProjects = useMemo(() => {
    const filtered = activeFilter === 'all'
      ? projectDatabase
      : projectDatabase.filter(project => project.category === activeFilter);

    return [...filtered]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 6);
  }, [activeFilter]);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="content-container">
        <h2 className="section-title">Recent Projects</h2>
        <FilterBar activeFilter={activeFilter} onFilterChange={handleFilterChange} />
        <div className="projects-container">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={{
                id: project.id,
                title: project.title,
                description: project.description,
                image: project.imagePath,
                tags: [project.category]
              }}
              isVisible={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
