interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { value: 'all', label: 'All Projects' },
  { value: 'weddings', label: 'Weddings' },
  { value: 'events', label: 'Events' },
  { value: 'bouquets', label: 'Bouquets' },
  { value: 'installations', label: 'Installations' },
  { value: 'seasonal', label: 'Seasonal' }
];

const FilterBar = ({ activeFilter, onFilterChange }: FilterBarProps) => {
  return (
    <div className="filter-section">
      <div className="filter-header">
        <span className="filter-label">FILTERS</span>
        <button
          className={`filter-tag ${activeFilter === 'all' ? 'active' : ''}`}
          data-filter="all"
          onClick={() => onFilterChange('all')}
        >
          All Projects
        </button>
      </div>
      <div className="filter-bar">
        {filters.slice(1).map(filter => (
          <button
            key={filter.value}
            className={`filter-tag ${activeFilter === filter.value ? 'active' : ''}`}
            data-filter={filter.value}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
