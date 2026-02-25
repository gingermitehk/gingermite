interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { value: 'all', label: 'All Projects' },
  { value: 'installation', label: 'Installation' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'gifting', label: 'Gifting' },
  { value: 'other', label: 'Other' }
];

const FilterBar = ({ activeFilter, onFilterChange }: FilterBarProps) => {
  return (
    <div className="filter-section">
      <div className="filter-header">
        <span className="filter-label">FILTERS</span>
      </div>
      <div className="filter-bar">
        <button
          className={`filter-tag ${activeFilter === 'all' ? 'active' : ''}`}
          data-filter="all"
          onClick={() => onFilterChange('all')}
        >
          All
        </button>
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
