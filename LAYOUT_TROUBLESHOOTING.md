# Layout Troubleshooting: Expanded Sidebar View

## Problem Statement

The homepage layout is not fitting properly when the sidebar is expanded. Specifically:
- The 3-column grid of project cards is being cut off or doesn't fit on screen
- The "See full portfolio →" link may not be visible
- Content feels cramped even with responsive breakpoints

**Goal**: Ensure that when the sidebar is expanded (420px width), all content including the header, 3 project cards in a row, and the "See full portfolio" link are comfortably visible on standard desktop screens (1920x1080 and similar).

## Current Setup

### Sidebar Width
```css
/* From src/styles/variables.css */
--sidebar-width: 420px;
--sidebar-collapsed-width: 60px;
```

### Available Width Calculation
- Standard 1920px screen width
- Expanded sidebar: 420px
- **Available content width**: 1920px - 420px = **1500px**

## Current Layout Code

### 1. Main Container (homepage.css)

```css
.content-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 var(--spacing-md); /* spacing-md = 2rem = 32px */
}

@media (min-width: 1920px) {
    .content-container {
        max-width: 1300px;
        padding: 0 var(--spacing-lg); /* spacing-lg = 3rem = 48px */
    }
}
```

**Current calculation**:
- Container max-width: 1100px
- Padding: 32px on each side = 64px total
- **Total width needed**: 1100px + 64px = 1164px
- **Available**: 1500px
- **Should fit**: ✓ Yes (336px margin)

### 2. Section Header (homepage.css)

```css
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-md);
    gap: var(--spacing-md); /* 2rem = 32px */
}

.section-title {
    font-family: var(--font-heading);
    font-size: 2.2rem;
    font-weight: 400;
    color: var(--dark);
    margin-bottom: 0;
    text-align: left;
}

@media (min-width: 1920px) {
    .section-title {
        font-size: 2.5rem;
    }
}

.portfolio-link {
    font-size: 0.9rem;
    color: var(--dark);
    text-decoration: none;
    transition: opacity var(--transition-fast);
    white-space: nowrap;
    flex-shrink: 0;
}
```

### 3. Projects Grid (homepage.css)

```css
.projects-container {
    display: grid;
    gap: var(--spacing-md); /* 2rem = 32px */
    padding: 0;
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto;
}

/* 2 columns when there's room for them */
@media (min-width: 768px) {
    .projects-container {
        grid-template-columns: repeat(2, 1fr);
        max-width: 100%;
    }
}

/* 3 columns when sidebar is collapsed or screen is wide enough */
@media (min-width: 1280px) {
    .projects-container {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Back to 2 columns on very wide screens with expanded sidebar (1400-1600px range) */
@media (min-width: 1280px) and (max-width: 1500px) {
    .projects-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* 3 columns on ultra-wide screens regardless */
@media (min-width: 1500px) {
    .projects-container {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

**Issue with current breakpoints**:
- At 1920px screen width with expanded sidebar (1500px available), it triggers the 1280-1500px rule
- This shows only 2 columns instead of 3
- The logic is backwards - it should show 3 columns at this width

### 4. Project Card (homepage.css)

```css
.project-card {
    background-color: white;
    border-radius: 0;
    overflow: hidden;
    border: 1px solid #000;
    transition: all var(--transition-normal);
    opacity: 0;
    transform: translateY(30px);
    display: flex;
    flex-direction: column;
    height: 100%;
}

.project-image {
    width: 100%;
    aspect-ratio: 3/2;
    overflow: hidden;
    background-color: #faf8f5;
    border-bottom: #000 solid 1px;
    position: relative;
}
```

**Card width calculation (3 columns)**:
- Container width: 1100px
- Gap between cards: 32px × 2 = 64px
- **Each card width**: (1100px - 64px) / 3 = **345.33px**

## CSS Variables Reference

```css
/* From src/styles/variables.css */
:root {
    /* Spacing */
    --spacing-xs: 0.5rem;  /* 8px */
    --spacing-sm: 1rem;    /* 16px */
    --spacing-md: 2rem;    /* 32px */
    --spacing-lg: 3rem;    /* 48px */
    --spacing-xl: 4rem;    /* 64px */

    /* Layout */
    --sidebar-width: 420px;
    --sidebar-collapsed-width: 60px;

    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
}
```

## App Layout Structure

```tsx
/* From src/App.tsx */
function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {isHomePage && (
        <>
          <MediaHeader />
          <Hero />
        </>
      )}
      <div className="page-wrapper">
        <Sidebar />
        <div className="main-wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* other routes */}
          </Routes>
        </div>
      </div>
      <Footer />
      <MobileMenuToggle />
    </>
  );
}
```

```css
/* From src/App.css */
.page-wrapper {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
}

