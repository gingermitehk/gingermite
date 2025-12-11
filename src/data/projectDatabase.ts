export type ProjectCategory = 'weddings' | 'events' | 'bouquets' | 'installations' | 'seasonal';

export interface ProjectEntry {
  id: number;
  title: string;
  category: ProjectCategory;
  imagePath: string | string[]; // Support single or multiple images
  date: string; // ISO format: YYYY-MM-DD
  client: string;
  description: string;
}

export interface Client {
  name: string;
  logo: string;
}

// Category colors for visual coding
export const categoryColors: Record<ProjectCategory, string> = {
  weddings: '#d4a5a5',      // Dusty rose
  events: '#a5b8d4',        // Soft blue
  bouquets: '#c4a5d4',      // Lavender
  installations: '#a5d4c4', // Mint green
  seasonal: '#d4c4a5'       // Warm beige
};

export const projectDatabase: ProjectEntry[] = [
  {
    id: 1,
    title: 'Romantic Garden Wedding',
    category: 'weddings',
    imagePath: [
      '/media/familyphotoyellow.jpg',
      '/media/familyphotopoint.jpg',
      '/media/familyphotoyellow.jpg'
    ],
    date: '2024-11-15',
    client: 'Private Client',
    description: 'Elegant rose and peony arrangements for a summer celebration, featuring soft blush tones and natural greenery.'
  },
  {
    id: 2,
    title: 'Corporate Gala Installation',
    category: 'installations',
    imagePath: [
      '/media/familyphotopoint.jpg',
      '/media/familyphotoyellow.jpg',
      '/media/familyphotopoint.jpg',
      '/media/familyphotoyellow.jpg'
    ],
    date: '2024-11-01',
    client: 'Mercedes-Benz',
    description: 'Grand floral archway and statement centerpieces for an annual celebration, bringing sophistication and warmth to the venue.'
  },
  {
    id: 3,
    title: 'Spring Wildflower Collection',
    category: 'seasonal',
    imagePath: '/media/familyphotoyellow.jpg',
    date: '2024-10-20',
    client: 'Retail Collection',
    description: 'Fresh seasonal blooms in natural, organic arrangements that celebrate the beauty of spring.'
  },
  {
    id: 4,
    title: 'Ceremony Floral Backdrop',
    category: 'weddings',
    imagePath: [
      '/media/familyphotopoint.jpg',
      '/media/familyphotoyellow.jpg'
    ],
    date: '2024-10-08',
    client: 'Private Client',
    description: 'Lush greenery wall with cascading blooms, creating an unforgettable focal point for the wedding ceremony.'
  },
  {
    id: 5,
    title: 'Birthday Celebration Florals',
    category: 'events',
    imagePath: '/media/familyphotoyellow.jpg',
    date: '2024-09-25',
    client: 'Private Client',
    description: 'Vibrant mixed arrangements for a milestone birthday, featuring bold colors and joyful energy.'
  },
  {
    id: 6,
    title: 'Holiday Window Display',
    category: 'seasonal',
    imagePath: '/media/familyphotopoint.jpg',
    date: '2024-09-10',
    client: 'Gucci',
    description: 'Festive seasonal installation for a local boutique, capturing the magic of the holiday season.'
  },
  {
    id: 7,
    title: 'Luxury Brand Launch Event',
    category: 'events',
    imagePath: '/media/familyphotoyellow.jpg',
    date: '2024-08-18',
    client: 'Prada',
    description: 'Dramatic floral sculptures and suspended installations for a high-profile product launch in Central Hong Kong.'
  },
  {
    id: 8,
    title: 'Intimate Garden Wedding',
    category: 'weddings',
    imagePath: '/media/familyphotopoint.jpg',
    date: '2024-08-05',
    client: 'Private Client',
    description: 'Delicate hand-tied bouquets and table centerpieces featuring garden roses, sweet peas, and eucalyptus.'
  },
  {
    id: 9,
    title: 'Art Gallery Opening',
    category: 'events',
    imagePath: '/media/familyphotoyellow.jpg',
    date: '2024-07-22',
    client: 'Private Client',
    description: 'Contemporary floral installations that complemented the modern art exhibition, creating a cohesive aesthetic experience.'
  },
  {
    id: 10,
    title: 'Summer Solstice Collection',
    category: 'bouquets',
    imagePath: '/media/familyphotopoint.jpg',
    date: '2024-07-10',
    client: 'Retail Collection',
    description: 'Bright, cheerful arrangements celebrating the longest day of the year with sunflowers, dahlias, and wildflowers.'
  },
  {
    id: 11,
    title: 'Destination Wedding in Bali',
    category: 'weddings',
    imagePath: '/media/familyphotoyellow.jpg',
    date: '2024-06-28',
    client: 'Private Client',
    description: 'Tropical-inspired ceremony arch and reception florals featuring orchids, anthuriums, and lush palm fronds.'
  },
  {
    id: 12,
    title: 'Tech Company Anniversary',
    category: 'events',
    imagePath: '/media/familyphotopoint.jpg',
    date: '2024-06-15',
    client: 'Apple',
    description: 'Minimalist white and green installations for a corporate milestone celebration, emphasizing clean lines and modern design.'
  },
  {
    id: 13,
    title: 'Mothers Day Special Collection',
    category: 'bouquets',
    imagePath: '/media/familyphotoyellow.jpg',
    date: '2024-05-12',
    client: 'Retail Collection',
    description: 'Limited edition bouquets featuring pink peonies, ranunculus, and sweet-scented stocks for Mother\'s Day.'
  },
  {
    id: 14,
    title: 'Cherry Blossom Wedding',
    category: 'weddings',
    imagePath: '/media/familyphotopoint.jpg',
    date: '2024-04-20',
    client: 'Private Client',
    description: 'Romantic ceremony featuring imported cherry blossoms, creating a dreamy pink canopy over the aisle.'
  },
  {
    id: 15,
    title: 'Fashion Week Runway Installation',
    category: 'installations',
    imagePath: '/media/familyphotoyellow.jpg',
    date: '2024-04-05',
    client: 'Tiffany & Co.',
    description: 'Dramatic floral runway borders and statement pieces for a luxury jewelry showcase during Hong Kong Fashion Week.'
  },
  {
    id: 16,
    title: 'Easter Garden Party',
    category: 'seasonal',
    imagePath: '/media/familyphotopoint.jpg',
    date: '2024-03-28',
    client: 'Private Client',
    description: 'Pastel-hued arrangements and whimsical table settings for an elegant Easter brunch celebration.'
  },
  {
    id: 17,
    title: 'Boutique Hotel Lobby Installation',
    category: 'installations',
    imagePath: '/media/familyphotoyellow.jpg',
    date: '2024-03-10',
    client: 'Private Client',
    description: 'Monthly rotating large-scale floral installation for a luxury boutique hotel in Admiralty.'
  },
  {
    id: 18,
    title: 'Valentine\'s Day Luxury Collection',
    category: 'bouquets',
    imagePath: '/media/familyphotopoint.jpg',
    date: '2024-02-14',
    client: 'Retail Collection',
    description: 'Premium red rose arrangements in various sizes, featuring the finest David Austin and Ecuadorian roses.'
  },
  {
    id: 19,
    title: 'Chinese New Year Corporate Gifts',
    category: 'seasonal',
    imagePath: '/media/familyphotoyellow.jpg',
    date: '2024-02-01',
    client: 'Mini Cooper',
    description: 'Auspicious arrangements featuring lucky bamboo, orchids, and pussy willows in red and gold for corporate gifting.'
  },
  {
    id: 20,
    title: 'Winter Wedding at The Peak',
    category: 'weddings',
    imagePath: '/media/familyphotopoint.jpg',
    date: '2024-01-15',
    client: 'Private Client',
    description: 'Elegant all-white winter wedding featuring white amaryllis, roses, and frosted eucalyptus with silver accents.'
  }
];

// Utility function to get the N most recent projects
export const getRecentProjects = (count: number = 6): ProjectEntry[] => {
  return [...projectDatabase]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

// Utility function to filter projects by category
export const filterProjectsByCategory = (category: string): ProjectEntry[] => {
  if (category === 'all') return projectDatabase;
  return projectDatabase.filter(project => project.category === category);
};

// Utility function to get all unique categories
export const getAllCategories = (): ProjectCategory[] => {
  const categories = new Set<ProjectCategory>();
  projectDatabase.forEach(project => {
    categories.add(project.category);
  });
  return Array.from(categories).sort();
};

// Utility function to format date in Chinese style (YYYY.MM.DD)
export const formatDateChinese = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

// Client logos for carousel
export const clients: Client[] = [
  { name: 'Apple', logo: '/media/logos/apple.png' },
  { name: 'Gucci', logo: '/media/logos/gucci.svg' },
  { name: 'Mercedes-Benz', logo: '/media/logos/mercedesbenz.png' },
  { name: 'Mini Cooper', logo: '/media/logos/minicooper.png' },
  { name: 'Prada', logo: '/media/logos/prada.jpg' },
  { name: 'Tiffany & Co.', logo: '/media/logos/tiffany.png' }
];
