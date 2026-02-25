import { useEffect, useRef, useState } from 'react';
import { categoryColors } from '../data/projectDatabase';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string | string[];
  tags: string[];
  category?: string;
}

interface ProjectCardProps {
  project: Project;
  isVisible: boolean;
}

const ProjectCard = ({ project, isVisible }: ProjectCardProps) => {
  const cardRef = useRef<HTMLElement>(null);
  const images = Array.isArray(project.image) ? project.image : [project.image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [_isSliding, _setIsSliding] = useState(false);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <article
      ref={cardRef}
      className={`project-card ${isVisible ? '' : 'hidden'}`}
      data-tags={project.tags.join(' ')}
    >
      <div className="project-image">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} - Image ${index + 1}`}
              className="carousel-slide"
            />
          ))}
        </div>
        {hasMultipleImages && (
          <>
            <button className="carousel-btn carousel-btn-prev" onClick={prevImage} aria-label="Previous image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="carousel-btn carousel-btn-next" onClick={nextImage} aria-label="Next image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">
              {project.category && (
                <span
                  className="category-circle-card"
                  style={{ backgroundColor: categoryColors[project.category as keyof typeof categoryColors] }}
                />
              )}
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
