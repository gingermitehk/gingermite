import projectsData from './projects.json';
import clientsData from './clients.json';

export type ProjectCategory = 'installation' | 'workshop' | 'gifting' | 'other';

export interface ProjectEntry {
  id: number;
  title: string;
  category: ProjectCategory;
  imagePath: string[];
  date: string;
  client: string;
  description: string;
}

export interface Client {
  name: string;
  logo: string;
}

export const categoryColors: Record<ProjectCategory, string> = {
  installation: '#a5d4c4',
  workshop: '#d4a5a5',
  gifting: '#c4a5d4',
  other: '#d4c4a5'
};

export const projectDatabase: ProjectEntry[] = projectsData as ProjectEntry[];

// --- Utility Functions ---

export const getRecentProjects = (count: number = 6): ProjectEntry[] => {
  return [...projectDatabase]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const filterProjectsByCategory = (category: string): ProjectEntry[] => {
  if (category === 'all') return projectDatabase;
  return projectDatabase.filter(project => project.category === category);
};

export const getAllCategories = (): ProjectCategory[] => {
  return ['installation', 'workshop', 'gifting', 'other'];
};

export const formatDateChinese = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

// --- Client Configuration ---

export const clients: Client[] = clientsData as Client[];