.main-wrapper {
    flex: 1;
    margin-left: 0;
    padding-left: 0;
    width: 100%;
}
```

## Component Structure

```tsx
/* From src/components/PortfolioSection.tsx */
return (
  <section className="portfolio-section" id="portfolio">
    <div className="content-container">
      <div className="section-header">
        <h2 className="section-title">Recent Projects</h2>
        <a href="/portfolio" className="portfolio-link">See full portfolio →</a>
      </div>
      <FilterBar activeFilter={activeFilter} onFilterChange={handleFilterChange} />
      <div className="projects-container">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={{...}} isVisible={true} />
        ))}
      </div>
    </div>
  </section>
);
```

## Questions for Troubleshooting

1. **Breakpoint Logic Issue**: The current breakpoints seem contradictory:
   - `@media (min-width: 1280px)` sets 3 columns
   - `@media (min-width: 1280px) and (max-width: 1500px)` immediately overrides to 2 columns
   - Should we use container queries or better breakpoint logic?

2. **Sidebar State Detection**: Should the CSS respond to whether the sidebar is collapsed or expanded? Currently, it only responds to viewport width.

3. **Container Width**: Is 1100px max-width too large? Should we reduce it further, or adjust the grid gap?

4. **Better Approach**: Would using `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` be better for dynamic responsiveness?

## Proposed Solutions to Test

### Option A: Fix Breakpoint Logic
```css
.projects-container {
    display: grid;
    gap: var(--spacing-md);
    padding: 0;
}

/* Mobile: 1 column */
@media (max-width: 767px) {
    .projects-container {
        grid-template-columns: 1fr;
        max-width: 600px;
        margin: 0 auto;
    }
}

/* Tablet: 2 columns */
@media (min-width: 768px) and (max-width: 1499px) {
    .projects-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop: 3 columns */
@media (min-width: 1500px) {
    .projects-container {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

### Option B: Use Auto-fit with Minimum Card Size
```css
.projects-container {
    display: grid;
    gap: var(--spacing-md);
    padding: 0;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
```

### Option C: Smaller Container + Smaller Gap
```css
.content-container {
    max-width: 1000px;  /* Reduced from 1100px */
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

.projects-container {
    gap: var(--spacing-sm);  /* Reduced from spacing-md (1rem instead of 2rem) */
}
```

### Option D: Dynamic Sidebar-Aware Layout
Use CSS custom properties and JavaScript to track sidebar state:
```css
:root {
    --sidebar-current-width: 420px; /* Updated via JS */
}

.projects-container {
    /* Calculate available space dynamically */
}
```

## Testing Checklist

Please test the following scenarios:
- [ ] 1920x1080 screen with expanded sidebar (420px)
- [ ] 1920x1080 screen with collapsed sidebar (60px)
- [ ] 1440x900 screen with expanded sidebar
- [ ] 2560x1440 screen with expanded sidebar
- [ ] Verify "See full portfolio" link is always visible
- [ ] Verify no horizontal scrolling occurs
- [ ] Verify proper spacing between cards
- [ ] Verify cards don't feel cramped

## Request

Can you analyze this layout issue and provide:
1. The root cause of why content doesn't fit with expanded sidebar
2. The best solution approach (A, B, C, D, or alternative)
3. Updated CSS code with proper breakpoints
4. Any additional recommendations for responsive design

The goal is to have a clean, spacious layout that works perfectly with both collapsed and expanded sidebar states on common screen sizes.
